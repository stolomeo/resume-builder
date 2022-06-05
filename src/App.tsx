import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyle, Theme } from "./theme/";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
