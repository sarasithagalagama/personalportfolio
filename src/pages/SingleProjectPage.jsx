import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const SingleProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(-1); // -1 means closed
  const [isFit, setIsFit] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Reset zoom when changing images
  useEffect(() => {
    setIsFit(true);
    setZoomLevel(100);
  }, [lightboxIndex]);

  if (!project) {
    return (
      <div className="container pt-100 pb-100 text-center">
        <h2>Project Not Found</h2>
        <Link to="/works" className="theme-btn mt-20">
          Back to Works
        </Link>
      </div>
    );
  }

  // Find next project index to cycle through
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const nextProjectIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  // --- Lightbox Handlers ---

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling bg
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
    setIsFit(true);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (project.images && lightboxIndex < project.images.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const toggleFit = (e) => {
    e.stopPropagation();
    setIsFit(!isFit);
    setZoomLevel(100); // Reset to 100% width when toggling
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setIsFit(false);
    setZoomLevel((prev) => Math.min(prev + 25, 300));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setIsFit(false);
    setZoomLevel((prev) => Math.max(prev - 25, 25));
  };

  const currentImageSrc =
    lightboxIndex >= 0 && project.images ? project.images[lightboxIndex] : null;

  return (
    <>
      {/* 1. SPLIT HERO SECTION */}
      <section className="single-project-hero-area innerpage-single-area pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-lg-6">
                  <div className="project-hero-content wow fadeInUp delay-0-2s">
                    <span
                      className="sub-title mb-15"
                      style={{
                        color: "var(--primary-color)",
                        fontSize: "16px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        display: "block",
                      }}
                    >
                      {project.category}
                    </span>
                    <h1
                      className="mb-30"
                      style={{
                        fontSize: "52px",
                        lineHeight: "1.1",
                        fontWeight: "700",
                        color: "var(--heading-color)",
                      }}
                    >
                      {project.title}
                    </h1>
                    <p
                      className="mb-40"
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.6",
                        color: "var(--subtitle-color)",
                        maxWidth: "90%",
                      }}
                    >
                      {project.description ||
                        `${project.subTitle} - A comprehensive ${project.category} built with modern technologies.`}
                    </p>

                    {/* Project Stats (Mini Grid) */}
                    <div className="project-stats mb-40 d-flex gap-5">
                      <div>
                        <span
                          className="d-block text-uppercase"
                          style={{
                            fontSize: "12px",
                            letterSpacing: "1px",
                            color: "gray",
                          }}
                        >
                          {project.clientLabel || "Client"}
                        </span>
                        <span style={{ fontWeight: "600", color: "#fff" }}>
                          {project.client}
                        </span>
                      </div>
                      <div>
                        <span
                          className="d-block text-uppercase"
                          style={{
                            fontSize: "12px",
                            letterSpacing: "1px",
                            color: "gray",
                          }}
                        >
                          Duration
                        </span>
                        <span style={{ fontWeight: "600", color: "#fff" }}>
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="project-btns d-flex gap-3">
                      {project.preview && (
                        <a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-btn"
                        >
                          Live Preview <i className="ri-external-link-line"></i>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-btn"
                        >
                          GitHub Repo <i className="ri-github-fill"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="col-lg-6">
                  <div className="project-hero-image wow fadeInUp delay-0-4s mt-50 mt-lg-0">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="img-fluid rounded-4"
                      style={{
                        boxShadow: "-20px 20px 50px rgba(0,0,0,0.5)",
                        border: "1px solid var(--border-color)",
                        transform: "perspective(1000px) rotateY(-5deg)",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform =
                          "perspective(1000px) rotateY(0deg)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform =
                          "perspective(1000px) rotateY(-5deg)")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="single-project-content-area pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Tech Stack Bar */}
              {/* Tech Stack Bar (Conditional) */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="tech-stack-bar mb-80 p-4 border border-dark rounded-3 bg-dark bg-opacity-10 wow fadeInUp delay-0-2s">
                  <h6
                    className="text-center mb-3 text-uppercase text-muted"
                    style={{ fontSize: "12px", letterSpacing: "2px" }}
                  >
                    Tools & Technologies
                  </h6>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-transparent border border-secondary text-light px-3 py-2 fw-normal"
                        style={{ fontSize: "14px" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dynamic Sections */}
              <div className="project-details-content wow fadeInUp delay-0-3s">
                {project.projectSections.map((section, index) => (
                  <div key={index} className="section-block mb-60">
                    <h3
                      className="mb-30"
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "var(--heading-color)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "10px",
                        }}
                      >
                        #
                      </span>
                      {section.title}
                    </h3>

                    <div
                      className="section-body pl-20"
                      style={{
                        borderLeft: "1px solid rgba(255,255,255,0.1)",
                        paddingLeft: "30px",
                      }}
                    >
                      {Array.isArray(section.content) ? (
                        section.content.map((block, bIndex) => {
                          if (
                            typeof block === "string" ||
                            block.type === "paragraph"
                          ) {
                            return (
                              <p
                                key={bIndex}
                                className="mb-20"
                                style={{
                                  fontSize: "18px",
                                  lineHeight: "1.8",
                                  color: "#a0a0a0",
                                }}
                              >
                                {block.text || block}
                              </p>
                            );
                          }
                          if (block.type === "blockquote") {
                            return (
                              <blockquote
                                key={bIndex}
                                className="p-4 my-4 rounded"
                                style={{
                                  background:
                                    "linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 0%, transparent 100%)", // approximate gradient
                                  borderLeft: "4px solid var(--primary-color)",
                                }}
                              >
                                <p
                                  className="mb-0 fst-italic text-light"
                                  style={{ fontSize: "18px" }}
                                >
                                  "{block.text}"
                                </p>
                              </blockquote>
                            );
                          }
                          if (block.type === "list") {
                            return (
                              <ul key={bIndex} className="list-unstyled mb-30">
                                {block.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="mb-15 d-flex align-items-start"
                                    style={{ fontSize: "18px", color: "#ccc" }}
                                  >
                                    <i
                                      className="ri-arrow-right-s-line me-2"
                                      style={{
                                        color: "var(--primary-color)",
                                        marginTop: "3px",
                                      }}
                                    ></i>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            );
                          }
                          if (block.type === "code") {
                            return (
                              <div
                                key={bIndex}
                                className="code-block p-4 rounded-3 mb-30 bg-black border border-dark"
                              >
                                <pre
                                  className="m-0 text-success text-opacity-75 font-monospace"
                                  style={{ fontSize: "14px" }}
                                >
                                  <code>{block.code}</code>
                                </pre>
                              </div>
                            );
                          }
                          return null;
                        })
                      ) : (
                        <p
                          style={{
                            fontSize: "18px",
                            lineHeight: "1.8",
                            color: "#a0a0a0",
                          }}
                        >
                          {section.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Project Gallery */}
                {project.images && project.images.length > 0 && (
                  <div className="project-gallery mb-60 wow fadeInUp delay-0-2s">
                    <h3
                      className="mb-30"
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "var(--heading-color)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "10px",
                        }}
                      >
                        #
                      </span>
                      Project Gallery
                    </h3>
                    <div className="row g-4">
                      {project.images.map((imgSrc, index) => (
                        <div key={index} className="col-md-6">
                          <div
                            className="gallery-item rounded-3 overflow-hidden border border-dark position-relative"
                            onClick={() => openLightbox(index)}
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imgSrc}
                              alt={`Gallery ${index + 1}`}
                              className="img-fluid d-block mx-auto w-100"
                              style={{
                                transition: "transform 0.5s ease",
                                objectFit: "cover",
                                objectPosition: "top", // Show content from top
                                height: "300px", // Fixed height for consistency
                              }}
                              onMouseOver={(e) =>
                                (e.currentTarget.style.transform =
                                  "scale(1.05)")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                              }
                            />
                            <div className="position-absolute bottom-0 start-0 w-100 bg-black bg-opacity-50 text-center py-2 text-white">
                              <small>
                                <i className="ri-zoom-in-line me-1"></i> Click
                                to Zoom
                              </small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share This Project */}
                <div className="project-share pt-60 border-top border-dark mt-60 wow fadeInUp delay-0-2s">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <span className="text-white fw-bold d-block mb-3 mb-lg-0 text-center text-lg-start">
                        Share This Project :
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <div className="social-style-one d-flex gap-3 justify-content-center justify-content-lg-end">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#111",
                            border: "1px solid #333",
                            color: "#fff",
                          }}
                        >
                          <i className="ri-facebook-fill"></i>
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#111",
                            border: "1px solid #333",
                            color: "#fff",
                          }}
                        >
                          <i className="ri-twitter-x-line"></i>
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#111",
                            border: "1px solid #333",
                            color: "#fff",
                          }}
                        >
                          <i className="ri-linkedin-fill"></i>
                        </a>
                        <a
                          href={`https://wa.me/?text=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#111",
                            border: "1px solid #333",
                            color: "#fff",
                          }}
                        >
                          <i className="ri-whatsapp-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT NAV */}
      <section className="next-project-area pb-100 text-center">
        <div className="container">
          <hr className="mb-80 opacity-25" />
          <span
            className="sub-title mb-15 d-block"
            style={{ color: "var(--primary-color)" }}
          >
            Next Project
          </span>
          <h2 className="mb-40 text-white">{nextProject.title}</h2>
          <Link to={`/single-project/${nextProject.id}`} className="theme-btn">
            View Case Study <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      {/* Native Resolution Lightbox Modal */}
      {currentImageSrc && (
        <div
          className="lightbox-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            zIndex: 9999,
            display: !isFit ? "block" : "flex",
            justifyContent: !isFit ? "flex-start" : "center",
            alignItems: !isFit ? "flex-start" : "center",
            overflow: !isFit ? "auto" : "hidden",
          }}
          onClick={closeLightbox}
        >
          {/* Controls */}
          <div
            className="lightbox-controls"
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              zIndex: 10002,
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zoom Controls */}
            {!isFit && (
              <>
                <button
                  onClick={handleZoomOut}
                  className="btn btn-sm btn-outline-light rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                  title="Zoom Out"
                >
                  <i className="ri-subtract-line"></i>
                </button>
                <span
                  className="text-white fw-bold"
                  style={{ minWidth: "45px", textAlign: "center" }}
                >
                  {zoomLevel}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="btn btn-sm btn-outline-light rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                  title="Zoom In"
                >
                  <i className="ri-add-line"></i>
                </button>
              </>
            )}

            <button
              onClick={toggleFit}
              className="btn btn-sm btn-outline-light rounded-circle"
              style={{ width: "40px", height: "40px" }}
              title={isFit ? "Zoom 100%" : "Fit to Screen"}
            >
              <i
                className={
                  !isFit ? "ri-fullscreen-exit-line" : "ri-zoom-in-line"
                }
              ></i>
            </button>

            <button
              onClick={closeLightbox}
              className="btn btn-sm btn-danger rounded-circle"
              style={{ width: "40px", height: "40px" }}
              title="Close"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          {/* Navigation (Only visible when Fit to avoid overlap/scrolling) */}
          {isFit && project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: "40px",
                  zIndex: 10001,
                  opacity: lightboxIndex === 0 ? 0.3 : 1,
                  cursor: lightboxIndex === 0 ? "default" : "pointer",
                }}
                disabled={lightboxIndex === 0}
              >
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button
                onClick={nextImage}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: "40px",
                  zIndex: 10001,
                  opacity:
                    lightboxIndex === project.images.length - 1 ? 0.3 : 1,
                  cursor:
                    lightboxIndex === project.images.length - 1
                      ? "default"
                      : "pointer",
                }}
                disabled={lightboxIndex === project.images.length - 1}
              >
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </>
          )}

          {/* Image */}
          <img
            src={currentImageSrc}
            alt="Full view"
            onClick={toggleFit}
            draggable="false"
            style={
              !isFit
                ? {
                    // Zoomed (Adjustable) styles
                    width: `${zoomLevel}%`,
                    height: "auto",
                    maxWidth: "none",
                    maxHeight: "none",
                    margin: "auto",
                    display: "block",
                    cursor: "zoom-out",
                  }
                : {
                    // Fit styles
                    maxWidth: "90%",
                    maxHeight: "90%",
                    objectFit: "contain",
                    cursor: "zoom-in",
                  }
            }
          />

          {/* Instructions (Only when fit) */}
          {isFit && (
            <div
              className="lightbox-instructions position-absolute bottom-0 w-100 text-center pb-3 text-white-50"
              style={{ pointerEvents: "none" }}
            >
              <small>Click image to Zoom (100% Width)</small>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SingleProjectPage;
