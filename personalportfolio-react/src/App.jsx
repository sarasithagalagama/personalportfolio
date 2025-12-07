import React, { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Avatar from "./components/Avatar";
import Intro from "./components/sections/Intro";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";
import "./styles/main.css";

function App() {
  const { theme, toggleTheme } = useTheme();

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
    <div className="App">
      {/* Loader */}
      <div id="loader" className="loader">
        <div id="loaderContent" className="loader__content">
          <div className="loader__shadow"></div>
          <div className="loader__box"></div>
        </div>
      </div>

      {/* Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Image Background Layer */}
      <div
        id="imageBackground"
        className="image-background"
        data-speed="0.4"
      ></div>

      {/* Avatar Sidebar */}
      <Avatar />

      {/* Page Content */}
      <div id="content" className="content">
        <div className="content__wrapper">
          <Intro />
          <Portfolio />
          <About />
          <Resume />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
