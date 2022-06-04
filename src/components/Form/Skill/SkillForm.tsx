import { ChangeEvent, useContext } from "react";
import ResumeContext from "../../../context/ResumeContext";
import { ResumeSkillItems } from "../../../types";
import { Button, FormWrapper, Input } from "../styles";

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
    <FormWrapper flexD="row">
      <Input
        type="text"
        name="skill"
        placeholder="Skill"
        value={skill}
        onChange={(e) => handleChangeSkill(e, id)}
      />

      <Button onClick={() => handleDeleteSkill(id)}>Delete</Button>
    </FormWrapper>
  );
}
