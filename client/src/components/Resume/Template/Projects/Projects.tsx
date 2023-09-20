import { Box } from "@mui/material";
import { useContext } from "react";
import UserContext from "@context/UserContext";
import LineBreak from "../../../Typography/LineBreak";
import ResumeSectionTitle from "../../../Typography/ResumeSectionHeader";
import ProjectItems from "./ProjectItems";
import { resumeSectionStyles } from "@utils/customStyles";

export default function Projects() {
  const { user } = useContext(UserContext);

  const projectElements = user.resume.projectItems.map((projectItem) => {
    const { id } = projectItem;
    return <ProjectItems key={id} projectItem={projectItem} />;
  });

  return (
    <>
      <Box sx={resumeSectionStyles}>
        <ResumeSectionTitle text="NOTABLE PROJECTS" />
        <LineBreak />
      </Box>
      {projectElements}
    </>
  );
}
