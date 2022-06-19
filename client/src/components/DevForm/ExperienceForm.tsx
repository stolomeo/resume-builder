import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../context";
import { ExperienceItemsType } from "../../types";
import JobPoints from "./JobPoints";

type Props = {
  experienceItem: ExperienceItemsType;
};

export default function ExperienceForm({ experienceItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const { id, jobTitle, employerName, workLocation, startDate, endDate } =
    experienceItem;

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
          name="jobTitle"
          label="Position Name"
          placeholder="Software Engineer"
          value={jobTitle}
          onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="employerName"
          label="Company Name"
          placeholder="Apple"
          value={employerName}
          onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="workLocation"
          label="Location"
          placeholder="Cupertino, CA"
          value={workLocation}
          onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="startDate"
          label="Start date"
          placeholder="Apr 2021"
          value={startDate}
          onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="endDate"
          label="End date"
          placeholder="Jun 2022"
          value={endDate}
          onChange={(e) => handleChangeExperience(e, id)}
        />
      </Box>
      <JobPoints />
      <Button variant="outlined" onClick={() => handleDeleteExperience(id)}>
        Delete Experience
      </Button>
    </>
  );
}
