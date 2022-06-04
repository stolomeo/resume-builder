import { Button, FormWrapper, Input } from "../styles";
import { ResumeSkillItems } from "../../../types";
import { ChangeEvent } from "react";

type Props = {
  id: string;
  skillItem: ResumeSkillItems;
  handleChangeSkill: (e: ChangeEvent, id: string) => void;
  handleDeleteSkill: (id: string) => void;
};
export default function SkillForm({
  id,
  skillItem,
  handleChangeSkill,
  handleDeleteSkill,
}: Props) {
  const { skill } = skillItem;
  return (
    <FormWrapper>
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
