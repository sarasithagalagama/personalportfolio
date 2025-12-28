import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  /* Theme state removed */
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Theme toggle useEffect removed */

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
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation onepage clearfix">
                    <li>
                      <Link className="nav-link-click" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link-click" to="/about">
                        about
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link-click" to="/services">
                        services
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link-click" to="/works">
                        works
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link-click" to="/contact">
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
