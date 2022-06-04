import SkillItems from "./SkillItems";
import { ResumeSkillItems } from "../../../types";
import { PreviewSection, SectionHeader, SectionItems } from "../styles";

type Props = {
  skillItems: ResumeSkillItems[];
};

export default function Skill({ skillItems }: Props) {
  const skillElements = skillItems.map((skillItem) => {
    return <SkillItems key={skillItem.id} skillItem={skillItem} />;
  });

  return (
    <PreviewSection mt="0.5">
      <SectionHeader>SKILLS</SectionHeader>
      <hr />
      <SectionItems flexD="row" gap=".3rem">
        <strong>Skills:</strong> {skillElements}
      </SectionItems>
    </PreviewSection>
  );
}
