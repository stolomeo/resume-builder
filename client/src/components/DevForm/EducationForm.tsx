import { Box, TextField } from "@mui/material";

export default function EducationForm() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <TextField
          variant="standard"
          type="text"
          name="majorAndDegree"
          label="Degree/Major"
          placeholder="Bachelor of Science - Computer Science"
          //   value={majorAndDegree}
          //   onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="schoolName"
          label="School Name"
          placeholder="Harvard University"
          //   value={schoolName}
          //   onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="schoolLocation"
          label="School Location"
          placeholder="Cambridge, MA"
          //   value={schoolLocation}
          //   onChange={(e) => handleChangeEducation(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="graduationDate"
          label="Graduation Date"
          placeholder="Dec 2020"
          //   value={graduationDate}
          //   onChange={(e) => handleChangeEducation(e, id)}
        />
      </Box>
      {/* <Button variant="outlined" onClick={() => handleDeleteEducation(id)}>
        Delete Education
      </Button> */}
    </>
  );
}
