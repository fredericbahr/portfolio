import { IExperience } from "../components/Experience/interface";
import { GDMcomWorkingStudent } from "../components/Experience/workplaces/GDMcomWorkingStudent";
import { IpoqueBachelor } from "../components/Experience/workplaces/IpoqueBachelor";
import { IpoqueIntern } from "../components/Experience/workplaces/IpoqueIntern";
import { IpoqueWorkingStudent } from "../components/Experience/workplaces/IpoqueWorkingStudent";

export const experiences: IExperience[] = [
  {
    index: 0,
    component: <IpoqueWorkingStudent />,
    title: "experience.work4.name",
  },
  {
    index: 1,
    component: <IpoqueBachelor />,
    title: "experience.work3.name",
  },
  {
    index: 2,
    component: <IpoqueIntern />,
    title: "experience.work2.name",
  },
  {
    index: 3,
    component: <GDMcomWorkingStudent />,
    title: "experience.work1.name",
  },
];
