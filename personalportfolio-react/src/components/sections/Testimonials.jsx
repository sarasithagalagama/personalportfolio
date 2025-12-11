import React, { useState, useEffect } from "react";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`ph-fill ph-star`}
        style={{
          color: index < rating ? "#FFB800" : "#444",
          fontSize: "1.4rem",
        }}
      ></i>
    ));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <div
      className="content__block block-large"
      style={{ marginBottom: "1rem" }}
    >
      <div
        className="testimonials-slider"
        style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Slider Container */}
        <div
          className="testimonial-card animate-in-up"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--stroke-elements)",
            borderRadius: "1.5rem",
            padding: "3rem",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.4rem",
                fontWeight: "700",
                color: "var(--t-opp-bright)",
                flexShrink: 0,
              }}
            >
              {testimonial.name.charAt(0).toUpperCase()}
            </div>
            <div style={{ flex: 1 }}>
              <h5
                style={{
                  fontSize: "1.8rem",
                  color: "var(--t-accent)",
                  marginBottom: "0.5rem",
                  fontWeight: "600",
                }}
              >
                {testimonial.name}
              </h5>
              <p
                style={{
                  fontSize: "1.3rem",
                  color: "var(--t-muted)",
                  margin: 0,
                }}
              >
                {testimonial.country}
              </p>
            </div>
            {/* Rating */}
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  display: "flex",
                  gap: "0.2rem",
                  marginBottom: "0.3rem",
                }}
              >
                {renderStars(testimonial.rating)}
              </div>
              <span
                style={{
                  fontSize: "1.2rem",
                  color: "var(--t-muted)",
                }}
              >
                {testimonial.timeAgo}
              </span>
            </div>
          </div>

          {/* Review */}
          <p
            style={{
              fontSize: "1.6rem",
              lineHeight: "1.7",
              color: "var(--t-medium)",
              marginBottom: "2rem",
              fontStyle: "italic",
              minHeight: "80px",
            }}
          >
            "{testimonial.review}"
          </p>

          {/* Project Details */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--stroke-elements)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--t-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                Price
              </p>
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "var(--t-accent)",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                {testimonial.price}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--t-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                Duration
              </p>
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "var(--t-accent)",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                {testimonial.duration}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--t-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                Project
              </p>
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "var(--t-accent)",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                {testimonial.project}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="slider-arrow slider-arrow-left"
          style={{
            position: "absolute",
            left: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid var(--stroke-elements)",
            background: "var(--bg-card)",
            color: "var(--t-accent)",
            fontSize: "2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "var(--t-opp-bright)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--bg-card)";
            e.currentTarget.style.color = "var(--t-accent)";
          }}
        >
          <i className="ph-bold ph-caret-left"></i>
        </button>

        <button
          onClick={nextSlide}
          className="slider-arrow slider-arrow-right"
          style={{
            position: "absolute",
            right: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid var(--stroke-elements)",
            background: "var(--bg-card)",
            color: "var(--t-accent)",
            fontSize: "2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "var(--t-opp-bright)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--bg-card)";
            e.currentTarget.style.color = "var(--t-accent)";
          }}
        >
          <i className="ph-bold ph-caret-right"></i>
        </button>

        {/* Dots Indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.8rem",
            marginTop: "2rem",
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: index === currentIndex ? "30px" : "10px",
                height: "10px",
                borderRadius: "5px",
                border: "none",
                background:
                  index === currentIndex
                    ? "var(--accent)"
                    : "var(--stroke-elements)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
