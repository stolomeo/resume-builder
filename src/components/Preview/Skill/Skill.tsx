import SkillItems from "./SkillItems";
import { ResumeSkillItems } from "../../../types";
import { SectionHeader } from "../styles";
import styled from "styled-components";

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
      <SkillsWrapper>
        <strong>Skills:</strong> {skillElements}
      </SkillsWrapper>
    </section>
  );
}

const SkillsWrapper = styled.section`
  display: flex;
  gap: 0.3rem;
`;
