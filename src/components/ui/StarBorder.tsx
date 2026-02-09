"use client";

import React from "react";

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  color?: string;
  speed?: React.CSSProperties["animationDuration"];
  thickness?: number;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Tag = "div",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}) => {
  return React.createElement(
    Tag,
    {
      className: `relative inline-block overflow-hidden rounded-[20px] ${className}`,
      style: { padding: `${thickness}px`, ...style },
      ...rest,
    },
    <div
      className="absolute w-[300%] h-[50%] opacity-70 -bottom-2.75 right-[-250%] rounded-full animate-star-movement-bottom z-0"
      style={{
        background: `radial-gradient(circle, ${color}, transparent 10%)`,
        animationDuration: speed,
      }}
    />,
    <div
      className="absolute w-[300%] h-[50%] opacity-70 -top-2.5 left-[-250%] rounded-full animate-star-movement-top z-0"
      style={{
        background: `radial-gradient(circle, ${color}, transparent 10%)`,
        animationDuration: speed,
      }}
    />,
    <div className="relative z-1 bg-transparent text-foreground rounded-[20px]">
      {children}
    </div>
  );
};

export default StarBorder;
