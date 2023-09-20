import GitHubIcon from "@mui/icons-material/GitHub";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        bgcolor: "rgba(18, 18, 18,0.7)",
        maxHeight: "6vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="body2">Copyright © 2022 stolomeo</Typography>
        <IconButton href="https://github.com/stolomeo" color="inherit">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
