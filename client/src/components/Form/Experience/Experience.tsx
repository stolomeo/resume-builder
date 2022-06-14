import { Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import ResumeContext from "../../../context/";
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
      <Typography component="h2" variant="h6">
        WORK EXPERIENCE
      </Typography>
      <>
        {experienceElements}
        <Button variant="outlined" onClick={handleAddExperience}>
          Add Experience
        </Button>
      </>
    </>
  );
}
