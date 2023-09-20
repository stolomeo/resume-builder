import { TextField } from "@mui/material";

type Props = {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  margin: "none" | "dense" | "normal" | undefined;
};

export default function PasswordTextField({ setPassword, margin }: Props) {
  return (
    <TextField
      margin={margin}
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}
