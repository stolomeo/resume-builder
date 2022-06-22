import { createTheme } from "@mui/material";
import { blueGrey, grey, purple } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: purple[800],
    },
    background: {
      default: blueGrey[50],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: purple.A200,
    },
    background: {
      default: grey[900],
    },
  },
});
