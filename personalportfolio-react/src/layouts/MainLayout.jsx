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

      {/* Theme-Aware Background with Gradient Orbs and Noise */}
      <div
        id="gradientBackground"
        className="image-background"
        data-speed="0.4"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: theme === "dark" ? "#000000" : "#f8f9fa",
          zIndex: -1,
          overflow: "hidden",
          transition: "background 0.3s ease",
        }}
      >
        {/* Gradient Orbs - Theme Aware */}
        {theme === "dark" ? (
          <>
            {/* Dark Mode Orbs */}
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "-15%",
                width: "800px",
                height: "800px",
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 1) 0%, rgba(59, 130, 246, 0.8) 20%, rgba(59, 130, 246, 0.4) 40%, transparent 70%)",
                filter: "blur(60px)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "65%",
                left: "8%",
                width: "700px",
                height: "700px",
                background:
                  "radial-gradient(circle, rgba(251, 146, 60, 1) 0%, rgba(251, 146, 60, 0.8) 20%, rgba(251, 146, 60, 0.5) 40%, transparent 70%)",
                filter: "blur(60px)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "5%",
                right: "0%",
                width: "750px",
                height: "750px",
                background:
                  "radial-gradient(circle, rgba(234, 179, 8, 1) 0%, rgba(234, 179, 8, 0.8) 20%, rgba(234, 179, 8, 0.5) 40%, transparent 70%)",
                filter: "blur(60px)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "35%",
                left: "45%",
                width: "600px",
                height: "600px",
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(168, 85, 247, 0.6) 30%, rgba(168, 85, 247, 0.3) 50%, transparent 70%)",
                filter: "blur(60px)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            ></div>
          </>
        ) : (
          <>
            {/* Light Mode Orbs - Vibrant & Visible */}
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "-15%",
                width: "800px",
                height: "800px",
                background:
                  "radial-gradient(circle, rgba(96, 165, 250, 1) 0%, rgba(96, 165, 250, 0.8) 20%, rgba(96, 165, 250, 0.5) 40%, transparent 70%)",
                filter: "blur(50px)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "65%",
                left: "8%",
                width: "700px",
                height: "700px",
                background:
                  "radial-gradient(circle, rgba(251, 113, 133, 1) 0%, rgba(251, 113, 133, 0.8) 20%, rgba(251, 113, 133, 0.5) 40%, transparent 70%)",
                filter: "blur(50px)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "5%",
                right: "0%",
                width: "750px",
                height: "750px",
                background:
                  "radial-gradient(circle, rgba(250, 204, 21, 1) 0%, rgba(250, 204, 21, 0.8) 20%, rgba(250, 204, 21, 0.5) 40%, transparent 70%)",
                filter: "blur(50px)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "35%",
                left: "45%",
                width: "600px",
                height: "600px",
                background:
                  "radial-gradient(circle, rgba(192, 132, 252, 1) 0%, rgba(192, 132, 252, 0.8) 30%, rgba(192, 132, 252, 0.5) 50%, transparent 70%)",
                filter: "blur(50px)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            ></div>
          </>
        )}

        {/* Noise Texture Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: theme === "dark" ? 0.15 : 0.08,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            zIndex: 2,
          }}
        ></div>
      </div>

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
