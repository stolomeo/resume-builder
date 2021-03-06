import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/Navigation/TopNav";
import Template from "./components/Resume/Template/Template";
import UserContext, { blankUser } from "./context/UserContext";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="template" element={<Template />} />
            <Route path="create" element={<Create />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
