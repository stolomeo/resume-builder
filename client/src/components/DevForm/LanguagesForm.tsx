import { Box, TextField } from "@mui/material";

export default function LanguagesForm() {
  return (
    <Box sx={{ display: "flex", gap: "3rem" }}>
      <TextField
        variant="standard"
        type="text"
        name="language"
        label="Programming Language"
        placeholder="JavaScript"
        // value={skill}
        // onChange={(e) => handleChangeSkill(e, id)}
      />
      {/* <Button variant="outlined" onClick={() => handleDeleteSkill(id)}>
        Delete Skill
      </Button> */}
    </Box>
  );
}
