import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import ResumeContext from "../../../context/";
import { ResumeSkillItems } from "../../../types";

type Props = {
  skillItem: ResumeSkillItems;
};
export default function SkillForm({ skillItem }: Props) {
  const { resume, setResume } = useContext(ResumeContext);

  const handleChangeSkill = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    const newSkill = resume.skillItems.map((skillItem) => {
      if (skillItem.id === id) {
        return { ...skillItem, [name]: value };
      }
      return skillItem;
    });
    setResume({ ...resume, skillItems: [...newSkill] });
  };

  const handleDeleteSkill = (id: string) => {
    const newSkill = resume.skillItems.filter((skillItem) => {
      return skillItem.id !== id;
    });
    setResume({ ...resume, skillItems: [...newSkill] });
  };

  const { skill, id } = skillItem;

  return (
    <Box sx={{ display: "flex", gap: "3rem" }}>
      <TextField
        variant="standard"
        type="text"
        name="skill"
        placeholder="Skill"
        value={skill}
        onChange={(e) => handleChangeSkill(e, id)}
      />
      <Button variant="outlined" onClick={() => handleDeleteSkill(id)}>
        Delete Skill
      </Button>
    </Box>
  );
}
