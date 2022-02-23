import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import pdfFileIcon from "../../../assets/img/pdf-file.svg";
import useElementDimensions from "../../../utils/hooks/useElementDimension";
import { IChatDownload } from "../interface";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const StyledCard = styled(Card)`
  margin: 0.5rem 0;
  max-width: 80%;
  background-color: rgba(70, 77, 66, 0.15);
  border-radius: 1.125rem 1.125rem 1.125rem 0;
`;

const StyledCardContent = styled(CardContent)`
  padding: 0.8rem 0.8rem 0 0.8rem;
`;

const StyledPage = styled(Page)`
  & > div {
    margin: auto;
  }
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  font-size: 0.8rem;
`;

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const ChatDownload = ({ type, url, fileName }: IChatDownload) => {
  const ref = useRef(null);
  const size = useElementDimensions(ref.current);

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
    console.log("URL:", url);
    return (
      <StyledCard ref={ref}>
        <CardActionArea onClick={() => handleDownload()}>
          <StyledCardContent>
            <Document file={url} renderMode="svg">
              <StyledPage pageNumber={1} height={size.width} loading={<CircularProgress />} />
            </Document>
          </StyledCardContent>
        </CardActionArea>
        <StyledCardActions>
          <StyledImg src={pdfFileIcon} />
          <StyledTypography>{fileName}.pdf</StyledTypography>
          <IconButton onClick={() => handleDownload()}>
            <ArrowCircleDownIcon />
          </IconButton>
        </StyledCardActions>
      </StyledCard>
    );
  };

  return <>{type === "pdf" ? renderPDFDownlaod() : ""}</>;
};
