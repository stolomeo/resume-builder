export type ResumeType = {
  personalItems: PersonalItemsType;
  experienceItems: ExperienceItemsType[];
  educationItems: EducationItemsType[];
  skillItems: ResumeSkillItems[];
};
export type PersonalItemsType = {
  [name: string]: string;
};

export type ExperiencePointItemsType = {
  [name: string]: string;
};

export type EducationItemsType = {
  [name: string]: string;
};

export type ResumeSkillItems = {
  [name: string]: string;
};

export type LanguageItemsType = {
  [name: string]: string;
};
export type TechnologyItemsType = {
  [name: string]: string;
};

export type ProjectItemsType = {
  id: string;
  projectName: string;
  projectLiveLink: string;
  projectRepoLink: string;
  projectEndDate: string;
  projectPointItems: ProjectPointItemsType[];
};

export type ProjectPointItemsType = {
  [name: string]: string;
};

export type ExperienceItemsType = {
  id: string;
  jobTitle: string;
  employerName: string;
  workLocation: string;
  startDate: string;
  endDate: string;
  experiencePointItems: ExperiencePointItemsType[];
};

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  resume: DevResumeType;
};

export type DevResumeType = {
  personalItems: PersonalItemsType;
  educationItems: EducationItemsType[];
  languageItems: LanguageItemsType[];
  technologyItems: TechnologyItemsType[];
  projectItems: ProjectItemsType[];
  experienceItems: ExperienceItemsType[];
};
