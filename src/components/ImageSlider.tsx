/*
 * COPYRIGHT (C) 2023 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Box, Grid, Heading, HStack, Icon, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

export interface ImageDescription {
  title: string;
  description: string;
}

interface ImageSliderProps {
  images: string[];
  index: number;
  onIndexChange: (index: number) => void;
}

/**
 * A classic image slider carousel with swipe support.
 */
export const ImageSlider = ({ images, index = 0, onIndexChange }: ImageSliderProps) => {
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => onIndexChange(modulo(index + 1, images.length)),
    onSwipedLeft: () => onIndexChange(modulo(index - 1, images.length)),
    onSwiped: () => console.log("swiped"),
    trackMouse: true,
  });

  /** modulo function that also works with negative numbers */

  const modulo = (n: number, m: number) => ((n % m) + m) % m;

  return (
    <VStack width="full">
      <Grid gridTemplateColumns="auto 1fr auto" placeItems="center" width="full" gap={12}>
        <IconButton
          aria-label="Previous"
          icon={<Icon as={CaretLeft} />}
          onClick={() => onIndexChange(modulo(index - 1, images.length))}
          size={{ base: "xs", lg: "md" }}
        />

        <Image
          src={images[index]}
          objectFit="contain"
          maxWidth={{ base: "full", lg: "70%" }}
          draggable
          {...swipeHandlers}
        />

        <IconButton
          aria-label="Next"
          icon={<Icon as={CaretRight} />}
          onClick={() => onIndexChange(modulo(index + 1, images.length))}
          size={{ base: "xs", lg: "md" }}
        />
      </Grid>

      <VStack gap={4}>
        <HStack gap={4}>
          {Array.from({ length: images.length }).map((_, idx: number) => (
            <Box
              minWidth={4}
              minHeight={1}
              backgroundColor={index === idx ? "brand.500" : "brand.900"}
              _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
              transition="all 0.2s ease-in-out"
              onClick={() => onIndexChange(idx)}
              key={idx}
            ></Box>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};
