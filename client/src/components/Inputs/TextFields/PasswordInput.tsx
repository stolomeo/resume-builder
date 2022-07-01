import { TextField } from "@mui/material";

type Props = {
  margin: "none" | "dense" | "normal" | undefined;
};

export default function PasswordInput({ margin }: Props) {
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
    />
  );
}
