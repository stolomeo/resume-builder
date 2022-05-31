export type PersonalItems = {
  [name: string]: string;
};

export type ExperienceItem = {
  [name: string]: string;
};

export type EducationItem = {
  [name: string]: string;
};

export type Resume = {
  personalItems: object;
  experienceItems: object[];
  educationItems: object[];
};
