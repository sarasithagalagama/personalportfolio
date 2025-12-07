import React from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const Header = ({ theme, toggleTheme }) => {
  const activeSection = useScrollSpy([
    "home",
    "portfolio",
    "about",
    "resume",
    "contact",
  ]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header" className="header d-flex justify-content-between">
      {/* Navigation Menu */}
      <div className="header__navigation">
        <nav id="menu" className="menu">
          <ul className="menu__list d-flex justify-content-start">
            <li className="menu__item">
              <a
                className={`menu__link btn ${
                  activeSection === "home" ? "active" : ""
                }`}
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
              >
                <span className="menu__caption">Home</span>
                <i className="ph-bold ph-house-simple"></i>
              </a>
            </li>
            <li className="menu__item">
              <a
                className={`menu__link btn ${
                  activeSection === "portfolio" ? "active" : ""
                }`}
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
              >
                <span className="menu__caption">Portfolio</span>
                <i className="ph-bold ph-squares-four"></i>
              </a>
            </li>
            <li className="menu__item">
              <a
                className={`menu__link btn ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
              >
                <span className="menu__caption">About Me</span>
                <i className="ph-bold ph-user"></i>
              </a>
            </li>
            <li className="menu__item">
              <a
                className={`menu__link btn ${
                  activeSection === "resume" ? "active" : ""
                }`}
                href="#resume"
                onClick={(e) => handleNavClick(e, "resume")}
              >
                <span className="menu__caption">Resume</span>
                <i className="ph-bold ph-article"></i>
              </a>
            </li>
            <li className="menu__item">
              <a
                className={`menu__link btn ${
                  activeSection === "contact" ? "active" : ""
                }`}
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                <span className="menu__caption">Contact</span>
                <i className="ph-bold ph-envelope"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Header Controls */}
      <div className="header__controls d-flex justify-content-end">
        <button
          id="color-switcher"
          className="color-switcher header__switcher btn"
          type="button"
          role="switch"
          aria-label="light/dark mode"
          aria-checked={theme === "dark"}
          onClick={toggleTheme}
        >
          <em></em>
          {theme === "dark" ? (
            <i className="ph-bold ph-sun"></i>
          ) : (
            <i className="ph-bold ph-moon-stars"></i>
          )}
        </button>
        <a
          id="notify-trigger"
          className="header__trigger btn"
          href="mailto:example@example.com?subject=Message%20from%20your%20site"
        >
          <span className="trigger__caption">Let's Talk</span>
          <i className="ph-bold ph-chat-dots"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
