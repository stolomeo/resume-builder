import { nanoid } from "nanoid";
import { useContext } from "react";
import ResumeContext from "../../../context/ResumeContext";
import { Button, FormSectionHeader, SectionWrapper } from "../styles";
import EducationForm from "./EducationForm";

export default function Education() {
  const { resume, setResume } = useContext(ResumeContext);

  const handleAddEducation = () => {
    setResume({
      ...resume,
      educationItems: [
        ...resume.educationItems,
        {
          id: nanoid(),
          university: "",
          degree: "",
          major: "",
          schoolCity: "",
          schoolState: "",
          graduationDate: "",
        },
      ],
    });
  };

  const educationElements = resume.educationItems.map((educationItem) => {
    return (
      <EducationForm key={educationItem.id} educationItem={educationItem} />
    );
  });

  return (
    <>
      <FormSectionHeader>Education</FormSectionHeader>
      <SectionWrapper flexD="column">
        {educationElements}
        <Button onClick={handleAddEducation}>Add</Button>
      </SectionWrapper>
    </>
  );
}
