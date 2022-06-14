import { Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import ResumeContext from "../../../context/";
import EducationForm from "./EducationForm";

export default function Education() {
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

  const educationElements = resume.educationItems.map((educationItem) => {
    return (
      <EducationForm key={educationItem.id} educationItem={educationItem} />
    );
  });

  return (
    <>
      <Typography component="h2" variant="h6">
        EDUCATION
      </Typography>
      {educationElements}
      <Button variant="outlined" onClick={handleAddEducation}>
        Add Education
      </Button>
    </>
  );
}
