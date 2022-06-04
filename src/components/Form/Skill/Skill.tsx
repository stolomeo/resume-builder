import SkillForm from "./SkillForm";
import { Button, FormSectionHeader, SectionWrapper } from "../styles";
import { ResumeSkillItems } from "../../../types";

type Props = {
  skillItems: ResumeSkillItems[];
  handleChangeSkill: any;
  handleAddSkill: () => void;
  handleDeleteSkill: (id: string) => void;
};

export default function Skill({
  skillItems,
  handleChangeSkill,
  handleAddSkill,
  handleDeleteSkill,
}: Props) {
  const skillElements = skillItems.map((skillItem) => {
    return (
      <SkillForm
        key={skillItem.id}
        id={skillItem.id}
        skillItem={skillItem}
        handleChangeSkill={handleChangeSkill}
        handleDeleteSkill={handleDeleteSkill}
      />
    );
  });
  return (
    <>
      <FormSectionHeader>Skill</FormSectionHeader>
      <SectionWrapper>
        {skillElements}
        <Button onClick={handleAddSkill}>Add</Button>
      </SectionWrapper>
    </>
  );
}
