import { Box, Button, TextField } from "@mui/material";
import { nanoid } from "nanoid";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../../context";
import { formInputBox } from "../../../../styles/Resume/form.style";
import {
  ExperienceItemsType,
  ExperiencePointItemsType,
} from "../../../../types";
import ExperiencePointsForm from "./ExperiencePointsForm";

type Props = {
  experienceItem: ExperienceItemsType;
};

export default function ExperienceForm({ experienceItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const {
    id,
    jobTitle,
    employerName,
    workLocation,
    startDate,
    endDate,
    experiencePointItems,
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
  const handleAddExperienceDetail = () => {
    let resume = user.resume;
    let itemIndex = 0;
    // Search algorithm. O(n) runtime
    resume.experienceItems.forEach((item, index) => {
      if (item.id === experienceItem.id) {
        itemIndex = index;
      }
    });
    resume.experienceItems[itemIndex].experiencePointItems = [
      ...experiencePointItems,
      {
        id: nanoid(),
        experiencePoint: "",
      },
    ];
    setUser({ ...user, resume: resume });
  };
  const experiencePointItemElements = experiencePointItems.map(
    (experiencePointItem: ExperiencePointItemsType) => {
      return <ExperiencePointsForm experiencePointItem={experiencePointItem} />;
    }
  );
  return (
    <>
      <Box sx={formInputBox}>
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
      {experiencePointItemElements}
      <Button variant="outlined" onClick={handleAddExperienceDetail}>
        Add experience detail
      </Button>
      <Button variant="outlined" onClick={() => handleDeleteExperience(id)}>
        Delete Experience
      </Button>
    </>
  );
}
