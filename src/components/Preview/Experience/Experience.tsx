import { useContext } from "react";
import ResumeContext from "../../../context/";
import { PreviewSection, SectionHeader, SectionItems } from "../styles";
import ExperienceItems from "./ExperienceItems";

export default function Experience() {
  const { resume } = useContext(ResumeContext);

  const experienceElements = resume.experienceItems.map((experienceItem) => {
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
