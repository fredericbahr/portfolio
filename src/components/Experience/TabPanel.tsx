import { Box } from "@mui/material";
import styled from "styled-components";

interface IProbs {
  children?: React.ReactNode;
  className?: string;
  index: number;
  value: number;
}

const StyledWrapper = styled.div`
  flex-grow: 1;
`;

export const TabPanel = ({ children, className, value, index }: IProbs) => {
  return (
    <StyledWrapper className={className} role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </StyledWrapper>
  );
};
