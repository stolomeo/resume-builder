export type Resume = {
  personalItems: ResumePersonalItems;
  experienceItems: ResumeExperienceItems[];
  educationItems: ResumeEducationItems[];
};
export type ResumePersonalItems = {
  [name: string]: string;
};

export type ResumeExperienceItems = {
  [name: string]: string;
};

export type ResumeEducationItems = {
  [name: string]: string;
};
