import { Button, FormSectionHeader, SectionWrapper } from "../styles";
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
    <>
      <FormSectionHeader>Education</FormSectionHeader>
      <SectionWrapper>
        {educationElements}
        <Button onClick={handleAddEducation}>Add</Button>
      </SectionWrapper>
    </>
  );
}
