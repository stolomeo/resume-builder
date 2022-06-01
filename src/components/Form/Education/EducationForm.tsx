import { FormWrapper } from "../styles";
import { ChangeEvent } from "react";
import { EducationItem } from "../../../types/";

type Props = {
  id: string;
  educationItem: EducationItem;
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
      <input
        type="text"
        name="university"
        placeholder="University"
        value={university}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <input
        type="text"
        name="schoolCity"
        placeholder="City"
        value={schoolCity}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <input
        type="text"
        name="schoolState"
        placeholder="State"
        value={schoolState}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={degree}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <input
        type="text"
        name="major"
        placeholder="Major / area of study"
        value={major}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <input
        type="text"
        name="graduationDate"
        placeholder="Graduation Date"
        value={graduationDate}
        onChange={(e) => handleChangeEducation(e, id)}
      />
      <button onClick={() => handleDeleteEducation(id)}>Delete</button>
    </FormWrapper>
  );
}
