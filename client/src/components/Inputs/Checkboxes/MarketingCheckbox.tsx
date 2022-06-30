import { Checkbox, FormControlLabel } from "@mui/material";

export default function MarketingCheckbox() {
  return (
    <FormControlLabel
      control={<Checkbox value="allowExtraEmails" />}
      label="I want to receive inspiration, marketing promotions and updates via email."
    />
  );
}
