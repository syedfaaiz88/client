import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout/Layout";
import EmailVerification from "./components/Auth/EmailVerification";
import ForgotPassword from "./components/Auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout element={<LandingPage/>} />}></Route>
        <Route path="/login" element={<Layout element={<Login/>} />}></Route>
        <Route path="/register" element={<Layout element={<Register/>} />}></Route>
        <Route path="/email-verification/" element={<Layout element={<EmailVerification/>} />}></Route>
        <Route path="/forgot-password" element={<Layout element={<ForgotPassword />} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
