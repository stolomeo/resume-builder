import { Box, Link, Typography } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../context";
import {
  flexSpaceBtwnPx3,
  print12px,
  printLiveLink,
  resumeSectionBox,
} from "../../../styles";
import LineBreak from "../../Typography/LineBreak";
import ResumeSectionTitle from "../../Typography/ResumeSectionHeader";

export default function Projects() {
  const { user } = useContext(UserContext);

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
        <Typography variant="body2" px={5} fontSize={9} sx={print12px}>
          • {projectPointItem.projectPoint}
        </Typography>
      );
    });
    return (
      <>
        <Box sx={flexSpaceBtwnPx3}>
          <Typography fontWeight={700} fontSize=".6rem" sx={print12px}>
            {projectName}
          </Typography>
          <Typography fontWeight={700} fontSize=".6rem" sx={print12px}>
            {projectEndDate}
          </Typography>
        </Box>
        <Box sx={flexSpaceBtwnPx3}>
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
            <Link href={projectLiveLink} sx={printLiveLink}>
              Live
            </Link>{" "}
            <span style={{ fontStyle: "normal" }}>|</span>{" "}
            <Link href={projectRepoLink} sx={printLiveLink}>
              Repo
            </Link>
          </Typography>
        </Box>
        {pointItemTag}
      </>
    );
  });
  return (
    <>
      <Box sx={resumeSectionBox}>
        <ResumeSectionTitle text="NOTABLE PROJECTS" />
        <LineBreak />
      </Box>
      {projectElements}
    </>
  );
}
