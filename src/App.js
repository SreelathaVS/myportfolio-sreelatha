import React from "react";

import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contacts.js";
import Certifications from "./pages/Certifications.js";
import TaskManager from "./components/projects/task-manager/TaskManager.js";
import Calculator from "./components/projects/calculator/Calculator.js";
import Tindog from "./components/projects/Tindog.js";
import Dicee from "./components/projects/Dicee.js";
import Drumkit from "./components/projects/Drumkit.js";
import Simon from "./components/projects/Simon.js";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/certifications" element={<Certifications />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contactme" element={<Contacts />} />
//         <Route path="/taskmanager" element={<TaskManager />} />
//         <Route path="/calculator" element={<Calculator />} />
//         <Route path="/tindog" element={<Tindog />} />
//         <Route path="/simon" element={<Simon />} />
//         <Route path="/drumkit" element={<Drumkit />} />
//         <Route path="/dicee" element={<Dicee />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import other components

function App() {
  return (
    <Router basename="/myportfolio-sreelatha">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactme" element={<Contacts />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/tindog" element={<Tindog />} />
          <Route path="/simon" element={<Simon />} />
          <Route path="/drumkit" element={<Drumkit />} />
          <Route path="/dicee" element={<Dicee />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
