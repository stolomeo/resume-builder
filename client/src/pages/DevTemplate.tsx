import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, Link, Typography } from "@mui/material";
import { useContext } from "react";
import UserContext from "../context";

export default function DevTemplate() {
  const { user } = useContext(UserContext);
  const { fullName, email, phone, githubLink, linkedinLink } =
    user.resume.personalItems;

  const educationElements = user.resume.educationItems.map((educationItem) => {
    const { id, majorAndDegree, schoolName, schoolLocation, graduationDate } =
      educationItem;

    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <Typography fontWeight={700} fontSize=".6rem">
            {majorAndDegree}
          </Typography>
          <Typography fontWeight={700} fontSize=".6rem">
            {graduationDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
          <Typography fontStyle={"italic"} fontSize=".5em">
            {schoolName}
          </Typography>
          <Typography fontStyle={"italic"} fontSize=".5em">
            {schoolLocation}
          </Typography>
        </Box>
      </>
    );
  });

  // const projectPointElements = user.resume.projectItems.map((projectItem) => {
  //   const { projectPointItems } = projectItem;
  //   const pointItemTag = projectPointItems.map((projectPointItem) => {
  //     return (
  //       <Typography variant="body2" px={5} fontSize={9}>
  //         • {projectPointItem.projectPoint}
  //       </Typography>
  //     );
  //   });
  // });

  const projectElements = user.resume.projectItems.map((projectItem) => {
    const { id, projectName, projectRole, projectEndDate, projectPointItems } =
      projectItem;
    const pointItemTag = projectPointItems.map((projectPointItem) => {
      return (
        <Typography variant="body2" px={5} fontSize={9}>
          • {projectPointItem.projectPoint}
        </Typography>
      );
    });
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <Typography fontWeight={700} fontSize=".6rem">
            {projectName}
          </Typography>
          <Typography fontWeight={700} fontSize=".6rem">
            {projectEndDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
          <Typography fontStyle={"italic"} fontSize=".5em">
            {projectRole}
          </Typography>
        </Box>
        {pointItemTag}
      </>
    );
  });
  const experienceElements = user.resume.experienceItems.map(
    (experienceItem) => {
      const {
        id,
        jobTitle,
        employerName,
        workLocation,
        startDate,
        endDate,
        experiencePointItems,
      } = experienceItem;
      const pointItemTag = experiencePointItems.map((experiencePointItem) => {
        return (
          <Typography variant="body2" px={5} fontSize={9}>
            • {experiencePointItem.experiencePoint}
          </Typography>
        );
      });
      return (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 3,
            }}
          >
            <Typography fontWeight={700} fontSize=".6rem">
              {employerName}
            </Typography>
            <Typography fontWeight={700} fontSize=".6rem">
              {startDate} - {endDate}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
            <Typography fontStyle={"italic"} fontSize=".5em">
              {jobTitle}
            </Typography>
            <Typography fontStyle={"italic"} fontSize=".5em">
              {workLocation}
            </Typography>
          </Box>
          {pointItemTag}
        </>
      );
    }
  );

  const languageElements = user.resume.languageItems.map((languageItem) => {
    const { id, language } = languageItem;
    return language;
  });

  const technologyItems = user.resume.technologyItems.map((technologyItem) => {
    const { id, technology } = technologyItem;
    return technology;
  });

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "auto",
        "@media print": {
          display: "block",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        },
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
        <Typography fontSize={13}>{fullName}</Typography>
        <Typography fontSize={11}>
          {email} | {phone}
        </Typography>
        <Typography variant="caption">
          <Link href={githubLink}>
            <GitHub />
          </Link>

          <Link href={linkedinLink}>
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
            // borderColor: "#000080",
            borderWidth: ".1px",
          }}
        />
      </Box>
      {educationElements}
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography flexGrow={0} fontSize={11} variant="subtitle2">
          SKILLS
        </Typography>
        <hr
          style={{
            flexGrow: "1",
            marginLeft: ".5rem",
            // borderColor: "#000080",
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
          <Typography fontSize={8}>{languageElements.join(" | ")}</Typography>
          <Typography fontSize={8}>{technologyItems.join(" | ")}</Typography>
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
            // borderColor: "#000080",
            borderWidth: ".1px",
          }}
        />
      </Box>
      {projectElements}
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Typography flexGrow={0} fontSize={11} variant="subtitle2">
          EXPERIENCE
        </Typography>
        <hr
          style={{
            flexGrow: "1",
            marginLeft: ".5rem",
            // borderColor: "#000080",
            borderWidth: ".1px",
          }}
        />
      </Box>
      {experienceElements}
    </Container>
  );
}
