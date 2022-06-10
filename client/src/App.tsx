import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Header /> */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Create />} />
        <Route path="register" element={<Register />} />
        {/* <Login /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
