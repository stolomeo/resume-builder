import { TextField } from "@mui/material";

export default function PasswordInput() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
  );
}
