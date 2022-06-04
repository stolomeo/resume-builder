import SkillItems from "./SkillItems";
import { ResumeSkillItems } from "../../../types";
import { SectionHeader, SectionItems } from "../styles";

type Props = {
  skillItems: ResumeSkillItems[];
};

export default function Skill({ skillItems }: Props) {
  const skillElements = skillItems.map((skillItem) => {
    return <SkillItems key={skillItem.id} skillItem={skillItem} />;
  });

  return (
    <section>
      <SectionHeader>SKILLS</SectionHeader>
      <hr />
      <SectionItems>{skillElements}</SectionItems>
    </section>
  );
}
