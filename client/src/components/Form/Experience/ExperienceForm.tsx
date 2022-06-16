import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../context/UserContext";
import { ExperienceItemsType } from "../../../types/";

type Props = {
  experienceItem: ExperienceItemsType;
};
export default function ExperienceForm({ experienceItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const {
    id,
    employerName,
    jobTitle,
    workCity,
    workState,
    startDate,
    endDate,
  } = experienceItem;

  const handleChangeExperience = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    let resume = user.resume;
    resume.experienceItems = resume.experienceItems.map((experienceItem) => {
      if (experienceItem.id === id) {
        return { ...experienceItem, [name]: value };
      }
      return experienceItem;
    });
    setUser({ ...user, resume: resume });
  };

  const handleDeleteExperience = (id: string) => {
    let resume = user.resume;
    resume.experienceItems = resume.experienceItems.filter((experienceItem) => {
      return experienceItem.id !== id;
    });
    setUser({ ...user, resume: resume });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <TextField
          variant="standard"
          type="text"
          name="employerName"
          placeholder="Employer name"
          value={employerName}
          onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="jobTitle"
          placeholder="Job title"
          value={jobTitle}
          onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="workCity"
          placeholder="City"
          value={workCity}
          onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="workState"
          placeholder="State"
          value={workState}
          onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="startDate"
          placeholder="Start date"
          value={startDate}
          onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="endDate"
          placeholder="End date"
          value={endDate}
          onChange={(e) => handleChangeExperience(e, id)}
        />
      </Box>
      <Button
        variant="outlined"
        sx={{ mt: 2 }}
        onClick={() => handleDeleteExperience(id)}
      >
        Delete Experience
      </Button>
    </>
  );
}
