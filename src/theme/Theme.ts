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
  },
  boxShadows: {
    primary: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    button: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    input: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    active: "inset 0px 0px 5px #c1c1c1",
  },
};

export default Theme;
