import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./components/signup";
// import About from "./About"
// import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<SignupForm />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
