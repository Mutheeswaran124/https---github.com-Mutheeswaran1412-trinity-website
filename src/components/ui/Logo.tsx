import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="https://trinitetech.com/wp-content/uploads/2023/12/Logo-trinity.webp" // Update the correct path
        alt="TrinityTech Logo"
        className="mr-6 h-12 mt-4" // Adjust height as needed
      />
    </div>
  );
};

export default Logo;

