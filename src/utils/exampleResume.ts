import { nanoid } from "nanoid";

const exampleResume = {
  personalItems: {
    firstName: "John",
    lastName: "Carlos",
    email: "johncarlos@johncarlos.com",
    phone: "(954) 239-4939",
    homeCity: "Boca Raton",
    homeState: "FL",
  },
  experienceItems: [
    {
      id: nanoid(),
      employerName: "Apple",
      jobTitle: "Software Engineer",
      workCity: "Miami",
      workState: "FL",
      startDate: "March 2020",
      endDate: "April 2020",
    },
    {
      id: nanoid(),
      employerName: "Apple",
      jobTitle: "Software Engineer",
      schoolCity: "Miami",
      schoolState: "FL",
      startDate: "March 2020",
      endDate: "April 2020",
    },
  ],
  educationItems: [
    {
      id: nanoid(),
      university: "FAU",
      degree: "Bachelors of Science ",
      workCity: "Boca Raton",
      major: "Computer Science",
      workState: "FL",
      graduationDate: "May 2020",
    },
  ],
};

export default exampleResume;
