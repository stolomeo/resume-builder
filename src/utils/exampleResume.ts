import { nanoid } from "nanoid";

const exampleResume = {
  personalItems: {
    firstName: "John",
    lastName: "Carlos",
    email: "johncarlos@johncarlos.com",
    phone: "(123) 456-7890",
    homeCity: "Los Angeles",
    homeState: "CA",
  },
  experienceItems: [
    {
      id: nanoid(),
      employerName: "Apple",
      jobTitle: "Lead Software Engineer",
      workCity: "Cupertino",
      workState: "CA",
      startDate: "Mar. 2020",
      endDate: "Apr. 2022",
    },
    {
      id: nanoid(),
      employerName: "Microsoft",
      jobTitle: "Software Engineer",
      workCity: "Redmond",
      workState: "WA",
      startDate: "Jan. 2017",
      endDate: "Feb. 2020",
    },
    {
      id: nanoid(),
      employerName: "Google",
      jobTitle: "Full Stack Software Developer",
      workCity: "Mountain View",
      workState: "CA",
      startDate: "Feb. 2015",
      endDate: "Dec. 2016",
    },
  ],
  educationItems: [
    {
      id: nanoid(),
      university: "Georgia Institute of Technology",
      degree: "Master of Science ",
      major: "Computer Science",
      schoolCity: "Atlanta",
      schoolState: "GA",
      graduationDate: "May. 2020",
    },
    {
      id: nanoid(),
      university: "Florida Atlantic University",
      degree: "Bachelor of Science",
      major: "Computer Science",
      schoolCity: "Boca Raton",
      schoolState: "FL",
      graduationDate: "Jun 2016",
    },
  ],
};

export default exampleResume;
