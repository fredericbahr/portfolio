import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { SectionHeadline } from "../util-components/SectionHeadline";

const StyledSection = styled.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;

export default function About() {
  const { t } = useTranslation();
  return (
    <StyledSection id="about">
      <SectionHeadline>{t("sections.about")}</SectionHeadline>
    </StyledSection>
  );
}
