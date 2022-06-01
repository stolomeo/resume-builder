import { FormSectionHeader } from "../styles";
import { ChangeEvent } from "react";
import EducationForm from "./EducationForm";

type Props = {
  educationItems: any[];
  handleChangeEducation: (e: ChangeEvent, id: string) => void;
  handleAddEducation: () => void;
  handleDeleteEducation: (id: string) => void;
};

export default function Education({
  educationItems,
  handleChangeEducation,
  handleAddEducation,
  handleDeleteEducation,
}: Props) {
  const educationElements = educationItems.map((educationItem) => {
    return (
      <EducationForm
        key={educationItem.id}
        id={educationItem.id}
        educationItem={educationItem}
        handleChangeEducation={handleChangeEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
    );
  });
  return (
    <section>
      <FormSectionHeader>Education</FormSectionHeader>
      {educationElements}
      <button onClick={handleAddEducation}>Add</button>
    </section>
  );
}
