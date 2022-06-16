import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../context/UserContext";

export default function Personal() {
  const { user, setUser } = useContext(UserContext);

  const { firstName, lastName, email, phone, homeCity, homeState } =
    user.resume.personalItems;

  const handleChangePersonal = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    let resume = user.resume;
    resume.personalItems[name] = value;
    // resume.personalItems = {...resume.personalItems,[name]: value};
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
      <Typography component="h2" variant="h6">
        PERSONAL INFORMATION
      </Typography>

      <TextField
        variant="standard"
        InputProps={{ style: {} }}
        type="text"
        name="firstName"
        label="First Name"
        placeholder="Jane Doe"
        value={firstName}
        onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        InputProps={{ style: {} }}
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        InputProps={{ style: {} }}
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        InputProps={{ style: {} }}
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={phone}
        onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        InputProps={{ style: {} }}
        type="text"
        name="homeCity"
        placeholder="City"
        value={homeCity}
        onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        InputProps={{ style: {} }}
        type="text"
        name="homeState"
        placeholder="State"
        value={homeState}
        onChange={handleChangePersonal}
      />
    </Box>
  );
}
