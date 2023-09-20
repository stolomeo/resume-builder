import { Box, Button, TextField } from "@mui/material";
import { getFlexboxStyles } from "@utils/customStyles";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../../context";
import { EducationItemsType } from "../../../../types/resume.type";
import { educationFormFields } from "../../../../utils/educationFormFields";

type Props = {
  educationItem: EducationItemsType;
};

export default function EducationForm({ educationItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const { id } = educationItem;

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
      <Box sx={getFlexboxStyles({ flexDirection: "column", gap: "1.5rem" })}>
        {educationFormFields.map((field) => (
          <TextField
            key={field.name}
            variant="standard"
            type="text"
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            value={educationItem[field.name]}
            onChange={(e) => handleChangeEducation(e, id)}
          />
        ))}
      </Box>
      <Button variant="outlined" onClick={() => handleDeleteEducation(id)}>
        Delete Education
      </Button>
    </>
  );
}
