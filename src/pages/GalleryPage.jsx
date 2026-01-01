import React, { useState } from "react";
import { Link } from "react-router-dom";
import { galleryData } from "../data/galleryData";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <style>
        {`
          .masonry-grid {
            column-count: 3;
            column-gap: 24px;
          }
          @media (max-width: 992px) {
            .masonry-grid {
              column-count: 2;
            }
          }
          @media (max-width: 576px) {
            .masonry-grid {
              column-count: 1;
            }
          }
          .masonry-item {
            break-inside: avoid;
            margin-bottom: 24px;
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .masonry-item:hover {
            transform: translateY(-5px);
          }
          .masonry-item img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 12px;
          }
          .masonry-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: flex-end;
            padding: 20px;
          }
          .masonry-item:hover .masonry-overlay {
            opacity: 1;
          }
          .masonry-title {
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            transform: translateY(10px);
            transition: transform 0.3s ease;
          }
          .masonry-item:hover .masonry-title {
            transform: translateY(0);
          }
          
          /* Lightbox */
          .lightbox-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.3s ease;
          }
          .lightbox-content {
            max-width: 90%;
            max-height: 90vh;
            position: relative;
          }
          .lightbox-img {
            max-width: 100%;
            max-height: 90vh;
            border-radius: 4px;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
          }
          .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 30px;
            cursor: pointer;
            background: none;
            border: none;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>

      {/* START GALLERY HEADER AREA */}
      <section className="projects-area innerpage-single-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <h2>Visual Gallery</h2>
                  <p>
                    A collection of high-resolution visuals, concepts, and
                    designs.
                  </p>
                </div>
              </div>
            </div>

            {/* Masonry Grid */}
            <div className="masonry-grid wow fadeInUp delay-0-3s">
              {galleryData.map((image) => (
                <div
                  key={image.id}
                  className="masonry-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.src} alt={image.title} />
                  <div className="masonry-overlay">
                    <div className="masonry-title">{image.title}</div>
                  </div>
                </div>
              ))}
            </div>

            {galleryData.length === 0 && (
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
                  No images found
                </h3>
                <p style={{ color: "var(--text-color)", opacity: 0.8 }}>
                  Try selecting a different category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="ri-close-line"></i>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="lightbox-img"
            />
          </div>
        </div>
      )}

      {/* START CALL TO ACTION DESIGN AREA */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                <h2>Have a vision in mind?</h2>
                <p>
                  I'm always ready to collaborate on new and exciting visual
                  projects.
                </p>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Let's Talk <i className="ri-chat-3-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
