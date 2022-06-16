import { Box, Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import { ResumeType } from "../../../types";
import SkillForm from "./SkillForm";

export default function Skill() {
  const { user, setUser } = useContext(UserContext);

  const handleAddSkill = () => {
    let resume: ResumeType = user.resume;
    resume = {
      ...resume,
      skillItems: [
        ...resume.skillItems,
        {
          id: nanoid(),
          employerName: "",
          jobTitle: "",
          workCity: "",
          workState: "",
          startDate: "",
          endDate: "",
        },
      ],
    };
    setUser({ ...user, resume: resume });
  };

  const skillElements = user.resume.skillItems.map((skillItem) => {
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
