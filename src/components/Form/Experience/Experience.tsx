import ExperienceForm from "./ExperienceForm";
import { Button, FormSectionHeader, SectionWrapper } from "../styles";
import { useContext } from "react";
import { ResumeContext } from "../../../context/ResumeContext";
import { nanoid } from "nanoid";

export default function Experience() {
  const { resume, setResume } = useContext(ResumeContext);

  const handleAddExperience = () => {
    setResume({
      ...resume,
      experienceItems: [
        ...resume.experienceItems,
        {
          id: nanoid(),
          employerName: "",
          jobTitle: "",
          workCity: "",
          workState: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const experienceElements = resume.experienceItems.map((experienceItem) => {
    return (
      <ExperienceForm key={experienceItem.id} experienceItem={experienceItem} />
    );
  });

  return (
    <>
      <FormSectionHeader>Experience</FormSectionHeader>
      <SectionWrapper>
        {experienceElements}
        <Button onClick={handleAddExperience}>Add</Button>
      </SectionWrapper>
    </>
  );
}
