import { nanoid } from "nanoid";

export const blankResume = {
  personalItems: {
    fullName: "",
    email: "",
    phone: "",
    githubLink: "",
    linkedinLink: "",
  },
  educationItems: [
    {
      id: nanoid(),
      majorAndDegree: "",
      schoolName: "",
      schoolLocation: "",
      graduationDate: "",
    },
  ],
  languageItems: [
    {
      id: nanoid(),
      language: "",
    },
  ],
  technologyItems: [
    {
      id: nanoid(),
      technology: "",
    },
  ],
  projectItems: [
    {
      id: nanoid(),
      projectName: "",
      projectLiveLink: "",
      projectRepoLink: "",
      projectEndDate: "",
      projectPointItems: [
        {
          id: nanoid(),
          projectPoint: "",
        },
      ],
    },
  ],
  experienceItems: [
    {
      id: nanoid(),
      jobTitle: "",
      employerName: "",
      workLocation: "",
      startDate: "",
      endDate: "",
      experiencePointItems: [
        {
          id: nanoid(),
          experiencePoint: "",
        },
      ],
    },
  ],
};
