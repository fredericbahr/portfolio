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

import {
  Icon,
  IconButton,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Translate } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  /** translation hook to get access to the translate function and i18n context */
  const { t, i18n } = useTranslation();

  /** background hover color for the language optons */
  const backgroundHoverColor = useColorModeValue("gray.100", "gray.800");

  /** state and function for opening the popover */
  const { isOpen, onOpen, onClose } = useDisclosure();

  /**
   * Handles the change of the language
   * @param language - the language to change to
   */
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    onClose();
  };

  return (
    <Popover placement="bottom-end" closeOnEsc onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
      <PopoverTrigger>
        <IconButton aria-label="Change language" icon={<Icon as={Translate} />} variant="outline" colorScheme="gray" />
      </PopoverTrigger>

      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader display="flex" alignItems="center">
            {t("navigation.languageSwitch.title")}
          </PopoverHeader>
          <PopoverBody padding={0}>
            <List spacing={2}>
              <ListItem
                width="full"
                _hover={{
                  backgroundColor: backgroundHoverColor,
                  cursor: "pointer",
                }}
                onClick={() => handleLanguageChange("de")}
              >
                <Text paddingY={2} paddingX={4}>
                  {t("navigation.languageSwitch.german")}
                </Text>
              </ListItem>
              <ListItem
                _hover={{
                  backgroundColor: backgroundHoverColor,
                  cursor: "pointer",
                }}
                onClick={() => handleLanguageChange("en")}
              >
                <Text paddingY={2} paddingX={4}>
                  {t("navigation.languageSwitch.english")}
                </Text>
              </ListItem>
            </List>
            <PopoverCloseButton />
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
