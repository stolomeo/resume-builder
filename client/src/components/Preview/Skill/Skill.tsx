import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import ResumeContext from "../../../context/";
import SkillItems from "./SkillItems";

export default function Skill() {
  const { resume } = useContext(ResumeContext);

  const skillElements = resume.skillItems.map((skillItem) => {
    return <SkillItems key={skillItem.id} skillItem={skillItem} />;
  });

  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Typography component="h2" variant="subtitle1" fontWeight="bold">
        SKILLS
      </Typography>
      <hr />
      <Box sx={{ display: "flex", gap: ".3rem" }}>
        <strong>Skills:</strong> {skillElements}
      </Box>
    </Box>
  );
}
