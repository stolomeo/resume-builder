import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../../context";
import { formInputBox } from "../../../../styles";
import { EducationItemsType } from "../../../../types";

type Props = {
  educationItem: EducationItemsType;
};

export default function EducationForm({ educationItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const { id, majorAndDegree, schoolName, schoolLocation, graduationDate } =
    educationItem;

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
      <Box sx={formInputBox}>
        <TextField
          variant="standard"
          type="text"
          name="majorAndDegree"
          label="Degree/Major"
          placeholder="Bachelor of Science - Computer Science"
          value={majorAndDegree}
          onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="schoolName"
          label="School Name"
          placeholder="Harvard University"
          value={schoolName}
          onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="schoolLocation"
          label="School Location"
          placeholder="Cambridge, MA"
          value={schoolLocation}
          onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="graduationDate"
          label="Graduation Date"
          placeholder="Dec 2020"
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
