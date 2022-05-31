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
      <h2 className="section-title">WORK EXPERIENCE</h2>
      <hr />
      {experienceElements}
    </section>
  );
}
