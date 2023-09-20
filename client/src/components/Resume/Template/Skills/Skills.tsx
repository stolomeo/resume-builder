import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../../../context";
import { print12px } from "../../../../styles/Resume/print.style";
import { resumeSectionBox } from "../../../../styles/Resume/template.style";
import LineBreak from "../../../Typography/LineBreak";
import ResumeSectionTitle from "../../../Typography/ResumeSectionHeader";
import ResumeSectionSubtitle from "../../../Typography/ResumeSectionSubtitle";

export default function Skills() {
  const { user } = useContext(UserContext);

  const languageElements = user.resume.languageItems.map((languageItem) => {
    const { language } = languageItem;
    return language;
  });

  const technologyItems = user.resume.technologyItems.map((technologyItem) => {
    const { technology } = technologyItem;
    return technology;
  });
  return (
    <>
      <Box sx={resumeSectionBox}>
        <ResumeSectionTitle text="SKILLS" />
        <LineBreak />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ maxWidth: "fit-content", textAlign: "right", pl: 5, pr: 2 }}>
          <ResumeSectionSubtitle text="Programming Languages" />
          <ResumeSectionSubtitle text="Technologies" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography fontSize={8} sx={print12px}>
            {languageElements.join(" | ")}
          </Typography>
          <Typography fontSize={8} sx={print12px}>
            {technologyItems.join(" | ")}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
