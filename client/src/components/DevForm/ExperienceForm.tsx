import { Box, Button, TextField } from "@mui/material";

export default function ExperienceForm() {
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
          //   value={employerName}
          //   onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="employerName"
          label="Company Name"
          placeholder="Apple"
          //   value={jobTitle}
          //   onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="workLocation"
          label="Location"
          placeholder="Cupertino, CA"
          //   value={workCity}
          //   onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="startDate"
          label="Start date"
          placeholder="Apr 2021"
          //   value={startDate}
          //   onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="endDate"
          label="End date"
          placeholder="Jun 2022"
          //   value={endDate}
          //   onChange={(e) => handleChangeExperience(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="responsibility"
          label="Job Responsibility"
          placeholder="Designed, developed, implemented, and supported complex JAVA/J2EE applications"
          //   value={endDate}
          //   onChange={(e) => handleChangeExperience(e, id)}
        />
      </Box>
      <Button
        variant="outlined"
        sx={{ mt: 2 }}
        // onClick={() => handleDeleteExperience(id)}
      >
        Delete Experience
      </Button>
    </>
  );
}
