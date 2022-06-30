import { Button } from "@mui/material";

type Props = {
  text: string;
};

export default function LoginButton({ text }: Props) {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      {text}
    </Button>
  );
}
