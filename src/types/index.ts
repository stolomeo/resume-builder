export type ResumeType = {
  personalItems: PersonalItemsType;
  experienceItems: ExperienceItemsType[];
  educationItems: EducationItemsType[];
  skillItems: SkillItemsType[];
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

export type SkillItemsType = {
  [name: string]: string;
};
