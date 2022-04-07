import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

interface IProps {
  isMounted: boolean;
}

export const TypeWriterEffect = ({ isMounted }: IProps) => {
  const { t } = useTranslation();

  const name: string = t("introduction.name");
  const student: string = t("introduction.student");
  const jobdescription: string = t("introduction.jobdescription");

  return isMounted ? (
    <Typewriter
      options={{
        strings: [name, student, jobdescription, name],
        autoStart: true
      }}
    />
  ) : null;
};
