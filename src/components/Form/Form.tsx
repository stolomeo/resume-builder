import { ChangeEvent } from "react";
import Education from "./Education/";
import Experience from "./Experience/";
import Personal from "./Personal/";

type Props = {
  resume: any;
  handleChangePersonal: (e: ChangeEvent) => void;
  handleChangeExperience: (e: ChangeEvent, id: string) => void;
  handleChangeEducation: (e: ChangeEvent, id: string) => void;
  handleAddExperience: () => void;
  handleAddEducation: () => void;
  handleDeleteExperience: (id: string) => void;
  handleDeleteEducation: (id: string) => void;
};

export default function Form({
  resume,
  handleChangePersonal,
  handleChangeExperience,
  handleChangeEducation,
  handleAddExperience,
  handleAddEducation,
  handleDeleteExperience,
  handleDeleteEducation,
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
        handleDeleteExperience={handleDeleteExperience}
      />
      <Education
        educationItems={educationItems}
        handleChangeEducation={handleChangeEducation}
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
    </>
  );
}
