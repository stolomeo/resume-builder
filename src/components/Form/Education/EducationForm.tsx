import { Button, FormWrapper, Input } from "../styles";
import { ChangeEvent } from "react";
import { ResumeEducationItems } from "../../../types/";

type Props = {
  id: string;
  educationItem: ResumeEducationItems;
  handleChangeEducation: (e: ChangeEvent, id: string) => void;
  handleDeleteEducation: (id: string) => void;
};

export default function EducationForm({
  id,
  educationItem,
  handleChangeEducation,
  handleDeleteEducation,
}: Props) {
  const { university, schoolCity, schoolState, degree, major, graduationDate } =
    educationItem;
  return (
    <FormWrapper>
      <Input
        type="text"
        name="university"
        placeholder="University"
        value={university}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <Input
        type="text"
        name="schoolCity"
        placeholder="City"
        value={schoolCity}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <Input
        type="text"
        name="schoolState"
        placeholder="State"
        value={schoolState}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <Input
        type="text"
        name="degree"
        placeholder="Degree"
        value={degree}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <Input
        type="text"
        name="major"
        placeholder="Major / area of study"
        value={major}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <Input
        type="text"
        name="graduationDate"
        placeholder="Graduation Date"
        value={graduationDate}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <Button onClick={() => handleDeleteEducation(id)}>Delete</Button>
    </FormWrapper>
  );
}
