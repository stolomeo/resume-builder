import { Checkbox, FormControlLabel } from "@mui/material";

export default function MarketingCheckbox() {
  return (
    <FormControlLabel
      control={<Checkbox value="allowExtraEmails" color="primary" />}
      label="I want to receive inspiration, marketing promotions and updates via email."
    />
  );
}
