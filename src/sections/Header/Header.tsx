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

import { Collapse, Flex, Icon, IconButton, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { List as ListIcon, X } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import { MobileNavigation } from "./Navigation/MobileNavigation";
import { Navigation } from "./Navigation/Navigation";

/**
 * Component for rendering the header of the application
 */
export const Header = () => {
  /** flag indicating whether screen is mobile size */
  const [isMobile] = useMediaQuery("(max-width: 62em)");

  /** state of the mobile navigation */
  const { isOpen: isMobileNavOpen, onToggle: onToggleMobileNav } = useDisclosure();

  /** navigation hook for routing */
  const navigate = useNavigate();

  return (
    <>
      <Flex
        as="header"
        flexDirection="row"
        width="full"
        padding={2}
        marginBottom={{ base: 0, lg: 2 }}
        justifyContent={{ base: "space-between", lg: "unset" }}
      >
        <IconButton
          icon={<Logo maxH={12} />}
          aria-label="Logo"
          variant="ghost"
          marginLeft={6}
          onClick={() => navigate("/")}
        />
        {isMobile && (
          <IconButton
            aria-label="Open Menu"
            icon={isMobileNavOpen ? <Icon as={X} /> : <Icon as={ListIcon} />}
            onClick={onToggleMobileNav}
            variant="ghost"
            colorScheme="gray"
          />
        )}
        {!isMobile && <Navigation />}
      </Flex>
      {isMobile && (
        <Flex justifyContent="center" width="full" margin="0 auto" marginTop={-3}>
          <Collapse in={isMobileNavOpen} animateOpacity>
            <MobileNavigation />
          </Collapse>
        </Flex>
      )}
    </>
  );
};
