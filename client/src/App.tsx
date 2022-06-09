import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Header /> */}
        {/* <Main /> */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Login /> */}
        {/* <Footer /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
