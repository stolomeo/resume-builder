import { useContext } from "react";
import ResumeContext from "../../../context/ResumeContext";
import { PreviewSection, SectionHeader, SectionItems } from "../styles";
import SkillItems from "./SkillItems";

export default function Skill() {
  const { resume } = useContext(ResumeContext);

  const skillElements = resume.skillItems.map((skillItem) => {
    return <SkillItems key={skillItem.id} skillItem={skillItem} />;
  });

  return (
    <PreviewSection mt="1rem">
      <SectionHeader>SKILLS</SectionHeader>
      <hr />
      <SectionItems flexD="row" gap=".3rem">
        <strong>Skills:</strong> {skillElements}
      </SectionItems>
    </PreviewSection>
  );
}
