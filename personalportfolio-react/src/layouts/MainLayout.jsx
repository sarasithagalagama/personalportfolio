import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Header from "../components/Header";
import Avatar from "../components/Avatar";

const MainLayout = () => {
  const { theme, toggleTheme } = useTheme();

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
