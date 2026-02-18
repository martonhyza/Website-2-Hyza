
import React from 'react';

const BrainLogo: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Architectural Monolith Frame */}
        <rect x="35" y="20" width="30" height="60" rx="2" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        
        {/* Vertical Neural Path */}
        <line x1="50" y1="20" x2="50" y2="80" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        
        {/* Pulsing Intelligence Nodes */}
        <circle cx="50" cy="35" r="2" fill="#3b82f6" className="animate-pulse">
           <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" r="3" fill="#3b82f6" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="50" cy="50" r="1.5" fill="white" />
        <circle cx="50" cy="65" r="2" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '1.5s' }}>
           <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Outer Connection Brackets */}
        <path d="M30 30L25 30V70L30 70" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
        <path d="M70 30L75 30V70L70 70" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
      </svg>
      {/* Subtle Structural Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full"></div>
    </div>
  );
};

export default BrainLogo;
