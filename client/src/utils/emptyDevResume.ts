import { nanoid } from "nanoid";

const emptyDevResume = {
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
      projectRole: "",
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
    },
  ],
  jobPointItems: [
    {
      id: nanoid(),
      jobPoint: "",
    },
  ],
};
export const em = {
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
      projectRole: "",
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
    },
  ],
  jobPointItems: [
    {
      id: nanoid(),
      jobPoint: "",
    },
  ],
};

export default emptyDevResume;
