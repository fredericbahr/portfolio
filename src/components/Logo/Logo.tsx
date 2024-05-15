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

import { Box, BoxProps, useToken } from "@chakra-ui/react";

interface ILogoProps extends BoxProps {
  className?: string;
}

/**
 * Component for rendering the logo (non-animated)
 */
const Logo = ({ ...rest }: ILogoProps) => {
  const [brand500] = useToken("colors", ["brand.500"]);

  return (
    <Box
      as="svg"
      id="e76RbDrnTZM1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 226.304018 200.378"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      {...rest}
    >
      <path
        id="e76RbDrnTZM2"
        d="M75.000003,20.999997L75.000003,43.003079L152.325119,43.003079L152.325119,20.999997L75.000003,20.999997Z"
        fill={brand500}
        stroke={brand500}
        strokeWidth="0.452608"
      ></path>
      <path
        id="e76RbDrnTZM3"
        d="M75.000003,72.550075L75.000003,156.999998L97.841297,156.999997L97.841297,94.972261L152.325119,94.97226L152.325119,72.550072L75.000003,72.550075Z"
        transform="matrix(1 0 0 1 0 0.000003)"
        fill={brand500}
        stroke={brand500}
        strokeWidth="0.452608"
      ></path>
    </Box>
  );
};

export default Logo;
