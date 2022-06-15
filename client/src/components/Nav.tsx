import { Switch } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export default function Nav({ isDarkMode, setIsDarkMode }: Props) {
  return (
    <AppBar position="static" sx={{ bgcolor: `background.paper` }}>
      <Toolbar sx={{ height: "8vh" }}>
        <IconButton href="/" size="medium" edge="start" color="inherit">
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
        <Button variant="outlined" href="/login" size="medium">
          Sign in
        </Button>
        <Button variant="outlined" href="/login" size="medium">
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
}
