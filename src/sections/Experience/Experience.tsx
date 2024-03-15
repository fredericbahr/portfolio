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
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Heading as ChakraHeading,
  HStack,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { CaretDown, Link as LinkIcon, MapPinLine, Terminal } from "@phosphor-icons/react";
import { format } from "date-fns";
import { de } from "date-fns/locale";

import { Heading } from "../../components/Heading/Heading";
import { experiences, IExperience } from "./experience";

const isSingleDescription = (description: string | string[]): description is string => typeof description === "string";
/**
 * Component for displaying the experience section
 */
export const Experience = () => {
  const borderColor = useColorModeValue("gray.800", "gray.200");
  const dividerColor = useColorModeValue("gray.500", "gray.400");

  return (
    <VStack width="full" alignItems="start" spacing={4}>
      <Heading>Erfahrung</Heading>

      <VStack width="full" spacing={8}>
        <ChakraHeading as="h3" width="full" textAlign="center" fontSize="xl">
          Meine bisherige professionelle Erfahrung
        </ChakraHeading>

        <Accordion allowMultiple width="full" display="flex" flexDirection="column" gap={6}>
          {experiences.map((experience: IExperience) => (
            <AccordionItem border="1px solid" borderColor={borderColor}>
              {({ isExpanded }) => (
                <>
                  <ChakraHeading as="h4" fontSize="lg">
                    <AccordionButton paddingX={4} paddingY={3}>
                      <HStack width="full" justifyContent="space-between" marginRight={4}>
                        <HStack spacing={1}>
                          <Text as="span">{experience.title}</Text>
                          <Text as="span" color="brand.500">
                            @
                          </Text>
                          <Link href={experience.companyUrl} isExternal>
                            {experience.company}
                          </Link>
                        </HStack>

                        <Text as="span" fontSize="md">
                          {format(new Date(experience.startDate), "MMM yyyy", { locale: de })} -{" "}
                          {experience.endDate === "present"
                            ? "Heute"
                            : format(new Date(experience.endDate), "MMM yyyy", { locale: de })}
                        </Text>
                      </HStack>
                      <AccordionIcon as={CaretDown} />
                    </AccordionButton>
                  </ChakraHeading>

                  {isExpanded && <Divider width="98%" margin="auto" borderColor={dividerColor} />}

                  <AccordionPanel paddingBottom={4} paddingX={4} fontSize="md" marginTop={2}>
                    <VStack width="full" alignItems="start" spacing={6}>
                      <HStack spacing={6}>
                        <HStack spacing={1}>
                          <Icon as={MapPinLine} />
                          <Text>{experience.location}</Text>
                        </HStack>

                        <HStack spacing={1}>
                          <Icon as={LinkIcon} />
                          <Link href={experience.companyUrl} isExternal>
                            {experience.companyUrl}
                          </Link>
                        </HStack>
                      </HStack>

                      <List marginLeft={2}>
                        {isSingleDescription(experience.description) ? (
                          <ListItem>
                            <ListIcon as={Terminal} color="green.500" />
                            {experience.description}
                          </ListItem>
                        ) : (
                          <>
                            {experience.description.map((description: string) => (
                              <ListItem>
                                <ListIcon as={Terminal} color="green.500" />
                                {description}
                              </ListItem>
                            ))}
                          </>
                        )}
                      </List>

                      <HStack spacing={2}>
                        {experience.skills.map((skill: string) => (
                          <Tag colorScheme="gray">{skill}</Tag>
                        ))}
                      </HStack>
                    </VStack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </VStack>
  );
};
