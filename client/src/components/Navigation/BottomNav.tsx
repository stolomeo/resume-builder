import { AppBar, Box, Button, LinearProgress, Toolbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function BottomNav({ count, setCount }: Props) {
  const handleNext = () => {
    if (count === 100) return;
    setCount(count + 20);
  };
  const handlePrev = () => {
    if (count === 20) return;
    setCount(count - 20);
  };
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        top: "auto",
        bottom: 0,
        "@media print": {
          display: "none",
        },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <Button variant="outlined" onClick={handlePrev}>
          "Prev"
        </Button>
        <Box sx={{ width: "25%" }}>
          <LinearProgress variant="determinate" value={count} />
        </Box>
        <Button variant="outlined" onClick={handleNext}>
          "Next"
        </Button>
      </Toolbar>
    </AppBar>
  );
}
