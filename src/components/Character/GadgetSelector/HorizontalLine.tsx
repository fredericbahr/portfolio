import React from "react";

interface ILineProps {
  className?: string;
}

export const HorizontalLine = ({ className }: ILineProps) => {
  return (
    <svg width="100%" height="100%" className={className}>
      <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="white"></line>
    </svg>
  );
};
