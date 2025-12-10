import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FullStackProjects from "./pages/FullStackProjects";
import UIUXDesigns from "./pages/UIUXDesigns";
import WebTools from "./pages/WebTools";
import FreelanceProjects from "./pages/FreelanceProjects";
import GraphicDesign from "./pages/GraphicDesign";
import ProjectDetail from "./pages/ProjectDetail";
import "./styles/main.css";
import "./styles/responsive-fixes.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="fullstack-projects" element={<FullStackProjects />} />
          <Route path="uiux-designs" element={<UIUXDesigns />} />
          <Route path="web-tools" element={<WebTools />} />
          <Route path="freelance-projects" element={<FreelanceProjects />} />
          <Route path="graphic-design" element={<GraphicDesign />} />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
