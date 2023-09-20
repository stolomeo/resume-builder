import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/Navigation/TopNav";
import Template from "./components/Resume/Template/Template";
import UserContext, { blankUser } from "./context/UserContext";
import CreateResumePage from "./pages/CreateResumePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { darkTheme, lightTheme } from "./theme/Theme";
import { UserType } from "./types/user.type";

function App() {
  const [user, setUser] = useState<UserType>(blankUser);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <TopNav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="template" element={<Template />} />
            <Route path="create" element={<CreateResumePage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
