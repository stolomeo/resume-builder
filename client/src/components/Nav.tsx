import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#fff", gap: "1rem" }}>
          <IconButton href="/" size="medium" edge="start" color="success">
            <img src="https://i.ibb.co/3yYR00R/logo.png" alt="Website logo" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          ></Typography>
          <Button
            color="primary"
            variant="outlined"
            href="/login"
            size="medium"
          >
            Sign in
          </Button>
          <Button
            color="primary"
            variant="outlined"
            href="/login"
            size="medium"
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
