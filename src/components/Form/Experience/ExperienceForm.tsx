import { Button, FormWrapper, Input } from "../styles";
import { ExperienceItemsType } from "../../../types/";
import { ChangeEvent, useContext } from "react";
import { ResumeContext } from "../../../context/ResumeContext";

type Props = {
  experienceItem: ExperienceItemsType;
};
export default function ExperienceForm({ experienceItem }: Props) {
  const { resume, setResume } = useContext(ResumeContext);

  const {
    id,
    employerName,
    jobTitle,
    workCity,
    workState,
    startDate,
    endDate,
  } = experienceItem;

  const handleChangeExperience = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    const newExperience = resume.experienceItems.map((experienceItem) => {
      if (experienceItem.id === id) {
        return { ...experienceItem, [name]: value };
      }
      return experienceItem;
    });
    setResume({ ...resume, experienceItems: [...newExperience] });
  };

  const handleDeleteExperience = (id: string) => {
    const newExperience = resume.experienceItems.filter((experienceItem) => {
      return experienceItem.id !== id;
    });
    setResume({ ...resume, experienceItems: [...newExperience] });
  };

  return (
    <FormWrapper flexD="column">
      <Input
        type="text"
        name="employerName"
        placeholder="Employer name"
        value={employerName}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <Input
        type="text"
        name="jobTitle"
        placeholder="Job title"
        value={jobTitle}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <Input
        type="text"
        name="workCity"
        placeholder="City"
        value={workCity}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <Input
        type="text"
        name="workState"
        placeholder="State"
        value={workState}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <Input
        type="text"
        name="startDate"
        placeholder="Start date"
        value={startDate}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <Input
        type="text"
        name="endDate"
        placeholder="End date"
        value={endDate}
        onChange={(e) => handleChangeExperience(e, id)}
      />
      <Button onClick={() => handleDeleteExperience(id)}>Delete</Button>
    </FormWrapper>
  );
}
