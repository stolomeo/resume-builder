import { TextField } from "@mui/material";

type Props = {
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
};

export default function FirstnameInput({ setFirstname }: Props) {
  return (
    <TextField
      autoComplete="given-name"
      name="firstName"
      required
      fullWidth
      id="firstName"
      label="First Name"
      autoFocus
      onChange={(e) => setFirstname(e.target.value)}
    />
  );
}
