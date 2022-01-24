import { lighten, Slide, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { introductionDelay, typewriterDeleteDelay, typewriterInitialDelay } from "../../utils/constants";
import { Character } from "../Character/Character";
import { StyledLink } from "../util-components/StyledLink";
import "./Introduction.css";

type TypographyProps = {
  component: React.ElementType;
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 85vw;
  /** 50px navbar and 2*5vh margin */
  min-height: calc(100vh - 50px - 10vh);
  margin: 5vh auto;
`;

const TextWrapper = styled.div``;

const StyledBeforeTypwriter = styled(Typography)<TypographyProps>`
  color: ${(props) => lighten(props.theme.colors.mainblack, 0.4)};
  font-size: 1.2rem;
  margin-bottom: 3vh;
`;

const StyledSubtitle = styled(Typography)`
  color: ${(props) => lighten(props.theme.colors.mainblack, 0.8)};
  font-size: 2rem;
`;

const StyledText = styled(Typography)`
  font-size: 1.2rem;
  margin-top: 5vh;
  color: ${(props) => lighten(props.theme.colors.mainblack, 0.8)};
  width: 75%;
`;

export const Introduction = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    //const timeout = setTimeout(() => setIsMounted(true), introductionDelay);
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Slide direction="right" in={isMounted} timeout={400}>
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
        </TextWrapper>
        <Character />
      </Grid>
    </Slide>
  );
};
