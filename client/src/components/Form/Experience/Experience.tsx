import { Button, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import { ResumeType } from "../../../types";
import ExperienceForm from "./ExperienceForm";

export default function Experience() {
  const { user, setUser } = useContext(UserContext);

  const handleAddExperience = () => {
    let resume: ResumeType = user.resume;
    resume = {
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
    };
    setUser({ ...user, resume: resume });
  };

  const experienceElements = user.resume.experienceItems.map(
    (experienceItem) => {
      return (
        <ExperienceForm
          key={experienceItem.id}
          experienceItem={experienceItem}
        />
      );
    }
  );

  return (
    <>
      <Typography component="h2" variant="h6" marginBottom="1.5rem">
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
