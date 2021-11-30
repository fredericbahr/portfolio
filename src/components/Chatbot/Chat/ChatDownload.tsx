import React, { useLayoutEffect, useRef } from "react";
import { IChatDownload } from "../../../interfaces/chat";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import styled from "styled-components";
import useElementDimensions from "../../../utils/hooks/useElementDimension";
import { Card, CardActionArea, CardContent, CircularProgress, Typography } from "@mui/material";

const StyledCard = styled(Card)`
  margin: 0.5rem 0;
  max-width: 80%;
`;

const StyledPage = styled(Page)`
  & > div {
    margin: auto;
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 5px;
  text-align: center;
`;

export const ChatDownload = ({ type, url }: IChatDownload) => {
  const ref = useRef(null);
  const size = useElementDimensions(ref.current);

  const renderPDFDownlaod = () => {
    return (
      <a href={url.toString()} download="frederic_bahr_cv" ref={ref}>
        <StyledCard>
          <CardActionArea>
            <CardContent>
              <Document file={url} renderMode="svg">
                <StyledPage pageNumber={1} height={size.width} loading={<CircularProgress />} />
              </Document>
              <StyledTypography>Download CV!</StyledTypography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      </a>
    );
  };

  return <>{type === "pdf" ? renderPDFDownlaod() : ""}</>;
};
