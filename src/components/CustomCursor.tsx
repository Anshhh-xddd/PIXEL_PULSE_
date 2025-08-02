import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
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
    <div
      ref={cursorRef}
      className="custom-cursor pointer-events-none fixed z-[10000] w-10 h-10 rounded-full  bg-white/30 backdrop-blur-md shadow-md  transition-all duration-150 -translate-x-1/2 -translate-y-1/2"
      style={{ left: 0, top: 0 }}
    ></div>
  );
};

export default CustomCursor; 