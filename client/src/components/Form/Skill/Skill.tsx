import { Box, Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import ResumeContext from "../../../context/";
import SkillForm from "./SkillForm";

export default function Skill() {
  const { resume, setResume } = useContext(ResumeContext);

  const handleAddSkill = () => {
    setResume({
      ...resume,
      skillItems: [
        ...resume.skillItems,
        {
          id: nanoid(),
          skill: "",
        },
      ],
    });
  };

  const skillElements = resume.skillItems.map((skillItem) => {
    return <SkillForm key={skillItem.id} skillItem={skillItem} />;
  });

  return (
    <Box sx={{ gap: "1.5rem", display: "flex", flexDirection: "column" }}>
      <Typography component="h2" variant="h6">
        SKILLS
      </Typography>
      <>
        {skillElements}
        <Button variant="outlined" onClick={handleAddSkill}>
          Add Skill
        </Button>
      </>
    </Box>
  );
}
