import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`main-header ${isFixed ? "fixed-header" : ""}`}>
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            {/* START LOGO DESIGN AREA */}
            <div className="logo-outer">
              <div className="logo">
                <Link to="/">
                  <h2>Sarasitha Galagama</h2>
                </Link>
              </div>
            </div>
            {/* / END LOGO DESIGN AREA */}
            {/* START NAV DESIGN AREA */}
            <div className="nav-outer clearfix mx-auto">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link to="/">
                      <h2>Sarasitha Galagama</h2>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}>
                  <ul className="navigation clearfix">
                    <li>
                      <Link
                        className={`nav-link-click ${
                          location.pathname === "/" ? "active" : ""
                        }`}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link-click ${
                          location.pathname === "/about" ? "active" : ""
                        }`}
                        to="/about"
                      >
                        about
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link-click ${
                          location.pathname === "/works" ? "active" : ""
                        }`}
                        to="/works"
                      >
                        works
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link-click ${
                          location.pathname === "/gallery" ? "active" : ""
                        }`}
                        to="/gallery"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`nav-link-click ${
                          location.pathname === "/contact" ? "active" : ""
                        }`}
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* / END NAV DESIGN AREA */}
            </div>
            <div className="menu-btns d-none d-lg-flex align-items-center">
              <Link to="/contact" className="theme-btn">
                Hire Me <i className="ri-shake-hands-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
