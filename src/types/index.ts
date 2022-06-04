export type Resume = {
  personalItems: ResumePersonalItems;
  experienceItems: ResumeExperienceItems[];
  educationItems: ResumeEducationItems[];
  skillItems: ResumeSkillItems[];
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

export type ResumeSkillItems = {
  [name: string]: string;
};
