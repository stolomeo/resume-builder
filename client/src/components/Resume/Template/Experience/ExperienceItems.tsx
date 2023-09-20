import { Box, Typography } from "@mui/material";
import { ExperienceItemsType } from "../../../../types/resume.type";
import { getPrintStyle, getFlexboxStyles } from "@utils/customStyles";

type Props = {
  experienceItem: ExperienceItemsType;
};
export default function ExperienceItems({ experienceItem }: Props) {
  const {
    jobTitle,
    employerName,
    workLocation,
    startDate,
    endDate,
    experiencePointItems,
  } = experienceItem;

  return (
    <>
      <Box sx={getFlexboxStyles({ justifyContent: "space-between", px: 3 })}>
        <Typography
          fontWeight={700}
          fontSize=".6rem"
          sx={getPrintStyle("12px")}
        >
          {employerName}
        </Typography>
        <Typography
          fontWeight={700}
          fontSize=".6rem"
          sx={getPrintStyle("12px")}
        >
          {startDate} - {endDate}
        </Typography>
      </Box>
      <Box sx={getFlexboxStyles({ justifyContent: "space-between", px: 3 })}>
        <Typography
          fontStyle={"italic"}
          fontSize=".5em"
          sx={getPrintStyle("12px")}
        >
          {jobTitle}
        </Typography>
        <Typography
          fontStyle={"italic"}
          fontSize=".5em"
          sx={getPrintStyle("12px")}
        >
          {workLocation}
        </Typography>
      </Box>
      {experiencePointItems.map((experiencePointItem) => (
        <Typography
          variant="body2"
          px={5}
          fontSize={9}
          sx={getPrintStyle("12px")}
        >
          • {experiencePointItem.experiencePoint}
        </Typography>
      ))}
    </>
  );
}
