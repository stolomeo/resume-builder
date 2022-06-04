import { nanoid } from "nanoid";
import { useContext } from "react";
import ResumeContext from "../../../context/";
import { Button, FormSectionHeader, SectionWrapper } from "../styles";
import ExperienceForm from "./ExperienceForm";

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
      <SectionWrapper flexD="column">
        {experienceElements}
        <Button onClick={handleAddExperience}>Add</Button>
      </SectionWrapper>
    </>
  );
}
