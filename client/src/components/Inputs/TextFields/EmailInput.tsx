import { TextField } from "@mui/material";

type Props = {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

export default function Email({ setEmail }: Props) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}
