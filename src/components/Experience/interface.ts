export interface IExperience {
  index: number;
  shortCompanyName: string;
  fullCompanyName: string;
  companyUrl: string;
  jobTitle: string;
  timeRange: ITimeRange;
  description: string | string[];
  technologies?: string[];
}

export interface ITimeRange {
  from: string;
  to: string;
}
