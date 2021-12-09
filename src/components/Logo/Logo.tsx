import React from "react";

interface IProps {
  className?: string;
}

const Logo = ({ className }: IProps) => {
  return (
    <svg
      className={className}
      id="e76RbDrnTZM1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 226.304018 200.378"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <path
        id="e76RbDrnTZM2"
        d="M75.000003,20.999997L75.000003,43.003079L152.325119,43.003079L152.325119,20.999997L75.000003,20.999997Z"
        fill="#cc0e00"
        stroke="#cc0e00"
        strokeWidth="0.452608"
        className="svg-elem-1"
      ></path>
      <path
        id="e76RbDrnTZM3"
        d="M75.000003,72.550075L75.000003,156.999998L97.841297,156.999997L97.841297,94.972261L152.325119,94.97226L152.325119,72.550072L75.000003,72.550075Z"
        transform="matrix(1 0 0 1 0 0.000003)"
        fill="#cc0e00"
        stroke="#cc0e00"
        strokeWidth="0.452608"
        className="svg-elem-2"
      ></path>
    </svg>
  );
};

export default Logo;
