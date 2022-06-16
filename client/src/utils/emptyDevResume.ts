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
      projectPoints: [
        {
          id: nanoid(),
          point: "",
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
      jobResponsibilities: [
        {
          id: nanoid(),
          responsibility: "",
        },
      ],
    },
  ],
};

export default emptyDevResume;
