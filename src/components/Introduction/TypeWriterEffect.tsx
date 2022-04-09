import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import TypewriterClass from "typewriter-effect/dist/core";
import { typewriterDeleteDelay, typewriterInitialDelay } from "../../utils/constants";

interface IProps {
  isMounted: boolean;
}

export const TypeWriterEffect = ({ isMounted }: IProps) => {
  const { t } = useTranslation();

  const name: string = t("introduction.name");
  const student: string = t("introduction.student");
  const jobdescription: string = t("introduction.jobdescription");

  useEffect(() => {
    if (isMounted) {
      const typewriter = new TypewriterClass(document.getElementById("typewriter") ?? "typewriter", {});

      typewriter
        .pauseFor(typewriterInitialDelay)
        .typeString(name)
        .pauseFor(typewriterDeleteDelay)
        .deleteAll()
        .typeString(student)
        .pauseFor(typewriterDeleteDelay)
        .deleteAll()
        .typeString(jobdescription)
        .pauseFor(typewriterDeleteDelay)
        .deleteAll()
        .typeString(name)
        .start();
    }
  }, [isMounted, name, student, jobdescription]);

  return isMounted ? <div id="typewriter" /> : null;
};
