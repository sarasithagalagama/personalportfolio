import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const WorksPage = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset showAll when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  const filteredProjects =
    activeFilter === "*"
      ? [...projectsData].sort((a, b) => {
          // Check if projects have "full-stack" in their filterCategory
          const aIsFullStack = Array.isArray(a.filterCategory)
            ? a.filterCategory.includes("full-stack")
            : a.filterCategory === "full-stack";
          const bIsFullStack = Array.isArray(b.filterCategory)
            ? b.filterCategory.includes("full-stack")
            : b.filterCategory === "full-stack";

          // Fullstack projects come first
          if (aIsFullStack && !bIsFullStack) return -1;
          if (!aIsFullStack && bIsFullStack) return 1;
          return 0; // Keep original order for same category
        })
      : projectsData.filter((project) =>
          Array.isArray(project.filterCategory)
            ? project.filterCategory.includes(activeFilter)
            : project.filterCategory === activeFilter
        );

  const initialCount = isMobile ? 2 : 6;
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialCount);

  return (
    <div>
      {/* START PORTFOLIO DESIGN AREA */}
      <section id="portfolio" className="projects-area innerpage-single-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <span className="subtitle">Portfolio</span>
                  <h2>Works & Projects</h2>
                  <p>
                    Check out some of my design projects, meticulously crafted
                    with love and dedication, each one reflecting the passion
                    and soul I poured into every detail.
                  </p>
                </div>
              </div>
            </div>
            <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
              <li
                onClick={() => setActiveFilter("*")}
                className={activeFilter === "*" ? "current" : ""}
              >
                Show All
              </li>
              <li
                onClick={() => setActiveFilter("design-branding")}
                className={activeFilter === "design-branding" ? "current" : ""}
              >
                Design & Branding
              </li>
              <li
                onClick={() => setActiveFilter("ui-ux")}
                className={activeFilter === "ui-ux" ? "current" : ""}
              >
                UI/UX & Web
              </li>
              <li
                onClick={() => setActiveFilter("full-stack")}
                className={activeFilter === "full-stack" ? "current" : ""}
              >
                Full‑Stack Apps
              </li>
              <li
                onClick={() => setActiveFilter("ai-ml")}
                className={activeFilter === "ai-ml" ? "current" : ""}
              >
                AI & ML Projects
              </li>
              <li
                onClick={() => setActiveFilter("dashboards")}
                className={activeFilter === "dashboards" ? "current" : ""}
              >
                Dashboards & Data
              </li>
            </ul>
            <div className="row g-4">
              {displayedProjects.length > 0 ? (
                displayedProjects.map((project) => (
                  <div key={project.id} className="col-lg-4 col-md-6 item">
                    <div className="project-item style-two">
                      <div className="project-image">
                        <Link
                          to={`/single-project/${project.id}`}
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <img src={project.img} alt={project.title} />
                        </Link>
                        <Link
                          to={`/single-project/${project.id}`}
                          className="details-btn"
                        >
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                      <div className="project-content">
                        <Link
                          to={`/single-project/${project.id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <span className="sub-title">{project.subTitle}</span>
                          <h3>{project.title}</h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="col-lg-12 text-center"
                  style={{ padding: "60px 20px" }}
                >
                  <h3
                    style={{
                      color: "var(--heading-color)",
                      marginBottom: "10px",
                    }}
                  >
                    No projects found
                  </h3>
                  <p style={{ color: "var(--text-color)", opacity: 0.8 }}>
                    Try selecting a different category to see more projects.
                  </p>
                </div>
              )}
            </div>
            {filteredProjects.length > initialCount && (
              <div className="row">
                <div className="col-lg-12 text-center mt-60">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="theme-btn"
                  >
                    {showAll ? "Show Less" : "Load More"}{" "}
                    <i
                      className={
                        showAll ? "ri-arrow-up-line" : "ri-arrow-down-line"
                      }
                    ></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* // END PORTFOLIO DESIGN AREA */}

      {/* START CALL TO ACTION DESIGN AREA */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-12">
              <div className="about-content-part call-to-action-part wow fadeInUp delay-0-2s text-center">
                <h2>Ready to kickstart something awesome?</h2>
                <p>
                  Let’s turn your ideas into clean visuals and working
                  products—from brand graphics to thoughtful UI/UX and full web
                  experiences. I’m open to freelance, part‑time, and full‑time
                  roles where I can blend creative design, UI/UX, and full‑stack
                  development to build things that actually work for users and
                  businesses.
                </p>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Let's Talk <i className="ri-chat-3-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* / END ABOUT TEXT DESIGN AREA */}
          </div>
        </div>
      </section>
      {/*  // END CALL TO ACTION DESIGN AREA */}
    </div>
  );
};

export default WorksPage;
