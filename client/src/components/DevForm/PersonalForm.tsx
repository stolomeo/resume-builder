import { Box, TextField, Typography } from "@mui/material";

export default function Personal() {
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
        type="text"
        name="fullname"
        placeholder="Jane Doe"
        label="Full Name"
        // value={firstName}
        // onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        type="text"
        name="email"
        label="Email"
        placeholder="janedoe@gmail.com"
        // value={email}
        // onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        type="text"
        name="phone"
        label="Phone Number"
        placeholder="+1 123-456-7890"
        // value={phone}
        // onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        type="text"
        name="githubLink"
        label="Github URL"
        placeholder="https://github.com/janedoe"
        // value={homeCity}
        // onChange={handleChangePersonal}
      />
      <TextField
        variant="standard"
        type="text"
        name="linkedinLink"
        label="Linkedin URL"
        placeholder="https://www.linkedin.com/in/janedoe/"
        // value={homeState}
        // onChange={handleChangePersonal}
      />
    </Box>
  );
}
