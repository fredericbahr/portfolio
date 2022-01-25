import { Box, Typography } from "@mui/material";
import styled from "styled-components";

interface IProbs {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledWrapper = styled.div`
    flex-grow: 1;
`

export const TabPanel = ({ children, value, index }: IProbs) => {
  return (
    <StyledWrapper role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </StyledWrapper>
  );
};
