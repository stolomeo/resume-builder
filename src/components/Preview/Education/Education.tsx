import EducationItems from "./EducationItems";
import { PreviewSection, SectionHeader, SectionItems } from "../styles";
import { useContext } from "react";
import { ResumeContext } from "../../../context/ResumeContext";

export default function Education() {
  const { resume } = useContext(ResumeContext);

  const educationElements = resume.educationItems.map((educationItem) => {
    return (
      <EducationItems key={educationItem.id} educationItem={educationItem} />
    );
  });

  return (
    <PreviewSection mt="1rem">
      <SectionHeader>EDUCATION</SectionHeader>
      <hr />
      <SectionItems flexD="column" gap=".8rem">
        {educationElements}
      </SectionItems>
    </PreviewSection>
  );
}
