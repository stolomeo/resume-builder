import { nanoid } from "nanoid";
import { ResumeType } from "../types";

const emptyResume: ResumeType = {
  personalItems: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homeCity: "",
    homeState: "",
  },
  experienceItems: [
    {
      id: nanoid(),
      employerName: "",
      jobTitle: "",
      workCity: "",
      workState: "",
      startDate: "",
      endDate: "",
    },
  ],
  educationItems: [
    {
      id: nanoid(),
      university: "",
      degree: "",
      major: "",
      schoolCity: "",
      schoolState: "",
      graduationDate: "",
    },
  ],
  skillItems: [
    {
      id: nanoid(),
      skill: "",
    },
  ],
};

export default emptyResume;
