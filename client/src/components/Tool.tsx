import {
  CloudUpload,
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
import { createResume, getExampleResume } from "../services/resume";
import { emptyResume } from "../utils";

type Props = {
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Tool({ setCount }: Props) {
  const { resume, setResume } = useContext(ResumeContext);

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

  const handleSave = async () => {
    await createResume(resume);
  };

  return (
    <Box sx={{ zIndex: -1 }}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{
            gap: "1rem",
            display: "flex",
            justifyContent: "center",
            bgcolor: `background.default`,
          }}
        >
          <IconButton size="medium" onClick={handleReset}>
            <RestartAlt fontSize="medium" />
          </IconButton>
          <IconButton size="medium" onClick={handleSave}>
            <CloudUpload fontSize="medium" />
          </IconButton>
          <IconButton size="medium" onClick={handlePrint}>
            <PictureAsPdf fontSize="medium" />
          </IconButton>
          <IconButton size="medium" onClick={handleExample}>
            <SettingsAccessibility fontSize="medium" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
