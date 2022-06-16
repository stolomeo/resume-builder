import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import { PreviewSection, SectionHeader, SectionItems } from "../styles";
import ExperienceItems from "./ExperienceItems";

export default function Experience() {
  const { user } = useContext(UserContext);

  const experienceElements = user.resume.experienceItems.map(
    (experienceItem) => {
      return (
        <ExperienceItems
          key={experienceItem.id}
          experienceItem={experienceItem}
        />
      );
    }
  );

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
