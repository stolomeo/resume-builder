import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Personal from "./Personal/Personal";

type Props = {
  resume: any;
};

export default function Preview({ resume }: Props) {
  const { personalItems, experienceItems, educationItems } = resume;

  return (
    <>
      <Personal personalItems={personalItems} />
      <Experience experienceItems={experienceItems} />
      <Education educationItems={educationItems} />
    </>
  );
}
