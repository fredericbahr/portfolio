import { Grow, lighten, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../styles/globalStyles";
import { introductionDelay, timeout } from "../../utils/constants";
import { Character } from "../Character/Character";
import { CTAButton } from "../util-components/CTAButton";
import { StyledLink } from "../util-components/StyledLink";
import "./Introduction.css";
import { TypeWriterEffect } from "./TypeWriterEffect";

type TypographyProps = {
  component: React.ElementType;
};

const Grid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /** 50px navbar and 2*5vh margin */
  min-height: calc(100vh - 50px - 10vh);
  width: 85%;
  margin: 0 auto 25vh auto;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    min-height: auto;
    margin: 0 auto 10vh auto;
  }
`;

const TextWrapper = styled.div`
  margin-top: 5vh;
`;

const StyledBeforeTypwriter = styled(Typography)<TypographyProps>`
  color: ${(props) => lighten(props.theme.colors.mainblack, 0.4)};
  font-size: 1rem;
  margin-bottom: 5vh;

  @media screen and (max-width: ${breakpoints.md}) {
    margin-bottom: 2vh;
  }
`;

const StyledSubtitle = styled(Typography)`
  color: ${(props) => lighten(props.theme.colors.mainblack, 0.8)};
  font-size: 1.5rem;

  @media screen and (max-width: ${breakpoints.md}) {
    margin-top: 3vh;
  }
`;

const StyledText = styled(Typography)`
  font-size: 1.1rem;
  margin-top: 10vh;
  color: ${(props) => lighten(props.theme.colors.mainblack, 0.8)};
  width: 75%;

  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
    margin-top: 5vh;
  }
`;

const StyledCTAButton = styled(CTAButton)`
  margin: 6vh 0 3vh 0;
  padding: 1vh 2vw;
  font-size: 1rem;

  @media screen and (max-width: ${breakpoints.md}) {
    margin: 6vh 0;
    width: 50%;
  }
`;

export const Introduction = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    navigate("contact", { replace: true });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), introductionDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Grow in={isMounted} timeout={timeout}>
      <Grid>
        <TextWrapper>
          <StyledBeforeTypwriter variant="h6" component={"p"}>
            {t("introduction.hi")}{" "}
          </StyledBeforeTypwriter>
          <TypeWriterEffect isMounted={isMounted} />
          <StyledSubtitle>{t("introduction.subtitle")}</StyledSubtitle>
          <StyledText>
            {t("introduction.info.firstText")}{" "}
            <StyledLink url="https://www.htwk-leipzig.de/startseite/">{t("introduction.info.htwkLink")}</StyledLink>{" "}
            {t("introduction.info.secondText")}{" "}
            <StyledLink url="https://www.ipoque.com/">{t("introduction.info.jobLink")}</StyledLink>.
          </StyledText>
          <StyledCTAButton onClick={handleClick}>Contact me!</StyledCTAButton>
        </TextWrapper>
        <Character />
      </Grid>
    </Grow>
  );
};
