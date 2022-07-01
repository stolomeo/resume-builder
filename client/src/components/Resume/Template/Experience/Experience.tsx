import { Box } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../../context";
import { resumeSectionBox } from "../../../../styles/Resume/template.style";
import LineBreak from "../../../Typography/LineBreak";
import ResumeSectionTitle from "../../../Typography/ResumeSectionHeader";
import ExperienceItems from "./ExperienceItems";

export default function Experience() {
  const { user } = useContext(UserContext);

  const experienceElements = user.resume.experienceItems.map(
    (experienceItem) => {
      const { id } = experienceItem;
      return <ExperienceItems key={id} experienceItem={experienceItem} />;
    }
  );
  return (
    <>
      <Box sx={resumeSectionBox}>
        <ResumeSectionTitle text="EXPERIENCE" />
        <LineBreak />
      </Box>
      {experienceElements}
    </>
  );
}
