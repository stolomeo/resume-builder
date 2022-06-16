import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, Link, Typography } from "@mui/material";

export default function DevTemplate() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography fontSize={13}>Sebastian Tolomeo</Typography>
        <Typography fontSize={11}>
          tolomeosebastian@gmail.com | +1 954-913-6585
        </Typography>
        <Typography variant="caption">
          <Link href="https://www.github.com/stolomeo">
            <GitHub />
          </Link>

          <Link href="https://www.Linkedin.com/in/sebastian-tolomeo">
            <LinkedIn />
          </Link>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography flexGrow={0} fontSize={11} variant="subtitle2">
          EDUCATION
        </Typography>
        <hr
          style={{
            flexGrow: "1",
            marginLeft: ".5rem",
            borderColor: "#000080",
            borderWidth: ".1px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography fontWeight={700} fontSize=".6rem">
          Software Engineering Career Course
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem">
          Apr 2022
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Boca Code
        </Typography>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Boca Raton, FL
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography fontWeight={700} fontSize=".6rem">
          Bachelor of Business Administration - Management Information Systems
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem">
          Dec 2020
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Florida Atlantic University
        </Typography>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Boca Raton, FL
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography flexGrow={0} fontSize={11} variant="subtitle2">
          SKILLS
        </Typography>
        <hr
          style={{
            flexGrow: "1",
            marginLeft: ".5rem",
            borderColor: "#000080",
            borderWidth: ".1px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ maxWidth: "fit-content", textAlign: "right", pl: 5, pr: 2 }}>
          <Typography fontWeight={700} variant="subtitle2" fontSize={9}>
            Programming Languages
          </Typography>
          <Typography fontWeight={700} variant="subtitle2" fontSize={9}>
            Technologies
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography fontSize={8}>
            JavaScript | TypeScript | Sass | SQL | Java
          </Typography>
          <Typography fontSize={8}>
            React | React Native | Node.js | Express | MongoDB | Firebase |
            Webpack | Jest
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography flexGrow={0} fontSize={11} variant="subtitle2">
          NOTABLE PROJECTS
        </Typography>
        <hr
          style={{
            flexGrow: "1",
            marginLeft: ".5rem",
            borderColor: "#000080",
            borderWidth: ".1px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography fontWeight={700} fontSize=".6rem">
          Resume Builder
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem">
          Jun 2022
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Author & Lead Developer
        </Typography>
      </Box>
      <Typography variant="body2" px={5} fontSize={9}>
        • Developed a web application that allows users to effortlessly create a
        respectable resume by filling in input fields
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Created a resume preview that re-renders on any input value change via
        controlled components and React's synthetic event handling
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Allowed user to export resume to PDF by using ref and ReactToPrint
        hooks
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Designed and styled using CSS via Styled Components for ease of
        re-used styles and project organization
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography fontWeight={700} fontSize=".6rem">
          Pokemon Memory
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem">
          May 2022
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Author & Lead Developer
        </Typography>
      </Box>
      <Typography variant="body2" px={5} fontSize={9}>
        • Created a web application using Pokemon sprites so that users can test
        their memory
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Implemented node fetch API methods to execute RESTful requests to
        retrieve Pokemon data
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Defined foundational functions that were used to shuffle Pokemon and
        correctly format Pokemon names
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Created a nostalgic header to mimic the popular franchise's logo
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Designed and styled using CSS via Styled Components for ease of
        re-used styles and project organization
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography fontWeight={700} fontSize=".6rem">
          Tenzi
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem">
          Apr 2022
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Author & Lead Developer
        </Typography>
      </Box>
      <Typography variant="body2" px={5} fontSize={9}>
        • Assembled a web application to mimic a popular family dice game
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Implemented conditional rendering to celebrate a user's victory
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Designed and styled using Sass/SCSS for file structure and nested
        selectors
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Decorated dice elements by using an external component library
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography fontWeight={700} fontSize=".6rem">
          Weather App
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem">
          Mar 2022
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Author & Lead Developer
        </Typography>
      </Box>
      <Typography variant="body2" px={5} fontSize={9}>
        • Created a simple weather application which retrieves live weather data
        from anywhere on the globe
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Implemented node fetch API methods to execute RESTful requests to
        retrieve global weather data
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Designed and styled using CSS and conditionally rendered icons from
        OpenWeatherMap's database
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Decorated dice elements by using an external component library
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography fontWeight={700} fontSize=".6rem">
          Barista's Breakfast
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem">
          Mar 2022
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Author & Lead Developer
        </Typography>
      </Box>
      <Typography variant="body2" px={5} fontSize={9}>
        • Developed a dynamically rendered and interactive restaurant website
        using vanilla JavaScript
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Constructed all DOM elements within JavaScript using object-oriented
        principles such as ES6 classes and constructor functions
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Compiled using Webpack for modular structure and project organization
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Designed and styled using CSS
      </Typography>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography flexGrow={0} fontSize={11} variant="subtitle2">
          EXPERIENCE
        </Typography>
        <hr
          style={{
            flexGrow: "1",
            marginLeft: ".5rem",
            borderColor: "#000080",
            borderWidth: ".1px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography fontWeight={700} fontSize=".6rem">
          Amazon
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem">
          Jul 2021 - Present
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Area Manager
        </Typography>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Orlando, FL
        </Typography>
      </Box>
      <Typography variant="body2" px={5} fontSize={9}>
        • Led and developed a team of Amazon associates
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Created, managed, and supported recognition and communication programs
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Typography fontWeight={700} fontSize=".6rem">
          Infinity Sales Group
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem">
          May 2017 - Jun 2021
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Sales Representative
        </Typography>
        <Typography fontStyle={"italic"} fontSize=".5em">
          Boca Raton, FL
        </Typography>
      </Box>
      <Typography variant="body2" px={5} fontSize={9}>
        • Presented, promoted, and sold products/services using solid arguments
        to existing and prospective customers
      </Typography>
      <Typography variant="body2" px={5} fontSize={9}>
        • Achieved highest conversion rate for two consecutive quarters
      </Typography>
    </Container>
  );
}
