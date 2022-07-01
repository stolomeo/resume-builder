import GitHubIcon from "@mui/icons-material/GitHub";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { footerAppBar, footerToolBar } from "../../styles";

export default function Footer() {
  return (
    <AppBar position="fixed" sx={footerAppBar}>
      <Toolbar sx={footerToolBar}>
        <Typography variant="body2">Copyright © 2022 stolomeo</Typography>
        <IconButton href="https://github.com/stolomeo" color="inherit">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
