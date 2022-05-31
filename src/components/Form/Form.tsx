import { ChangeEvent } from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Personal from "./Personal/Personal";

type Props = {
  resume: any;
  handleChangePersonal: (e: ChangeEvent) => void;
  handleChangeExperience: (e: ChangeEvent, id: string) => void;
  handleChangeEducation: (e: ChangeEvent, id: string) => void;
  handleAddExperience: () => void;
  handleAddEducation: () => void;
};

export default function Form({
  resume,
  handleChangePersonal,
  handleChangeExperience,
  handleChangeEducation,
  handleAddExperience,
  handleAddEducation,
}: Props) {
  const { personalItems, experienceItems, educationItems } = resume;
  return (
    <>
      <Personal
        personalItems={personalItems}
        handleChangePersonal={handleChangePersonal}
      />
      <Experience
        experienceItems={experienceItems}
        handleChangeExperience={handleChangeExperience}
        handleAddExperience={handleAddExperience}
      />
      <Education
        educationItems={educationItems}
        handleChangeEducation={handleChangeEducation}
        handleAddEducation={handleAddEducation}
      />
    </>
  );
}
