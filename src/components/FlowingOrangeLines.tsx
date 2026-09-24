import React from 'react';

interface FlowingOrangeLinesProps {
  variant?: 'hero' | 'work' | 'cta' | 'divider';
  className?: string;
}

export const FlowingOrangeLines: React.FC<FlowingOrangeLinesProps> = ({
  variant = 'hero',
  className = '',
}) => {
  if (variant === 'hero') {
    return (
      <svg
        className={`absolute pointer-events-none opacity-40 z-0 ${className}`}
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 150 C 200 50, 400 350, 700 200 C 1000 50, 1100 400, 1300 300"
          stroke="#FF5500"
          strokeWidth="2"
          strokeDasharray="8 6"
        />
        <path
          d="M-50 250 C 250 150, 450 450, 850 250 C 1050 100, 1200 450, 1350 350"
          stroke="#FF5500"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>
    );
  }

  if (variant === 'work') {
    return (
      <svg
        className={`absolute pointer-events-none opacity-30 z-0 ${className}`}
        viewBox="0 0 1000 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 100 Q 300 400, 600 200 T 1100 700"
          stroke="#FF5500"
          strokeWidth="1.75"
        />
        <path
          d="M-100 300 Q 200 600, 700 400 T 1150 850"
          stroke="#FF5500"
          strokeWidth="1"
          strokeDasharray="6 4"
        />
      </svg>
    );
  }

  if (variant === 'cta') {
    return (
      <svg
        className={`absolute pointer-events-none opacity-45 z-0 ${className}`}
        viewBox="0 0 1000 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 200 C 200 50, 500 350, 800 150 C 950 50, 1100 250, 1200 180"
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.25"
        />
        <path
          d="M-50 120 C 250 280, 550 50, 850 280 C 1000 380, 1150 100, 1250 220"
          stroke="#0C2230"
          strokeWidth="1.5"
          opacity="0.35"
        />
      </svg>
    );
  }

  // Default section divider flowing line
  return (
    <svg
      className={`w-full h-12 pointer-events-none opacity-35 ${className}`}
      viewBox="0 0 1440 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 30 Q 360 0, 720 30 T 1440 30"
        stroke="#FF5500"
        strokeWidth="1.5"
      />
    </svg>
  );
};
