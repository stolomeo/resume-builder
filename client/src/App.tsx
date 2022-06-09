import { ThemeProvider } from "styled-components";
import Signup from "./components/Signup";
import { GlobalStyle, Theme } from "./theme/";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {/* <Header /> */}
      {/* <Main /> */}
      <Signup />
      {/* <Login /> */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
