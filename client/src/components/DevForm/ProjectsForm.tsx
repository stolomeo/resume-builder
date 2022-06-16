import { Box, TextField } from "@mui/material";

export default function ProjectsForm() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <TextField
          variant="standard"
          type="text"
          name="projectName"
          label="Project Name"
          placeholder="Resume Builder"
          //   value={projectName}
          //   onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="projectRole"
          label="Project Role"
          placeholder="Lead Developer"
          //   value={projectRole}
          //   onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="projectEndDate"
          label="Completion Date"
          placeholder="Feb 2021"
          //   value={projectEndDate}
          //   onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="point"
          label="Details"
          placeholder="Created a web application using Pokemon sprites so that users can test their memory"
          //   value={point}
          //   onChange={(e) => handleChangeEducation(e, id)}
        />
      </Box>
      {/* <Button variant="outlined" onClick={() => handleDeleteEducation(id)}>
        Delete Education
      </Button> */}
    </>
  );
}
