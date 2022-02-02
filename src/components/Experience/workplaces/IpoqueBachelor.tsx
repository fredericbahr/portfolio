import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { TimeRange } from "../components/TimeRange";
import { WorkingTitle } from "../components/WorkingTitle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IpoqueBachelor = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <WorkingTitle
        title={t("experience.work3.working-title") as string}
        companyName="ipoque GmbH"
        url="https://www.ipoque.com/"
      />
      <TimeRange from="2021-07-01" to="2020-10-01" />
    </Wrapper>
  );
};
