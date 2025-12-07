import "./CTA.css";

const CTA = () => {
  return (
    <div className="about-contact-box-wrap">
      <div className="about-contact-box info-box shadow-box glass card h-full">
        <a className="overlay-link" href="#contact"></a>
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
        <img src="/assets/images/icon2.png" alt="Star" className="star-icon" />

        <h2>
          Let's
          <br />
          work <span>together.</span>
        </h2>

        <a href="#contact" className="about-btn">
          <img src="/assets/images/icon.png" alt="Arrow" />
        </a>
      </div>
    </div>
  );
};

export default CTA;
