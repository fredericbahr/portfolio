import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { TimeRange } from "../components/TimeRange";
import { WorkingTitle } from "../components/WorkingTitle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IpoqueIntern = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <WorkingTitle
        title={t("experience.work2.working-title") as string}
        companyName="ipoque GmbH"
        url="https://www.ipoque.com/"
      />
      <TimeRange from="2021-03-01" to="2021-05-31" />
    </Wrapper>
  );
};
