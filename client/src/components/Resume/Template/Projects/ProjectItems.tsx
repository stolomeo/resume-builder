import { Box, Link, Typography } from "@mui/material";
import { flexSpaceBtwnPx3 } from "../../../../styles/common.style";
import {
  print12px,
  printLiveLink,
} from "../../../../styles/Resume/print.style";
import { ProjectItemsType } from "../../../../types";
import ProjectItemsDetails from "./ProjectItemsDetails";

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
}
