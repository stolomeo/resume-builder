import { Button } from "@mui/material";

type Props = {
  text: string;
  handleChange: () => void;
};

export default function BottomNavButton({ text, handleChange }: Props) {
  return (
    <Button variant="outlined" onClick={handleChange}>
      {text}
    </Button>
  );
}
