import { Checkbox, FormControlLabel } from "@mui/material";

type Props = {
  [name: string]: string;
};

export default function LoginCheckbox({ value, label }: Props) {
  return (
    <FormControlLabel control={<Checkbox value={value} />} label={label} />
  );
}
