import { Button, FormWrapper, Input } from "../styles";
import { ResumeExperienceItems } from "../../../types/";
import { ChangeEvent } from "react";

type Props = {
  id: string;
  experienceItem: ResumeExperienceItems;
  handleChangeExperience: (e: ChangeEvent, id: string) => void;
  handleDeleteExperience: (id: string) => void;
};
export default function ExperienceForm({
  id,
  experienceItem,
  handleChangeExperience,
  handleDeleteExperience,
}: Props) {
  const { employerName, jobTitle, workCity, workState, startDate, endDate } =
    experienceItem;
  return (
    <FormWrapper>
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
