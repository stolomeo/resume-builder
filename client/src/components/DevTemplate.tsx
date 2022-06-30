import { Box, Container, Link, Typography } from "@mui/material";
import { useContext } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import UserContext from "../context";
import { personalBox, resumeContainer, resumeSectionBox } from "../styles";
import LineBreak from "./Typography/LineBreak";
import ResumeSectionSubtitle from "./Typography/ResumeSectionSubtitle";
import ResumeSectionTitle from "./Typography/ResumeSectionTitle";

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
          <Typography
            fontWeight={700}
            fontSize=".6rem"
            sx={{
              "@media print": {
                fontSize: "12px",
              },
            }}
          >
            {majorAndDegree}
          </Typography>
          <Typography
            fontWeight={700}
            fontSize=".6rem"
            sx={{
              "@media print": {
                fontSize: "12px",
              },
            }}
          >
            {graduationDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
          <Typography
            fontStyle={"italic"}
            fontSize=".5em"
            sx={{
              "@media print": {
                fontSize: "12px",
              },
            }}
          >
            {schoolName}
          </Typography>
          <Typography
            fontStyle={"italic"}
            fontSize=".5em"
            sx={{
              "@media print": {
                fontSize: "12px",
              },
            }}
          >
            {schoolLocation}
          </Typography>
        </Box>
      </>
    );
  });

  const projectElements = user.resume.projectItems.map((projectItem) => {
    const {
      id,
      projectName,
      projectLiveLink,
      projectRepoLink,
      projectEndDate,
      projectPointItems,
    } = projectItem;
    const pointItemTag = projectPointItems.map((projectPointItem) => {
      return (
        <Typography
          variant="body2"
          px={5}
          fontSize={9}
          sx={{
            "@media print": {
              fontSize: "12px",
            },
          }}
        >
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
          <Typography
            fontWeight={700}
            fontSize=".6rem"
            sx={{
              "@media print": {
                fontSize: "12px",
              },
            }}
          >
            {projectName}
          </Typography>
          <Typography
            fontWeight={700}
            fontSize=".6rem"
            sx={{
              "@media print": {
                fontSize: "12px",
              },
            }}
          >
            {projectEndDate}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
          <Typography
            fontStyle={"italic"}
            fontSize=".5em"
            sx={{
              "@media print": {
                fontSize: "12px",
                fontWeight: 700,
              },
            }}
          >
            <Link
              href={projectLiveLink}
              sx={{
                "@media print": {
                  color: "#1976d2",
                  fontSize: "12px",
                },
              }}
            >
              Live
            </Link>{" "}
            <span style={{ fontStyle: "normal" }}>|</span>{" "}
            <Link
              href={projectRepoLink}
              sx={{
                "@media print": {
                  color: "#1976d2",
                  fontSize: "12px",
                },
              }}
            >
              Repo
            </Link>
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
          <Typography
            variant="body2"
            px={5}
            fontSize={9}
            sx={{
              "@media print": {
                fontSize: "12px",
              },
            }}
          >
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
            <Typography
              fontWeight={700}
              fontSize=".6rem"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
              {employerName}
            </Typography>
            <Typography
              fontWeight={700}
              fontSize=".6rem"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
              {startDate} - {endDate}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
            <Typography
              fontStyle={"italic"}
              fontSize=".5em"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
              {jobTitle}
            </Typography>
            <Typography
              fontStyle={"italic"}
              fontSize=".5em"
              sx={{
                "@media print": {
                  fontSize: "12px",
                },
              }}
            >
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
    <Container maxWidth="sm" sx={resumeContainer}>
      <Box sx={personalBox}>
        <Typography
          sx={{
            "@media print": {
              fontSize: "18px",
            },
          }}
          fontSize={13}
        >
          {fullName}
        </Typography>
        <Typography
          fontSize={11}
          sx={{
            "@media print": {
              fontSize: "12px",
            },
          }}
        >
          {phone} | {email}
        </Typography>
        <Typography
          variant="caption"
          fontSize={8}
          sx={{
            "@media print": {
              fontSize: "10px",
            },
          }}
        >
          <Link
            href={githubLink}
            sx={{
              "@media print": {
                color: "#1976d2",
              },
            }}
          >
            <FaGithubSquare />
            github
          </Link>{" "}
          |{" "}
          <Link
            href={linkedinLink}
            sx={{
              "@media print": {
                color: "#1976d2",
              },
            }}
          >
            <FaLinkedin />
            linkedin
          </Link>
        </Typography>
      </Box>
      <Box sx={resumeSectionBox}>
        <ResumeSectionTitle text="EDUCATION" />
        <LineBreak />
      </Box>
      {educationElements}
      <Box sx={resumeSectionBox}>
        <ResumeSectionTitle text="SKILLS" />
        <LineBreak />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ maxWidth: "fit-content", textAlign: "right", pl: 5, pr: 2 }}>
          <ResumeSectionSubtitle text="Programming Languages" />
          <ResumeSectionSubtitle text="Technologies" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize={8}
            sx={{
              "@media print": {
                fontSize: "12px",
              },
            }}
          >
            {languageElements.join(" | ")}
          </Typography>
          <Typography
            fontSize={8}
            sx={{
              "@media print": {
                fontSize: "12px",
              },
            }}
          >
            {technologyItems.join(" | ")}
          </Typography>
        </Box>
      </Box>
      <Box sx={resumeSectionBox}>
        <ResumeSectionTitle text="NOTABLE PROJECTS" />
        <LineBreak />
      </Box>
      {projectElements}
      <Box sx={resumeSectionBox}>
        <ResumeSectionTitle text="EXPERIENCE" />
        <LineBreak />
      </Box>
      {experienceElements}
    </Container>
  );
}
