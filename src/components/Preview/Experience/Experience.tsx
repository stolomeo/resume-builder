import { ResumeExperienceItems } from "../../../types";
import { PreviewSection, SectionHeader, SectionItems } from "../styles";
import ExperienceItems from "./ExperienceItems";

type Props = {
  experienceItems: ResumeExperienceItems[];
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
    <PreviewSection>
      <SectionHeader>WORK EXPERIENCE</SectionHeader>
      <hr />
      <SectionItems flexD="column" gap="0.8rem">
        {experienceElements}
      </SectionItems>
    </PreviewSection>
  );
}
