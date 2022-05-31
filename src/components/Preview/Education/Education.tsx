import EducationItems from "./EducationItems";

type Props = {
  educationItems: any[];
};

export default function Education({ educationItems }: Props) {
  const educationElements = educationItems.map((educationItem) => {
    return (
      <EducationItems key={educationItem.id} educationItem={educationItem} />
    );
  });

  return (
    <section className="resume-section">
      <h2 className="section-title">EDUCATION</h2>
      <hr />
      {educationElements}
    </section>
  );
}
