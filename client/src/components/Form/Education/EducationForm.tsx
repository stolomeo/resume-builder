import { ChangeEvent, useContext } from "react";
import ResumeContext from "../../../context/";
import { EducationItemsType } from "../../../types/";
import { Button, FormWrapper, Input } from "../styles";

type Props = {
  educationItem: EducationItemsType;
};

export default function EducationForm({ educationItem }: Props) {
  const { resume, setResume } = useContext(ResumeContext);

  const {
    id,
    university,
    schoolCity,
    schoolState,
    degree,
    major,
    graduationDate,
  } = educationItem;

  const handleChangeEducation = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    const newEducation = resume.educationItems.map((educationItem) => {
      if (educationItem.id === id) {
        return { ...educationItem, [name]: value };
      }
      return educationItem;
    });
    setResume({ ...resume, educationItems: [...newEducation] });
  };

  const handleDeleteEducation = (id: string) => {
    const newEducation = resume.educationItems.filter((educationItem) => {
      return educationItem.id !== id;
    });
    setResume({ ...resume, educationItems: [...newEducation] });
  };

  return (
    <FormWrapper flexD="column">
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
