import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Header from "../components/Header";
import Avatar from "../components/Avatar";

const MainLayout = () => {
  const { theme, toggleTheme } = useTheme();

  // Hide loader after component mounts
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (loader) {
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
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
