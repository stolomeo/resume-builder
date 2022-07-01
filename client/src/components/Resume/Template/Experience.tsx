import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../context";
import { flexSpaceBtwnPx3, print12px, resumeSectionBox } from "../../../styles";
import LineBreak from "../../Typography/LineBreak";
import ResumeSectionTitle from "../../Typography/ResumeSectionHeader";

export default function Experience() {
  const { user } = useContext(UserContext);

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
          <Typography variant="body2" px={5} fontSize={9} sx={print12px}>
            • {experiencePointItem.experiencePoint}
          </Typography>
        );
      });
      return (
        <>
          <Box sx={flexSpaceBtwnPx3}>
            <Typography fontWeight={700} fontSize=".6rem" sx={print12px}>
              {employerName}
            </Typography>
            <Typography fontWeight={700} fontSize=".6rem" sx={print12px}>
              {startDate} - {endDate}
            </Typography>
          </Box>
          <Box sx={flexSpaceBtwnPx3}>
            <Typography fontStyle={"italic"} fontSize=".5em" sx={print12px}>
              {jobTitle}
            </Typography>
            <Typography fontStyle={"italic"} fontSize=".5em" sx={print12px}>
              {workLocation}
            </Typography>
          </Box>
          {pointItemTag}
        </>
      );
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
