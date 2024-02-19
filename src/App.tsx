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

import { ChakraProvider } from "@chakra-ui/react";

import { Header } from "./components/Header/Header";
import { useColorScheme } from "./context/ColorSchemeContext";

function App() {
  const { colorScheme } = useColorScheme();

  return (
    <ChakraProvider theme={colorScheme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
