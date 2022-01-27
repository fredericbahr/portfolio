import React from "react";
import styled from "styled-components";
import { TimeRange } from "../components/TimeRange";
import { WorkingTitle } from "../components/WorkingTitle";

const Wrapper = styled.div`
  display: flex;
`;

export const GDMcomWorkingStudent = () => {
  return (
    <Wrapper>
      <WorkingTitle title={""} companyName="GDMcom GmbH" url="https://gdmcom.de/" />
      <TimeRange />
    </Wrapper>
  );
};
