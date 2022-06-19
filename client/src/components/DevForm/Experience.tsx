import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "../../context";
import { DevResumeType } from "../../types";
import ExperienceForm from "./ExperienceForm";

export default function Experience() {
  const { user, setUser } = useContext(UserContext);

  const handleAddExperience = () => {
    let resume: DevResumeType = user.resume;
    resume = {
      ...resume,
      experienceItems: [
        ...resume.experienceItems,
        {
          id: nanoid(),
          jobTitle: "",
          employerName: "",
          workLocation: "",
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
      {experienceElements}
      <Button variant="outlined" onClick={handleAddExperience}>
        Add Experience
      </Button>
    </>
  );
}
