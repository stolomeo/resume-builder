import { TextField } from "@mui/material";

type Props = {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

export default function EmailTextField({ setEmail }: Props) {
  return (
    <TextField
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
