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

import { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";
const keywords = ["Software Developer", "Web Enthusiast", "Frederic Bahr"];

/**
 * Custom hook for decrypting the hero keywords
 * Cycle through the keywords and display them in the hero section
 */
export const useHeroKeywords = () => {
  const [dencryptText, dencrypt] = useDencrypt("Frederic Bahr");

  useEffect(() => {
    let index = 0;

    const action = setInterval(() => {
      dencrypt(keywords[index]);

      index = index === keywords.length - 1 ? 0 : index + 1;
    }, 4000);

    return () => clearInterval(action);
  }, []);

  return dencryptText;
};
