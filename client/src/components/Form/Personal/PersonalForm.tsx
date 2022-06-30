import { Box, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../context";

export default function PersonalForm() {
  const { user, setUser } = useContext(UserContext);

  const { fullName, email, phone, githubLink, linkedinLink } =
    user.resume.personalItems;

  const handleChangePersonal = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    let resume = user.resume;
    resume.personalItems[name] = value;
    setUser({ ...user, resume: resume });
  };

  return (
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
        name="fullName"
        placeholder="Jane Doe"
        label="Full Name"
        value={fullName}
        onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        type="text"
        name="email"
        label="Email"
        placeholder="janedoe@gmail.com"
        value={email}
        onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        type="text"
        name="phone"
        label="Phone Number"
        placeholder="+1 123-456-7890"
        value={phone}
        onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        type="text"
        name="githubLink"
        label="Github URL"
        placeholder="https://github.com/janedoe"
        value={githubLink}
        onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        type="text"
        name="linkedinLink"
        label="Linkedin URL"
        placeholder="https://www.linkedin.com/in/janedoe/"
        value={linkedinLink}
        onChange={handleChangePersonal}
      />
    </Box>
  );
}
