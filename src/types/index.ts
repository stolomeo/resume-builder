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
