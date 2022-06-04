import SkillForm from "./SkillForm";
import { Button, FormSectionHeader, SectionWrapper } from "../styles";
import { useContext } from "react";
import { ResumeContext } from "../../../context/ResumeContext";
import { nanoid } from "nanoid";

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
    <>
      <FormSectionHeader>Skills</FormSectionHeader>
      <SectionWrapper flexD="row">
        {skillElements}
        <Button onClick={handleAddSkill}>Add</Button>
      </SectionWrapper>
    </>
  );
}
