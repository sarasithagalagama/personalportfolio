import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { galleryData } from "../data/galleryData";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledGallery, setShuffledGallery] = useState([]);

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

  // Close lightbox
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <style>
        {`
          .gallery-container {
            padding: 40px 0 80px;
            overflow: hidden;
            position: relative;
          }

          .swiper-gallery {
            width: 100%;
            padding: 40px 0;
          }

          /* Smooth continuous linear motion */
          .swiper-wrapper {
            transition-timing-function: linear !important;
          }

          .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 280px; /* Mobile width */
            height: 400px;
            border-radius: 20px;
            /* Glassmorphism backing */
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .gallery-img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
            pointer-events: none; /* Let the slide click handle it */
          }

          /* Active slide styling enhancement */
          .swiper-slide-active {
            border: 1px solid var(--primary-color);
            box-shadow: 0 0 30px rgba(235, 93, 58, 0.4);
          }

          /* Desktop Override */
          @media (min-width: 768px) {
            .swiper-slide {
              width: 500px;
              height: 600px;
            }
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
            backdrop-filter: blur(10px);
          }
          .lightbox-content {
            max-width: 90%;
            max-height: 90vh;
            position: relative;
            animation: zoomIn 0.3s ease;
          }
          .lightbox-img {
            max-width: 100%;
            max-height: 90vh;
            border-radius: 8px;
            box-shadow: 0 0 50px rgba(0,0,0,0.5);
          }
          .lightbox-close {
            position: absolute;
            top: -50px;
            right: 0;
            color: white;
            font-size: 30px;
            cursor: pointer;
            background: rgba(255,255,255,0.1);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }
          .lightbox-close:hover {
            background: var(--primary-color);
            transform: rotate(90deg);
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoomIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      {/* START GALLERY HEADER AREA */}
      <section
        className="projects-area innerpage-single-area"
        style={{ paddingBottom: "0", paddingTop: "150px" }}
      >
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <h2>Visual Gallery</h2>
                  <p>Swipe through to explore the collection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERFLOW GALLERY */}
      <section className="gallery-container wow fadeInUp delay-0-3s">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          mousewheel={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCoverflow, Mousewheel, Autoplay]}
          className="swiper-gallery"
        >
          {shuffledGallery.map((image) => (
            <SwiperSlide key={image.id} onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.title} className="gallery-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {shuffledGallery.length === 0 && (
        <div className="container text-center py-5">
          <h3>No images found</h3>
        </div>
      )}

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
