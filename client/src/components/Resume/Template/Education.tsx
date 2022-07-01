import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../context";
import { flexSpaceBtwnPx3, print12px, resumeSectionBox } from "../../../styles";
import LineBreak from "../../Typography/LineBreak";
import ResumeSectionTitle from "../../Typography/ResumeSectionHeader";
export default function Education() {
  const { user } = useContext(UserContext);

  const educationElements = user.resume.educationItems.map((educationItem) => {
    const { id, majorAndDegree, schoolName, schoolLocation, graduationDate } =
      educationItem;

    return (
      <>
        <Box sx={flexSpaceBtwnPx3}>
          <Typography fontWeight={700} fontSize=".6rem" sx={print12px}>
            {majorAndDegree}
          </Typography>
          <Typography fontWeight={700} fontSize=".6rem" sx={print12px}>
            {graduationDate}
          </Typography>
        </Box>
        <Box sx={flexSpaceBtwnPx3}>
          <Typography fontStyle={"italic"} fontSize=".5em" sx={print12px}>
            {schoolName}
          </Typography>
          <Typography fontStyle={"italic"} fontSize=".5em" sx={print12px}>
            {schoolLocation}
          </Typography>
        </Box>
      </>
    );
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
