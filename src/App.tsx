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

import "./i18n/i18n";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import AnimatedLogo from "./components/Logo/AnimatedLogo";
import { useColorScheme } from "./context/ColorSchemeContext";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Hero } from "./sections/Hero/Hero";
import { EAFlowShop, Kirmize, MMDB, Portfolio, QuatschChatbot, WeatherData } from "./sections/Projects";
import { Projects } from "./sections/Projects/Projects";

function App() {
  const { colorScheme } = useColorScheme();

  const [isInitialAnimation, setIsInitialAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialAnimation(false);
    }, 2800);
  }, []);

  return (
    <ChakraProvider theme={colorScheme}>
      <Routes>
        <Route
          path="/"
          element={
            isInitialAnimation ? (
              <Flex justifyContent="center" alignItems="center" height="100vh">
                <AnimatedLogo height="30vh" />
              </Flex>
            ) : (
              <Layout>
                <Hero />
                <About />
                <Experience />
                <Projects />
              </Layout>
            )
          }
        />

        {/* Project Routes */}
        <Route
          path="/kirmize"
          element={
            <Layout>
              <Kirmize />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/quatsch-chatbot-2022"
          element={
            <Layout>
              <QuatschChatbot />
            </Layout>
          }
        />
        <Route
          path="/multimedia-database-veterinary-practice"
          element={
            <Layout>
              <MMDB />
            </Layout>
          }
        />
        <Route
          path="/ea-flow-shop-optimizer"
          element={
            <Layout>
              <EAFlowShop />
            </Layout>
          }
        />
        <Route
          path="/xml-weather-visualization"
          element={
            <Layout>
              <WeatherData />
            </Layout>
          }
        />
        <Route
          path="contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
