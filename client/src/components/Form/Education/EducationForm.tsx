import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../context/UserContext";
import { EducationItemsType } from "../../../types/";

type Props = {
  educationItem: EducationItemsType;
};

export default function EducationForm({ educationItem }: Props) {
  const { user, setUser } = useContext(UserContext);

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
    let resume = user.resume;
    resume.educationItems = resume.educationItems.map((educationItem) => {
      if (educationItem.id === id) {
        return { ...educationItem, [name]: value };
      }
      return educationItem;
    });
    setUser({ ...user, resume: resume });
  };

  const handleDeleteEducation = (id: string) => {
    let resume = user.resume;
    resume.educationItems = resume.educationItems.filter((educationItem) => {
      return educationItem.id !== id;
    });
    setUser({ ...user, resume: resume });
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <TextField
          variant="standard"
          type="text"
          name="university"
          placeholder="University"
          value={university}
          onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="schoolCity"
          placeholder="City"
          value={schoolCity}
          onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="schoolState"
          placeholder="State"
          value={schoolState}
          onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="degree"
          placeholder="Degree"
          value={degree}
          onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="major"
          placeholder="Major / area of study"
          value={major}
          onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="graduationDate"
          placeholder="Graduation Date"
          value={graduationDate}
          onChange={(e) => handleChangeEducation(e, id)}
        />
      </Box>
      <Button variant="outlined" onClick={() => handleDeleteEducation(id)}>
        Delete Education
      </Button>
    </>
  );
}
