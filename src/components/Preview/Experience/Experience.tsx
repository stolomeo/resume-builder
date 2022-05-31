import { SectionHeader } from "../styles";
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
