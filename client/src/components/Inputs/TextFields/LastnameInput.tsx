import { TextField } from "@mui/material";

type Props = {
  setLastname: (value: React.SetStateAction<string>) => void;
};
export default function LastnameInput({ setLastname }: Props) {
  return (
    <TextField
      required
      fullWidth
      id="lastName"
      label="Last Name"
      name="lastName"
      autoComplete="family-name"
      onChange={(e) => setLastname(e.target.value)}
    />
  );
}
