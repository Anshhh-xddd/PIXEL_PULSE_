import React, { useEffect, useState } from 'react';

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(0);

  const loadingMessages = [
    // "Initializing Robotic Systems...",
    // "Loading AI Neural Networks...",
    // "Calibrating Design Protocols...",
    // "Establishing Data Connections...",
    // "Optimizing Interface Elements...",
    // "Preparing Visual Components...",
    // "Synchronizing Brand Assets...",
    // "Finalizing System Integration...",
    // "Launching RoboFlux Experience...",
    // "System Ready for Deployment..."
    "Loading..."
  ];

  useEffect(() => {
    let interval: number;
    if (progress < 100) {
      interval = window.setInterval(() => {
        setProgress((prev) => Math.min(prev + Math.random() * 15, 100));
      }, 200);
    } else {
      window.setTimeout(() => onFinish(), 400);
    }
    return () => clearInterval(interval);
  }, [progress, onFinish]);

  useEffect(() => {
    const textInterval = window.setInterval(() => {
      setLoadingText((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[20000] flex flex-col items-center justify-center bg-black">
      {/* Logo with pulse animation */}
      <div className="text-3xl font-bold text-orange-500 mb-8 animate-pulse tracking-widest">
        PIXEL<span className="text-white">PULSE</span>
      </div>
      
      {/* Animated loading text */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center bg-gray-900/50 px-6 py-3 rounded-full border border-gray-700 animate-pulse hover:scale-105 transition-transform duration-300">
          <div className="text-gray-300 text-sm sm:text-base md:text-lg font-medium text-center">
            <span className="relative inline-block overflow-hidden">
              <span
                key={loadingText}
                className="block animate-wipe text-center"
                style={{
                  animation: 'wipe-in 1.5s cubic-bezier(0.4,0,0.2,1)'
                }}
              >
                {loadingMessages[loadingText]}
              </span>
              <style>
                {`
                  @keyframes wipe-in {
                    0% {
                      clip-path: inset(0 100% 0 0);
                      opacity: 0.5;
                      transform: translateX(-10px);
                    }
                    60% {
                      opacity: 1;
                      transform: translateX(0);
                    }
                    100% {
                      clip-path: inset(0 0 0 0);
                      opacity: 1;
                      transform: translateX(0);
                    }
                  }
                  .animate-wipe {
                    animation: wipe-in 1.5s cubic-bezier(0.4,0,0.2,1);
                    will-change: clip-path, opacity, transform;
                  }
                `}
              </style>
            </span>
          </div>
          {/* <div className="flex space-x-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '0.6s' }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '1.65s', animationDuration: '0.6s' }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '0.6s' }}></div>
          </div> */}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-3 bg-gray-800 rounded-full overflow-hidden shadow-lg">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-200 relative"
          style={{ width: `${progress}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      {/* Progress percentage */}
      <div className="mt-4 text-gray-400 text-sm tracking-wider">
        Processing... {Math.round(progress)}%
      </div>

      {/* System status indicators */}
      {/* <div className="mt-8 flex space-x-4 text-xs text-gray-500">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span>Core Systems</span>
        </div>
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${progress > 30 ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}></div>
          <span>AI Engine</span>
        </div>
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${progress > 60 ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}></div>
          <span>Interface</span>
        </div>
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${progress > 90 ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`}></div>
          <span>Ready</span>
        </div>
      </div> */}
    </div>
  );
};

export default Loader; 