import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { TimeRange } from "../components/TimeRange";
import { WorkingTitle } from "../components/WorkingTitle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GDMcomWorkingStudent = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <WorkingTitle
        title={t("experience.work1.working-title") as string}
        companyName="GDMcom GmbH"
        url="https://gdmcom.de/"
      />
      <TimeRange from="2019-06-01" to="2020-12-01" />
    </Wrapper>
  );
};
