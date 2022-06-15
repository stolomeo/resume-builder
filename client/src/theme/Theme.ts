import { createTheme } from "@mui/material";
import { blueGrey, grey, purple } from "@mui/material/colors";
import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  colors: {
    background: "#ccc",
    light: "#eee",
    lightHover: "#ccc",
    lightActive: "#aaa",
    dark: "#333",
    darkHover: "#222",
    darkActive: "#111",
  },
  fonts: {
    garamound: "EB Garamond,serif",
    roboto: "Roboto, sans-serif",
    zen: "Zen Tokyo Zoo, cursive",
  },
  boxShadows: {
    primary: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    button: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    input: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    active: "inset 0px 0px 5px #c1c1c1",
  },
};

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
    text: {},
  },
});

export default Theme;
