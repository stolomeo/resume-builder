import { Box } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../../context";
import LineBreak from "../../../Typography/LineBreak";
import ResumeSectionTitle from "../../../Typography/ResumeSectionHeader";
import EducationItems from "./EducationItems";
import { resumeSectionStyles } from "@utils/customStyles";

export default function Education() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Box sx={resumeSectionStyles}>
        <ResumeSectionTitle text="EDUCATION" />
        <LineBreak />
      </Box>
      {user.resume.educationItems.map((educationItem) => (
        <EducationItems key={educationItem.id} educationItem={educationItem} />
      ))}
    </>
  );
}
