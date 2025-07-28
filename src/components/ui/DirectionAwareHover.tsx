import React, { useRef, useState, MouseEvent } from 'react';

interface DirectionAwareHoverProps {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
}

const DirectionAwareHover: React.FC<DirectionAwareHoverProps> = ({
  imageUrl,
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);

  const getDirection = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return "";

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    const top = y;
    const bottom = h - y;
    const left = x;
    const right = w - x;

    const min = Math.min(top, bottom, left, right);

    if (min === top) return "top";
    if (min === bottom) return "bottom";
    if (min === left) return "left";
    if (min === right) return "right";

    return "";
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const dir = getDirection(e);
    setDirection(dir);
    setIsHovered(true);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const dir = getDirection(e);
    setDirection(dir);
    setIsHovered(false);
  };

  const getTransformClasses = () => {
    if (!isHovered) {
      switch (direction) {
        case "top":
          return "translate-y-[-100%]";
        case "bottom":
          return "translate-y-[100%]";
        case "left":
          return "translate-x-[-100%]";
        case "right":
          return "translate-x-[100%]";
        default:
          return "translate-y-[-100%]";
      }
    }
    return "translate-x-0 translate-y-0";
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl group cursor-pointer ${className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Static Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Direction-aware hover overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/80 to-purple-600/90 backdrop-blur-sm transition-all duration-500 ease-out ${getTransformClasses()}`}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default DirectionAwareHover;
