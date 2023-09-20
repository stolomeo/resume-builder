import { Box, Typography } from "@mui/material";
import { EducationItemsType } from "../../../../types/resume.type";
import { getPrintStyle, getFlexboxStyles } from "@utils/customStyles";

type Props = {
  educationItem: EducationItemsType;
};

export default function EducationItems({ educationItem }: Props) {
  const { majorAndDegree, schoolName, schoolLocation, graduationDate } =
    educationItem;
  return (
    <>
      <Box sx={getFlexboxStyles({ justifyContent: "space-between", px: 3 })}>
        <Typography
          fontWeight={700}
          fontSize=".6rem"
          sx={getPrintStyle("12px")}
        >
          {majorAndDegree}
        </Typography>
        <Typography
          fontWeight={700}
          fontSize=".6rem"
          sx={getPrintStyle("12px")}
        >
          {graduationDate}
        </Typography>
      </Box>
      <Box sx={getFlexboxStyles({ justifyContent: "space-between", px: 3 })}>
        <Typography
          fontStyle={"italic"}
          fontSize=".5em"
          sx={getPrintStyle("12px")}
        >
          {schoolName}
        </Typography>
        <Typography
          fontStyle={"italic"}
          fontSize=".5em"
          sx={getPrintStyle("12px")}
        >
          {schoolLocation}
        </Typography>
      </Box>
    </>
  );
}
