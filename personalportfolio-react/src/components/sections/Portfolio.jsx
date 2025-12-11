import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import { portfolioItems } from "../../data/portfolioData";

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Full Stack Projects",
    "UI/UX Designs",
    "Web Tools",
    "Freelance Projects",
    "Graphic Design",
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems.slice(0, 6) // Show first 6 projects
      : portfolioItems
          .filter((item) => item.category === activeFilter)
          .slice(0, 6);

  const handleProjectClick = (item) => {
    navigate(`/project/${item.id}`);
  };

  return (
    <section id="portfolio" className="inner inner-first portfolio">
      <SectionTitle
        subtitle="Portfolio"
        title="Check out my featured projects"
      />

      {/* Filter Tabs */}
      <div
        className="content__block section-grid-title"
        style={{ marginTop: "0.5rem" }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
            justifyContent: "center",
            padding: "0 1rem",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--_radius-m)",
                border: "1px solid var(--stroke-elements)",
                background:
                  activeFilter === category
                    ? "var(--accent-color)"
                    : "var(--base-tint)",
                color: activeFilter === category ? "#fff" : "var(--text-color)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: activeFilter === category ? "600" : "400",
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== category) {
                  e.currentTarget.style.background = "var(--base-shade)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category) {
                  e.currentTarget.style.background = "var(--base-tint)";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <div
                  className="portfolio-card"
                  style={{
                    background: "var(--base-tint)",
                    borderRadius: "var(--_radius-m)",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onClick={() => handleProjectClick(item)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Project Image */}
                  <div
                    style={{
                      width: "100%",
                      height: "220px",
                      overflow: "hidden",
                      position: "relative",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <img
                      src={
                        item.image ||
                        `https://dummyimage.com/600x400/667eea/ffffff&text=${item.title}`
                      }
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>

                  {/* Project Info */}
                  <div
                    style={{
                      padding: "1.5rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "0.25rem 0.75rem",
                          background: "var(--base-shade)",
                          borderRadius: "var(--_radius-s)",
                          fontSize: "0.75rem",
                          fontWeight: "500",
                          color: "var(--accent-color)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <h4
                      style={{
                        marginBottom: "0.75rem",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        marginBottom: "1.25rem",
                        opacity: 0.75,
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        flex: 1,
                      }}
                    >
                      {item.description?.substring(0, 90)}
                      {item.description?.length > 90 ? "..." : ""}
                    </p>

                    {/* View Project Button */}
                    <button
                      style={{
                        padding: "0.625rem 1.5rem",
                        background: "transparent",
                        color: "var(--accent-color)",
                        border: "1px solid var(--accent-color)",
                        borderRadius: "var(--_radius-s)",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        transition: "all 0.3s ease",
                        alignSelf: "flex-start",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "var(--accent-color)";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--accent-color)";
                      }}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center" style={{ padding: "3rem" }}>
              <p style={{ opacity: 0.7 }}>
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>

        {/* View All Button */}
        {filteredItems.length > 0 && (
          <div
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            <button
              onClick={() => {
                const routes = {
                  "Full Stack Projects": "/fullstack-projects",
                  "UI/UX Designs": "/uiux-designs",
                  "Web Tools": "/web-tools",
                  "Freelance Projects": "/freelance-projects",
                  "Graphic Design": "/graphic-design",
                };
                if (activeFilter !== "All" && routes[activeFilter]) {
                  navigate(routes[activeFilter]);
                }
              }}
              style={{
                padding: "1rem 2.5rem",
                background: "transparent",
                color: "var(--text-color)",
                border: "2px solid var(--stroke-elements)",
                borderRadius: "var(--_radius-m)",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-color)";
                e.currentTarget.style.borderColor = "var(--accent-color)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "var(--stroke-elements)";
                e.currentTarget.style.color = "var(--text-color)";
              }}
            >
              {activeFilter === "All"
                ? "View All Projects"
                : `View All ${activeFilter}`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
