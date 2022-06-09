import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import { GlobalStyle, Theme } from "./theme/";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {/* <Header /> */}
      {/* <Main /> */}
      <Home />
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
