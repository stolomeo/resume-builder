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
      experiencePointItems: [
        {
          id: nanoid(),
          experiencePoint: "",
        },
      ],
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
      experiencePointItems: [
        {
          id: nanoid(),
          experiencePoint: "",
        },
      ],
    },
  ],
};

export const non = {
  personalItems: {
    fullName: "Sebastian Tolomeo",
    email: "+1 954-913-6585",
    phone: "tolomeosebastian@gmail.com",
    githubLink: "https://github.com/stolomeo",
    linkedinLink: "https://www.linkedin.com/in/sebastian-tolomeo/",
  },
  educationItems: [
    {
      id: nanoid(),
      majorAndDegree: "Software Engineering Career Course",
      schoolName: "Boca Code",
      schoolLocation: "Boca Raton, FL",
      graduationDate: "Apr 2022",
    },
    {
      id: nanoid(),
      majorAndDegree:
        "Bachelor of Business Administration - Management Information Systems",
      schoolName: "Florida Atlantic University",
      schoolLocation: "Boca Raton, FL",
      graduationDate: "Dec 2020",
    },
  ],
  languageItems: [
    {
      id: nanoid(),
      language: "JavaScript",
    },
    {
      id: nanoid(),
      language: "TypeScript",
    },
    {
      id: nanoid(),
      language: "Sass",
    },
    {
      id: nanoid(),
      language: "SQL",
    },
    {
      id: nanoid(),
      language: "Java",
    },
  ],
  technologyItems: [
    {
      id: nanoid(),
      technology: "React",
    },
    {
      id: nanoid(),
      technology: "React Native",
    },
    {
      id: nanoid(),
      technology: "Node.js",
    },
    {
      id: nanoid(),
      technology: "Express",
    },
    {
      id: nanoid(),
      technology: "Firebase",
    },
    {
      id: nanoid(),
      technology: "Webpack",
    },
    {
      id: nanoid(),
      technology: "Jest",
    },
  ],
  projectItems: [
    {
      id: nanoid(),
      projectName: "Resume Builder",
      projectRole: "Author & Lead Developer",
      projectEndDate: "May 2022",
      projectPointItems: [
        {
          id: nanoid(),
          projectPoint:
            "Developed a web application that allows users to effortlessly create a respectable resume by filling in input fields",
        },
        {
          id: nanoid(),
          projectPoint:
            "Created a resume preview that re-renders on any input value change via controlled components and React's synthetic event handling",
        },
        {
          id: nanoid(),
          projectPoint:
            "Allowed user to export resume to PDF by using ref and ReactToPrint hooks",
        },
        {
          id: nanoid(),
          projectPoint:
            "Designed and styled using CSS via Styled Components for ease of re-used styles and project organization",
        },
      ],
    },
    {
      id: nanoid(),
      projectName: "Pokemon Memory",
      projectRole: "Author & Lead Developer",
      projectEndDate: "May 2022",
      projectPointItems: [
        {
          id: nanoid(),
          projectPoint:
            "Created a web application using Pokemon sprites so that users can test their memory ",
        },
        {
          id: nanoid(),
          projectPoint:
            "Implemented node fetch API methods to execute RESTful requests to retrieve Pokemon data",
        },
        {
          id: nanoid(),
          projectPoint:
            "Enforced conditional component rendering to create a stylish loading phase and winning screen",
        },
        {
          id: nanoid(),
          projectPoint:
            "Defined foundational functions that were used to shuffle Pokemon and correctly format Pokemon names",
        },
        {
          id: nanoid(),
          projectPoint:
            "Created a nostalgic header to mimic the popular franchise's logo",
        },
        {
          id: nanoid(),
          projectPoint:
            "Designed and styled using CSS via Styled Components for ease of re-used styles and project organization",
        },
      ],
    },
    {
      id: nanoid(),
      projectName: "Tenzi",
      projectRole: "Author & Lead Developer",
      projectEndDate: "Apr 2022",
      projectPointItems: [
        {
          id: nanoid(),
          projectPoint:
            "Assembled a web application to mimic a popular family dice game",
        },
        {
          id: nanoid(),
          projectPoint:
            "Implemented conditional rendering to celebrate a user's victory",
        },
        {
          id: nanoid(),
          projectPoint:
            "Designed and styled using Sass/SCSS for file structure and nested selectors",
        },
        {
          id: nanoid(),
          projectPoint:
            "Decorated dice elements by using an external component library",
        },
      ],
    },
    {
      id: nanoid(),
      projectName: "Weather App",
      projectRole: "Author & Lead Developer",
      projectEndDate: "Mar 2022",
      projectPointItems: [
        {
          id: nanoid(),
          projectPoint:
            "Created a simple weather application which retrieves live weather data from anywhere on the globe",
        },
        {
          id: nanoid(),
          projectPoint:
            "Implemented node fetch API methods to execute RESTful requests to retrieve global weather data",
        },
        {
          id: nanoid(),
          projectPoint:
            "Compiled using Webpack to implement modular programming for vanilla JavaScript use case",
        },
        {
          id: nanoid(),
          projectPoint:
            "Designed and styled using CSS and conditionally rendered icons from OpenWeatherMap's database",
        },
      ],
    },
    {
      id: nanoid(),
      projectName: "Barista's Breakfast",
      projectRole: "Author & Lead Developer",
      projectEndDate: "Mar 2022",
      projectPointItems: [
        {
          id: nanoid(),
          projectPoint:
            "Developed a dynamically rendered and interactive restaurant website using vanilla JavaScript",
        },
        {
          id: nanoid(),
          projectPoint:
            "Constructed all DOM elements within JavaScript using object-oriented principles such as ES6 classes and constructor functions",
        },
        {
          id: nanoid(),
          projectPoint:
            "Compiled using Webpack to implement modular programming for vanilla JavaScript use case",
        },
        {
          id: nanoid(),
          projectPoint: "Designed and styled using CSS",
        },
      ],
    },
  ],

  experienceItems: [
    {
      id: nanoid(),
      jobTitle: "Area Manager",
      employerName: "Amazon",
      workLocation: "",
      startDate: "July 2021",
      endDate: "Present",
      experiencePointItems: [
        {
          id: nanoid(),
          experiencePoint: "Led and developed a team of Amazon associates",
        },
        {
          id: nanoid(),
          experiencePoint:
            "Created, managed, and supported recognition and communication programs.",
        },
      ],
    },
    {
      id: nanoid(),
      jobTitle: "Area Manager",
      employerName: "Sales Representative",
      workLocation: "",
      startDate: "May 2017",
      endDate: "Jun 2021",
      experiencePointItems: [
        {
          id: nanoid(),
          experiencePoint:
            "Presented, promoted, and sold products/services using solid arguments to existing and prospective customers",
        },
        {
          id: nanoid(),
          experiencePoint:
            "Achieved highest conversion rate for two consecutive quarters",
        },
      ],
    },
  ],
};
export default emptyDevResume;
