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

import { Box } from "@chakra-ui/react";

interface SpotlightProps {
  fill?: string;
}

/**
 * Component for rendering a spotlight
 * @param fill - the fill color of the spotlight
 */
export const Spotlight = ({ fill }: SpotlightProps) => {
  return (
    <Box
      as="svg"
      className="spotlight"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      pointerEvents="none"
      position="absolute"
      top={-120}
      left={-250}
      maxHeight="100vh"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="2574.71"
          cy="273.501"
          rx="1424.71"
          ry="353.501"
          transform="matrix(-0.822377 -0.768943 -0.568943 0.822377 3831.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.27"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
        </filter>
      </defs>
    </Box>
  );
};
