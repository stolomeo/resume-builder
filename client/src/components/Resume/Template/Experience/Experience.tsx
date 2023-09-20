import { Box } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../../context";
import LineBreak from "../../../Typography/LineBreak";
import ResumeSectionTitle from "../../../Typography/ResumeSectionHeader";
import ExperienceItems from "./ExperienceItems";
import { resumeSectionStyles } from "@utils/customStyles";

export default function Experience() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Box sx={resumeSectionStyles}>
        <ResumeSectionTitle text="EXPERIENCE" />
        <LineBreak />
      </Box>
      {user.resume.experienceItems.map((experienceItem) => (
        <ExperienceItems
          key={experienceItem.id}
          experienceItem={experienceItem}
        />
      ))}
    </>
  );
}
