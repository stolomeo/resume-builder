import {
  CloudUpload,
  PictureAsPdf,
  RestartAlt,
  SettingsAccessibility,
} from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Dispatch, SetStateAction, useContext } from "react";
import UserContext from "@context/UserContext";
import { createResume, getExampleResume } from "../../services/resume";
import { blankResume } from "@utils/blankResume";

type Props = {
  setCount: Dispatch<SetStateAction<number>>;
};

export default function AppToolBar({ setCount }: Props) {
  const { user, setUser } = useContext(UserContext);

  const handleReset = () => {
    setUser({
      ...user,
      resume: blankResume,
    });
    setCount(20);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExample = async () => {
    const exampleResume = await getExampleResume();
    setUser({ ...user, resume: exampleResume });
  };

  const handleSave = async () => {
    await createResume(user);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "inherit",
        "@media print": {
          display: "none",
        },
      }}
    >
      <Toolbar
        variant="dense"
        sx={{ gap: "1rem", display: "flex", justifyContent: "center" }}
      >
        <IconButton size="medium" onClick={() => handleReset()}>
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
  );
}
