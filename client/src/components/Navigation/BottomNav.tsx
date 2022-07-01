import { AppBar, Box, LinearProgress, Toolbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import {
  bottomNavAppBar,
  bottomNavToolBar,
} from "../../styles/Navigation/bottomNav.style";
import BottomNavButton from "../Buttons/BottomNavButton";

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
    <AppBar position="fixed" color="inherit" sx={bottomNavAppBar}>
      <Toolbar sx={bottomNavToolBar}>
        <BottomNavButton text="Prev" handleChange={handlePrev} />
        <Box sx={{ width: "25%" }}>
          <LinearProgress variant="determinate" value={count} />
        </Box>
        <BottomNavButton text="Next" handleChange={handleNext} />
      </Toolbar>
    </AppBar>
  );
}
