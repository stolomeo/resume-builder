import { Checkbox, FormControlLabel } from "@mui/material";

export default function RememberMeCheckbox() {
  return (
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
  );
}
