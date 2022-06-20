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
import UserContext from "../context/UserContext";
import { createResume, getExampleResume } from "../services/resume";
import emptyDevResume from "../utils/emptyDevResume";

type Props = {
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Tool({ setCount }: Props) {
  const { user, setUser } = useContext(UserContext);

  const handleReset = () => {
    let resume = user.resume;
    resume = emptyDevResume;
    setUser({ ...user, resume: resume });
    setCount(20);
  };

  console.log(user.resume);

  const handlePrint = () => {
    window.print();
  };

  const handleExample = async () => {
    const exampleResume = await getExampleResume();
    setUser(exampleResume);
  };

  const handleSave = async () => {
    await createResume(user);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "inherit" }}>
      <Toolbar
        variant="dense"
        sx={{
          gap: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton size="medium" onClick={() => handleReset}>
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
