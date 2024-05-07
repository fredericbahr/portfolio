/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Box, keyframes, useToken } from "@chakra-ui/react";
import { SVGProps } from "react";

interface IAnimatedLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Component for rendering the animated logo
 */
export default function AnimatedLogo({ ...rest }: IAnimatedLogoProps) {
  const [brand500] = useToken("colors", ["brand.500"]);

  const keyframeSvgStroke1 = keyframes`
    from {
      stroke-dashoffset: 200.65640258789062px;
      stroke-dasharray: 200.65640258789062px;
    }

    to {
      stroke-dashoffset: 0;
      stroke-dasharray: 200.65640258789062px;
    }`;

  const keyframeSvgStroke2 = keyframes`
    from {
      stroke-dashoffset: 325.55010986328125px;
      stroke-dasharray: 325.55010986328125px;
    }
  
    to {
      stroke-dashoffset: 0;
      stroke-dasharray: 325.55010986328125px;
    }
  `;

  const keyframeSvgFill = keyframes` 
    from {
      fill: transparent;
    }
  
    to {
      fill: ${brand500};
    }
  `;

  const keyframeSvgFade = keyframes` 
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
    }
  `;

  return (
    <svg
      id="e76RbDrnTZM1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 226.304018 200.378"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      {...rest}
    >
      <Box
        as="path"
        id="e76RbDrnTZM2"
        d="M75.000003,20.999997L75.000003,43.003079L152.325119,43.003079L152.325119,20.999997L75.000003,20.999997Z"
        fill={brand500}
        stroke={brand500}
        strokeWidth="0.452608"
        animation={`${keyframeSvgStroke1} 1.2s ease 0s both, ${keyframeSvgFill} 0.5s ease-in 1.2s both,
          ${keyframeSvgFade} 0.5s ease-in 2s both`}
      ></Box>
      <Box
        as="path"
        id="e76RbDrnTZM3"
        d="M75.000003,72.550075L75.000003,156.999998L97.841297,156.999997L97.841297,94.972261L152.325119,94.97226L152.325119,72.550072L75.000003,72.550075Z"
        transform="matrix(1 0 0 1 0 0.000003)"
        fill={brand500}
        stroke={brand500}
        strokeWidth="0.452608"
        animation={`${keyframeSvgStroke2} 1.2s ease 0.1s both, ${keyframeSvgFill} 0.5s ease-in 1.2s both,
        ${keyframeSvgFade} 0.5s ease-in 2s both`}
      ></Box>
    </svg>
  );
}
