import React from "react";

interface ILineProps {
  className?: string;
}

export const VerticalLine = ({ className }: ILineProps) => {
  return (
    <svg width="100%" height="100%" className={className}>
      <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="white"></line>
    </svg>
  );
};