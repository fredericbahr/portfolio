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

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import { Card, CardBody, CardFooter, Flex, HStack, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { MutableRefObject, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Document, Page, pdfjs } from "react-pdf";

import { IChatDownload } from "../chatbot.interface";
import { ElementDimension, useElementDimensions } from "../hooks/useElementDimensions";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

/**
 * Component to render the chat download
 */
export const ChatDownload = ({ type, url, fileName }: IChatDownload) => {
  const { t } = useTranslation();

  const cardRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const size: ElementDimension = useElementDimensions(cardRef.current);

  /**
   * Creates an anchor element and sets the download and href
   * Immediatly clicks it and then removes the element again
   */
  const handleDownload = () => {
    const link: HTMLAnchorElement = document.createElement("a");
    document.body.appendChild(link);
    link.download = fileName.toString();
    link.href = url.toString();
    link.click();
    document.body.removeChild(link);
  };

  const renderPDFDownlaod = () => {
    return (
      <Flex width="full">
        <Card onClick={() => handleDownload()} _hover={{ cursor: "pointer" }}>
          <CardBody ref={cardRef}>
            <Document file={url}>
              <Page pageNumber={1} width={size.width} loading="Laden" />
            </Document>
          </CardBody>
          <CardFooter width="full" padding={2}>
            <HStack width="full" justifyContent="space-between">
              <Text fontSize="sm">{fileName}.pdf</Text>
              <Tooltip label={t("chatbot.showCV.download")} hasArrow openDelay={500}>
                <IconButton
                  onClick={() => handleDownload()}
                  aria-label="Download"
                  icon={<Icon as={DownloadSimpleIcon} />}
                  variant="ghost"
                  colorScheme="gray"
                />
              </Tooltip>
            </HStack>
          </CardFooter>
        </Card>
      </Flex>
    );
  };

  return <>{type === "pdf" ? renderPDFDownlaod() : null}</>;
};
