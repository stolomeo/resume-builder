import { ResumeExperienceItems } from "../../../types";
import { SectionHeader, SectionItems } from "../styles";
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
    <section>
      <SectionHeader>WORK EXPERIENCE</SectionHeader>
      <hr />
      <SectionItems>{experienceElements}</SectionItems>
    </section>
  );
}
