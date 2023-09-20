import { Box, Link, Typography } from "@mui/material";
import { getPrintStyle } from "@utils/customStyles";
import { ProjectItemsType } from "../../../../types/resume.type";
import ProjectItemsDetails from "./ProjectItemsDetails";
import { getFlexboxStyles } from "@utils/customStyles";

type Props = {
  projectItem: ProjectItemsType;
};

export default function ProjectItems({ projectItem }: Props) {
  const {
    projectName,
    projectLiveLink,
    projectRepoLink,
    projectEndDate,
    projectPointItems,
  } = projectItem;

  const pointItemTag = projectPointItems.map((projectPointItem) => {
    const { id, projectPoint } = projectPointItem;
    return <ProjectItemsDetails key={id} projectPoint={projectPoint} />;
  });

  return (
    <>
      <Box sx={getFlexboxStyles({ justifyContent: "space-between", px: 3 })}>
        <Typography
          fontWeight={700}
          fontSize=".6rem"
          sx={getPrintStyle("12px")}
        >
          {projectName}
        </Typography>
        <Typography
          fontWeight={700}
          fontSize=".6rem"
          sx={getPrintStyle("12px")}
        >
          {projectEndDate}
        </Typography>
      </Box>
      <Box sx={getFlexboxStyles({ justifyContent: "space-between", px: 3 })}>
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
          <Link href={projectLiveLink} sx={getPrintStyle("12px", "#1976d2")}>
            Live
          </Link>{" "}
          <span style={{ fontStyle: "normal" }}>|</span>{" "}
          <Link href={projectRepoLink} sx={getPrintStyle("12px", "#1976d2")}>
            Repo
          </Link>
        </Typography>
      </Box>
      {pointItemTag}
    </>
  );
}
