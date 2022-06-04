import { nanoid } from "nanoid";

const emptyResume = {
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
};

export default emptyResume;
