import { DarkMode, LightMode } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TopNav({ isDarkMode, setIsDarkMode }: Props) {
  const { user } = useContext(UserContext);

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: `background.paper`,
        "@media print": {
          display: "none",
        },
      }}
    >
      <Toolbar sx={{ height: "8vh", gap: 2 }}>
        <IconButton
          component={Link}
          to="/"
          size="medium"
          edge="start"
          color="inherit"
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{ color: `text.primary` }}
          >
            ezcv.app
          </Typography>
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black" }}
        ></Typography>
        <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode && <LightMode />}
          {!isDarkMode && <DarkMode />}
        </IconButton>

        <Button variant="outlined" component={Link} to="/login" size="medium">
          {user.email === "" ? "Sign In" : "Sign Out"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
