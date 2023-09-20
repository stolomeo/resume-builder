import { Box, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../../context";
import { getFlexboxStyles } from "@utils/customStyles";
import { personalFormFields } from "@utils/personalFormFields";

export default function PersonalForm() {
  const { user, setUser } = useContext(UserContext);

  const handleChangePersonal = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    const updatedPersonalItems = {
      ...user.resume.personalItems,
      [name]: value,
    };

    setUser({
      ...user,
      resume: { ...user.resume, personalItems: updatedPersonalItems },
    });
  };

  return (
    <Box sx={getFlexboxStyles({ flexDirection: "column", gap: "1.5rem" })}>
      <Box sx={getFlexboxStyles({ flexDirection: "column", gap: "1.5rem" })}>
        {personalFormFields.map((field) => (
          <TextField
            key={field.name}
            variant="standard"
            type="text"
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            value={user.resume.personalItems[field.name]}
            onChange={handleChangePersonal}
          />
        ))}
      </Box>
    </Box>
  );
}
