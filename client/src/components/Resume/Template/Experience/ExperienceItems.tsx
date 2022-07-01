import { Box, Typography } from "@mui/material";
import { flexSpaceBtwnPx3 } from "../../../../styles/common.style";
import { print12px } from "../../../../styles/Resume/print.style";
import { ExperienceItemsType } from "../../../../types";
import ExperienceItemDetail from "./ExperienceItemDetail";

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

  const pointItemTag = experiencePointItems.map((experiencePointItem) => {
    const { id, experiencePoint } = experiencePointItem;
    return <ExperienceItemDetail key={id} experiencePoint={experiencePoint} />;
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
