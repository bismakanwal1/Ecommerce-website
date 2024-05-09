import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./components/signup";
import LoginForm from "./components/login";
import ForgetPassword from "./components/forgetPassword";
import ResetPassword from "./components/ResetPassword";
import Home from "./Pages/HomePage/index";
import Header from './components/header/index'
import Footer from './components/footer'
// import About from "./About"
// import Contact from "./Contact"

function App() {
  return (
    <div className="App">
        {/* <Header/> */}
      <Router>
        <Routes>
    
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignupForm />} />
         <Route path="/login" element={<LoginForm />} /> 
         <Route path="/forget-password" element={<ForgetPassword/>} /> 
         <Route path="/reset-password" element={<ResetPassword/>} /> 
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
