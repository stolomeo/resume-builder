import { ResumeEducationItems } from "../../../types";
import { SectionHeader } from "../styles";
import EducationItems from "./EducationItems";

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
    <section className="resume-section">
      <SectionHeader>EDUCATION</SectionHeader>
      <hr />
      {educationElements}
    </section>
  );
}
