export type ResumeType = {
  personalItems: PersonalItemsType;
  experienceItems: ExperienceItemsType[];
  educationItems: EducationItemsType[];
  skillItems: ResumeSkillItems[];
};
export type PersonalItemsType = {
  [name: string]: string;
};

export type ExperienceItemsType = {
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
  [name: string]: string;
};

export type ProjectPointItemsType = {
  [name: string]: string;
};

export type JobPointItemsType = {
  [name: string]: string;
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
  projectPointItems: ProjectPointItemsType[];
  jobPointItems: JobPointItemsType[];
};
