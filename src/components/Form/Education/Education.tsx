import EducationForm from "./EducationForm";
import { Button, FormSectionHeader, SectionWrapper } from "../styles";
import { ResumeEducationItems } from "../../../types";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { ResumeContext } from "../../../context/ResumeContext";

type Props = {
  educationItems: ResumeEducationItems[];
};

export default function Education({ educationItems }: Props) {
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
  const educationElements = educationItems.map((educationItem) => {
    return (
      <EducationForm key={educationItem.id} educationItem={educationItem} />
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
