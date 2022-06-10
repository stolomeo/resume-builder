import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Header /> */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Main />} />
        <Route path="register" element={<Register />} />
        {/* <Login /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
