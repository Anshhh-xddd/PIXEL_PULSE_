import React, { useEffect, useRef, useState } from 'react';

interface SmokeParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
  life: number;
  maxLife: number;
}

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const smokeOpacity = useRef(0);
  const [particles, setParticles] = useState<SmokeParticle[]>([]);
  const particleId = useRef(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      // Check if mouse is moving
      const distance = Math.sqrt(
        Math.pow(currentX - lastMousePos.current.x, 2) + 
        Math.pow(currentY - lastMousePos.current.y, 2)
      );
      
      isMoving.current = distance > 2; // Threshold for movement detection
      
      if (isMoving.current) {
        // Fade in smoke effect
        smokeOpacity.current = Math.min(smokeOpacity.current + 0.12, 1);
        
        // Create multiple smoke particles for more effect
        const particleCount = Math.floor(Math.random() * 4) + 3; // 3-6 particles per movement
        
        for (let i = 0; i < particleCount; i++) {
          const newParticle: SmokeParticle = {
            id: particleId.current++,
            x: currentX + (Math.random() - 0.5) * 15, // Increased spread (10 → 15)
            y: currentY + (Math.random() - 0.5) * 15,
            vx: (Math.random() - 0.5) * 2.4,
            vy: (Math.random() - 0.5) * 2.4,
            opacity: 0.95 + Math.random() * 0.05, // Increased opacity (0.9-1.0 → 0.95-1.0)
            size: Math.random() * 8 + 6, // Increased size (4-10px → 6-14px)
            life: 0,
            maxLife: Math.random() * 48 + 32
          };
          
          setParticles(prev => [...prev, newParticle]);
        }
      } else {
        // Fade out smoke effect
        smokeOpacity.current = Math.max(smokeOpacity.current - 0.024, 0);
      }
      
      mouseRef.current.x = currentX;
      mouseRef.current.y = currentY;
      lastMousePos.current.x = currentX;
      lastMousePos.current.y = currentY;
    };

    const animateCursor = () => {
      // Smooth interpolation for main cursor
      cursorPosRef.current.x += (mouseRef.current.x - cursorPosRef.current.x) * 0.1;
      cursorPosRef.current.y += (mouseRef.current.y - cursorPosRef.current.y) * 0.1;

      // Update particles
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            opacity: particle.opacity - 0.01,
            life: particle.life + 1,
            size: particle.size * 0.98
          }))
          .filter(particle => particle.life < particle.maxLife && particle.opacity > 0)
      );

      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPosRef.current.x + 'px';
        cursorRef.current.style.top = cursorPosRef.current.y + 'px';
      }

      requestAnimationFrame(animateCursor);
    };

    const addClickEffect = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('cursor-click');
        setTimeout(() => {
          cursorRef.current && cursorRef.current.classList.remove('cursor-click');
        }, 200);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', addClickEffect);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', addClickEffect);
    };
  }, []);

  useEffect(() => {
    const handleHover = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        cursorRef.current.classList.add('cursor-hover');
      } else {
        cursorRef.current.classList.remove('cursor-hover');
      }
    };
    document.addEventListener('mousemove', handleHover);
    return () => document.removeEventListener('mousemove', handleHover);
  }, []);

  return (
    <>
      {/* Main cursor with smooth movement */}
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed z-[10000] w-8 h-8 rounded-full bg-white/30 backdrop-blur-md shadow-md transition-all duration-150 -translate-x-1/2 -translate-y-1/2"
        style={{ left: 0, top: 0 }}
      ></div>
      
      {/* Smoke particles */}
      <div className="smoke-container pointer-events-none fixed inset-0 z-[9998]">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="smoke-particle absolute rounded-full bg-orange-500/30"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              transform: 'translate(-50%, -50%)',
              transition: 'opacity 0.1s ease'
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CustomCursor; 