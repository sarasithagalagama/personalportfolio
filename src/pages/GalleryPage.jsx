import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { galleryData } from "../data/galleryData";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledGallery, setShuffledGallery] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fisher-Yates Shuffle
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    setShuffledGallery(shuffleArray(galleryData));
  }, []);

  const initialCount = 8;
  const displayedImages = !showAll
    ? shuffledGallery.slice(0, initialCount)
    : shuffledGallery;

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setActiveIndex(index);
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (e, direction) => {
    e.stopPropagation();
    const newIndex =
      (activeIndex + direction + displayedImages.length) %
      displayedImages.length;
    setSelectedImage(displayedImages[newIndex]);
    setActiveIndex(newIndex);
  };

  return (
    <>
      <style>
        {`
          .gallery-masonry {
            column-count: 1;
            column-gap: 20px;
            padding: 40px 0 20px;
          }

          @media (min-width: 576px) {
            .gallery-masonry { column-count: 2; }
          }
          @media (min-width: 992px) {
            .gallery-masonry { column-count: 3; }
          }
          @media (min-width: 1200px) {
            .gallery-masonry { column-count: 4; }
          }

          .gallery-item {
            break-inside: avoid;
            margin-bottom: 20px;
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            background: #1a1a1a;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .gallery-item:hover {
            transform: translateY(-10px);
            border-color: var(--primary-color);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          }

          .gallery-item img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .gallery-item:hover img {
            transform: scale(1.08);
          }

          .gallery-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 25px;
            opacity: 0;
            transition: all 0.4s ease;
          }

          .gallery-item:hover .gallery-overlay {
            opacity: 1;
          }

          .gallery-overlay h4 {
            color: #fff;
            margin: 0;
            font-size: 18px;
            transform: translateY(10px);
            transition: transform 0.4s ease;
          }

          .gallery-overlay span {
            color: var(--primary-color);
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }

          .gallery-item:hover .gallery-overlay h4 {
            transform: translateY(0);
          }

          /* Enhanced Lightbox */
          .lb-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.95);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(15px);
            padding: 20px;
          }

          .lb-container {
            position: relative;
            max-width: 100%;
            max-height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .lb-img {
            max-width: 90vw;
            max-height: 85vh;
            object-fit: contain;
            border-radius: 10px;
            box-shadow: 0 0 50px rgba(0,0,0,0.5);
          }

          .lb-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 24px;
          }

          .lb-nav:hover {
            background: var(--primary-color);
            border-color: var(--primary-color);
          }

          .lb-prev { left: -70px; }
          .lb-next { right: -70px; }

          @media (max-width: 1100px) {
            .lb-prev { left: 10px; }
            .lb-next { right: 10px; }
            .lb-nav { background: rgba(0,0,0,0.5); }
          }

          .lb-close {
            position: absolute;
            top: -60px;
            right: 0;
            color: white;
            font-size: 30px;
            background: none;
            border: none;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .lb-close:hover { color: var(--primary-color); }
        `}
      </style>

      {/* START GALLERY HEADER AREA */}
      <section className="projects-area innerpage-single-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <h2>Creative Visuals</h2>
                  <p>A collection of my graphic design and artistic works.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="gallery-section wow fadeInUp delay-0-3s">
        <div className="container">
          <div className="gallery-masonry">
            {displayedImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-overlay">
                  <span>{image.category || "Design"}</span>
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {shuffledGallery.length > initialCount && (
            <div className="row">
              <div className="col-lg-12 text-center mt-20 mb-60">
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
      </section>

      {shuffledGallery.length === 0 && (
        <div className="container text-center py-5">
          <h3>No images found</h3>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lb-overlay" onClick={closeLightbox}>
          <div className="lb-container" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={closeLightbox}>
              <i className="ri-close-line"></i>
            </button>

            <button
              className="lb-nav lb-prev"
              onClick={(e) => navigateLightbox(e, -1)}
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="lb-img"
            />

            <button
              className="lb-nav lb-next"
              onClick={(e) => navigateLightbox(e, 1)}
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>

            <div
              style={{
                position: "absolute",
                bottom: "-40px",
                left: "0",
                color: "white",
                fontSize: "14px",
              }}
            >
              {activeIndex + 1} / {displayedImages.length} -{" "}
              {selectedImage.title}
            </div>
          </div>
        </div>
      )}

      {/* START CALL TO ACTION DESIGN AREA */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                <h2>Ready to kickstart something awesome?</h2>
                <p>
                  Let’s turn your ideas into clean visuals and working
                  products—from brand graphics to thoughtful UI/UX and full web
                  experiences.
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
