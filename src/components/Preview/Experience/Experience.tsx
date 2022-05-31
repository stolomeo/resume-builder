import styled from "styled-components";
import ExperienceItems from "./ExperienceItems";

type Props = {
  experienceItems: any[];
};

export default function Experience({ experienceItems }: Props) {
  const experienceElements = experienceItems.map((experienceItem) => {
    return (
      <ExperienceItems
        key={experienceItem.id}
        experienceItem={experienceItem}
      />
    );
  });

  return (
    <section className="resume-section">
      <SectionHeader>WORK EXPERIENCE</SectionHeader>
      <hr />
      {experienceElements}
    </section>
  );
}

export const SectionHeader = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;
