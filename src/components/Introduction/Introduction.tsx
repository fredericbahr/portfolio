import { Grow, lighten, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { introductionDelay, typewriterDeleteDelay, typewriterInitialDelay } from "../../utils/constants";
import { Character } from "../Character/Character";
import { CTAButton } from "../util-components/CTAButton";
import { StyledLink } from "../util-components/StyledLink";
import "./Introduction.css";

type TypographyProps = {
  component: React.ElementType;
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /** 50px navbar and 2*5vh margin */
  min-height: calc(100vh - 50px - 10vh);
  margin: 5vh auto;
`;

const TextWrapper = styled.div`
  margin: 7vh 0 0 7.5vw;
`;

const StyledBeforeTypwriter = styled(Typography)<TypographyProps>`
  color: ${(props) => lighten(props.theme.colors.mainblack, 0.4)};
  font-size: 1rem;
  margin-bottom: 5vh;
`;

const StyledSubtitle = styled(Typography)`
  color: ${(props) => lighten(props.theme.colors.mainblack, 0.8)};
  font-size: 1.5rem;
`;

const StyledText = styled(Typography)`
  font-size: 1.1rem;
  margin-top: 10vh;
  color: ${(props) => lighten(props.theme.colors.mainblack, 0.8)};
  width: 75%;
`;

const StyledCTAButton = styled(CTAButton)`
  display: block;
  margin: 15vh 0 3vh 0;
`;

export const Introduction = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  //const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), introductionDelay);
    //const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Grow in={isMounted} timeout={400}>
      <Grid>
        <TextWrapper>
          <StyledBeforeTypwriter variant="h6" component={"p"}>
            {t("introduction.hi")}{" "}
          </StyledBeforeTypwriter>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(typewriterInitialDelay)
                .typeString(t("introduction.name"))
                .pauseFor(typewriterDeleteDelay)
                .deleteAll()
                .typeString(t("introduction.student"))
                .pauseFor(typewriterDeleteDelay)
                .deleteAll()
                .typeString(t("introduction.jobdescription"))
                .pauseFor(typewriterDeleteDelay)
                .deleteAll()
                .typeString(t("introduction.name"))
                .start();
            }}
          />
          <StyledSubtitle>{t("introduction.subtitle")}</StyledSubtitle>
          <StyledText>
            {t("introduction.info.firstText")}{" "}
            <StyledLink url="https://www.htwk-leipzig.de/startseite/">{t("introduction.info.htwkLink")}</StyledLink>{" "}
            {t("introduction.info.secondText")}{" "}
            <StyledLink url="https://www.ipoque.com/">{t("introduction.info.jobLink")}</StyledLink>.
          </StyledText>
          <StyledCTAButton>Contact me!</StyledCTAButton>
        </TextWrapper>
        <Character />
      </Grid>
    </Grow>
  );
};
