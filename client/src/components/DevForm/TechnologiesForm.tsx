import { Box, TextField } from "@mui/material";

export default function TechnologiesForm() {
  return (
    <Box sx={{ display: "flex", gap: "3rem" }}>
      <TextField
        variant="standard"
        type="text"
        name="technology"
        label="Technology"
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
