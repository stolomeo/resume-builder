import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import { PreviewSection, SectionHeader, SectionItems } from "../styles";
import EducationItems from "./EducationItems";

export default function Education() {
  const { user } = useContext(UserContext);

  const educationElements = user.resume.educationItems.map((educationItem) => {
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
