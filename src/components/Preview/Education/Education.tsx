import EducationItems from "./EducationItems";
import { ResumeEducationItems } from "../../../types";
import { PreviewSection, SectionHeader, SectionItems } from "../styles";

type Props = {
  educationItems: ResumeEducationItems[];
};

export default function Education({ educationItems }: Props) {
  const educationElements = educationItems.map((educationItem) => {
    return (
      <EducationItems key={educationItem.id} educationItem={educationItem} />
    );
  });

  return (
    <PreviewSection mt="0.5rem">
      <SectionHeader>EDUCATION</SectionHeader>
      <hr />
      <SectionItems flexD="column" gap=".8rem">
        {educationElements}
      </SectionItems>
    </PreviewSection>
  );
}
