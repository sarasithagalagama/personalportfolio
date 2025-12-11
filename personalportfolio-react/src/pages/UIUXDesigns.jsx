import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { portfolioItems } from "../data";

const UIUXDesigns = () => {
  const navigate = useNavigate();

  const uiuxProjects = portfolioItems.filter(
    (item) => item.category === "UI/UX Designs"
  );

  return (
    <section id="uiux-designs" className="inner portfolio">
      <div className="content__block">
        <button
          onClick={() => navigate("/")}
          className="btn btn-default btn-hover btn-hover-accent"
          style={{ marginBottom: "2rem" }}
        >
          <i className="ph-bold ph-arrow-left"></i>
          <span className="btn-caption">Back to Home</span>
        </button>
      </div>

      <div className="content__block block-large">
        <p className="h2__subtitle animate-in-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="13px"
            height="13px"
            viewBox="0 0 13 13"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
            />
          </svg>
          <span>UI/UX Designs</span>
        </p>
        <h2 className="h2__title animate-in-up">
          User Interface & Experience Design
        </h2>
        <p className="h2__text animate-in-up">
          Explore my UI/UX design projects featuring intuitive interfaces,
          user-centered design, and beautiful visual aesthetics.
        </p>
      </div>

      <div className="content__block grid-block">
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-start">
            {uiuxProjects.map((item) => (
              <div
                key={item.id}
                className="col-12 col-sm-6 col-lg-4 grid-item animate-card-2"
              >
                <div className="gallery__item grid-item__inner">
                  <div className="gallery__image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="gallery__overlay">
                    <div className="gallery__content">
                      <h5 className="gallery__title">{item.title}</h5>
                      <p className="gallery__text">{item.description}</p>
                      {item.tags && (
                        <div
                          className="gallery__tags"
                          style={{ marginTop: "1rem" }}
                        >
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              style={{
                                display: "inline-block",
                                padding: "0.3rem 0.8rem",
                                margin: "0.2rem",
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: "0.5rem",
                                fontSize: "1.1rem",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        to={`/project/${item.id}`}
                        className="btn btn-sm btn-default btn-hover btn-hover-accent"
                        style={{ marginTop: "1rem" }}
                      >
                        <span className="btn-caption">View Details</span>
                        <i className="ph-bold ph-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUXDesigns;
