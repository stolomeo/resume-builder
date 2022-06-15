import { Switch } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Link } from "react-router-dom";
import isDarkModeContext from "../context/isDarkModeContext";

export default function Nav() {
  const { isDarkMode, setIsDarkMode } = useContext(isDarkModeContext);

  return (
    <AppBar position="static" sx={{ bgcolor: `background.paper` }}>
      <Toolbar sx={{ height: "8vh" }}>
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
        <Switch onChange={() => setIsDarkMode(!isDarkMode)} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black" }}
        ></Typography>
        <Button variant="outlined" component={Link} to="/login" size="medium">
          Sign in
        </Button>
      </Toolbar>
    </AppBar>
  );
}
