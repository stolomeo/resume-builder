import { ChangeEvent } from "react";

type EducationItem = {
  university: string;
  schoolCity: string;
  schoolState: string;
  degree: string;
  major: string;
  graduationDate: string;
};

type Props = {
  id: string;
  educationItem: EducationItem;
  handleChangeEducation: (e: ChangeEvent, id: string) => void;
};

export default function EducationForm({
  id,
  educationItem,
  handleChangeEducation,
}: Props) {
  const { university, schoolCity, schoolState, degree, major, graduationDate } =
    educationItem;
  return (
    <form>
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
    </form>
  );
}
