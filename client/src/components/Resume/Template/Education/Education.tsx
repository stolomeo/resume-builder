import { Box } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../../context";
import { resumeSectionBox } from "../../../../styles/Resume/template.style";
import LineBreak from "../../../Typography/LineBreak";
import ResumeSectionTitle from "../../../Typography/ResumeSectionHeader";
import EducationItems from "./EducationItems";
export default function Education() {
  const { user } = useContext(UserContext);

  const educationElements = user.resume.educationItems.map((educationItem) => {
    const { id } = educationItem;
    return <EducationItems key={id} educationItem={educationItem} />;
  });
  return (
    <>
      <Box sx={resumeSectionBox}>
        <ResumeSectionTitle text="EDUCATION" />
        <LineBreak />
      </Box>
      {educationElements}
    </>
  );
}
