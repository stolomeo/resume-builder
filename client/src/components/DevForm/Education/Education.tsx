import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "../../../context";
import { DevResumeType } from "../../../types";
import EducationForm from "./EducationForm";

export default function Education() {
  const { user, setUser } = useContext(UserContext);

  const handleAddEducation = () => {
    let resume: DevResumeType = user.resume;
    resume = {
      ...resume,
      educationItems: [
        ...resume.educationItems,
        {
          id: nanoid(),
          majorAndDegree: "",
          schoolName: "",
          schoolLocation: "",
          graduationDate: "",
        },
      ],
    };
    setUser({ ...user, resume: resume });
  };

  const educationElements = user.resume.educationItems.map((educationItem) => {
    return (
      <EducationForm key={educationItem.id} educationItem={educationItem} />
    );
  });
  return (
    <>
      {educationElements}
      <Button variant="outlined" onClick={handleAddEducation}>
        Add Education
      </Button>
    </>
  );
}
