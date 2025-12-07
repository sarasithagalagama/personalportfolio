import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FullStackProjects from "./pages/FullStackProjects";
import "./styles/main.css";
import "./styles/responsive-fixes.css";

function App() {
  // Hide loader after component mounts
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      // Add a small delay to ensure everything is loaded
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }, 500);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="fullstack-projects" element={<FullStackProjects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
