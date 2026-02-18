
import React from 'react';

const BrainLogo: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center transition-all duration-700 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Main Architectural Pillars */}
        <rect x="22" y="20" width="12" height="60" rx="1" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        <rect x="66" y="20" width="12" height="60" rx="1" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
        
        {/* Dynamic Data Bridges */}
        <path d="M34 35H66" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        <path d="M34 50H66" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" className="animate-pulse" />
        <path d="M34 65H66" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />

        {/* Central Neural Hub */}
        <g className="animate-pulse" style={{ animationDuration: '3s' }}>
          <circle cx="50" cy="50" r="10" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
          <circle cx="50" cy="50" r="5" fill="#3b82f6" fillOpacity="0.6" />
          <circle cx="50" cy="50" r="2" fill="white" />
        </g>

        {/* Status Indicators */}
        <rect x="25" y="45" width="6" height="2" fill="#3b82f6" className="animate-pulse" />
        <rect x="69" y="30" width="6" height="2" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Outer Frame Brackets */}
        <path d="M15 25V15H25" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
        <path d="M75 15H85V25" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
        <path d="M85 75V85H75" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
        <path d="M25 85H15V75" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
      </svg>
      {/* Structural Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[50px] rounded-full opacity-50"></div>
    </div>
  );
};

export default BrainLogo;
