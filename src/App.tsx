import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import { GlobalStyle, Theme } from "./theme/";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
