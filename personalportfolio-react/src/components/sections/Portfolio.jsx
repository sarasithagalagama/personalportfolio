import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import GalleryItem from "../common/GalleryItem";
import { portfolioItems } from "../../data/portfolioData";

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [view, setView] = useState("categories"); // 'categories' or 'projects'

  const categories = [
    {
      title: "Full Stack Projects",
      image: "/img/portfolio/fullstack-cover.jpg",
    },
    { title: "UI/UX Designs", image: "/img/portfolio/uiux-cover.jpg" },
    { title: "Web Tools", image: "/img/portfolio/webtools-cover.jpg" },
    {
      title: "Freelance Projects",
      image: "/img/portfolio/freelance-cover.jpg",
    },
    { title: "Graphic Design", image: "/img/portfolio/graphic-cover.jpg" },
  ];

  const handleCategoryClick = (categoryTitle) => {
    // Navigate to separate pages for each category
    const routes = {
      "Full Stack Projects": "/fullstack-projects",
      "UI/UX Designs": "/uiux-designs",
      "Web Tools": "/web-tools",
      "Freelance Projects": "/freelance-projects",
      "Graphic Design": "/graphic-design",
    };

    if (routes[categoryTitle]) {
      navigate(routes[categoryTitle]);
    }
  };

  const handleBackClick = () => {
    setActiveCategory(null);
    setView("categories");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const filteredItems = activeCategory
    ? portfolioItems.filter((item) => item.category === activeCategory)
    : [];

  return (
    <section id="portfolio" className="inner inner-first portfolio">
      {view === "categories" ? (
        <>
          <SectionTitle
            subtitle="Portfolio"
            title="Check out my featured projects"
          />
          <div className="content__block section-grid-title">
            <div className="row g-4">
              {categories.map((cat, index) => (
                <div key={index} className="col-12 col-md-6 col-xl-4">
                  <div
                    className="category-card"
                    onClick={() => handleCategoryClick(cat.title)}
                    style={{
                      cursor: "pointer",
                      background: "var(--base-tint)",
                      borderRadius: "var(--_radius-m)",
                      padding: "2rem",
                      height: "100%",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <h4 style={{ marginBottom: "1rem" }}>{cat.title}</h4>
                    {/* Category Cover Image */}
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        background: "#333",
                        borderRadius: "var(--_radius-s)",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <img
                        src={
                          cat.image ||
                          portfolioItems.find((i) => i.category === cat.title)
                            ?.image ||
                          "https://dummyimage.com/600x400/333/666&text=" +
                            cat.title
                        }
                        alt={cat.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Breadcrumb Title */}
          <div className="content__block section-grid-title mb-4">
            <div className="d-flex align-items-center gap-3">
              <button
                onClick={handleBackClick}
                className="btn btn-default"
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "50%",
                  border: "1px solid var(--stroke-elements)",
                }}
              >
                <i className="ph-bold ph-arrow-left"></i>
              </button>
              <h2 className="h2__title mb-0" style={{ fontSize: "2.4rem" }}>
                <span style={{ opacity: 0.5 }}>Work &gt; </span>{" "}
                {activeCategory}
              </h2>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="content__block grid-block">
            <div className="container-fluid px-0 inner__gallery">
              <div
                className="row gx-0 my-gallery"
                itemScope
                itemType="http://schema.org/ImageGallery"
              >
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <GalleryItem
                      key={item.id}
                      item={item}
                      onClick={handleItemClick}
                    />
                  ))
                ) : (
                  <div className="col-12 p-4 text-center">
                    <p>No projects found in this category yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Portfolio;
