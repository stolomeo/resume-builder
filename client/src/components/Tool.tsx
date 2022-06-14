import {
  PictureAsPdf,
  RestartAlt,
  SettingsAccessibility,
} from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Dispatch, SetStateAction, useContext } from "react";
import ResumeContext from "../context";
import { getExampleResume } from "../services/resume";
import { emptyResume } from "../utils";

type Props = {
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Tool({ setCount }: Props) {
  const { setResume } = useContext(ResumeContext);

  const handleReset = () => {
    setResume(emptyResume);
    setCount(25);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExample = async () => {
    const exampleResume = await getExampleResume();
    setResume(exampleResume);
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", border: "1px solid black" }}
      >
        <Toolbar
          variant="dense"
          sx={{
            gap: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton size="medium" color="inherit" onClick={handleReset}>
            <RestartAlt fontSize="medium" />
          </IconButton>
          <IconButton size="medium" color="inherit" onClick={handlePrint}>
            <PictureAsPdf fontSize="medium" />
          </IconButton>
          <IconButton size="medium" color="inherit" onClick={handleExample}>
            <SettingsAccessibility fontSize="medium" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
