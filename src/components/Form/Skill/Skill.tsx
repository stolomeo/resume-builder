import SkillForm from "./SkillForm";
import { Button, FormSectionHeader, SectionWrapper } from "../styles";
import { ResumeSkillItems } from "../../../types";
import { useContext } from "react";
import { ResumeContext } from "../../../context/ResumeContext";
import { nanoid } from "nanoid";

type Props = {
  skillItems: ResumeSkillItems[];
};

export default function Skill({ skillItems }: Props) {
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

  const skillElements = skillItems.map((skillItem) => {
    return <SkillForm key={skillItem.id} skillItem={skillItem} />;
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
