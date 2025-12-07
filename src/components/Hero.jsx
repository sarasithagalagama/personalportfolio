import "./Hero.css";

const Hero = ({
  name = "David Henderson.",
  title = "A WEB DESIGNER",
  description = "I am a Web Designer based in san francisco.",
  imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
}) => {
  return (
    <div className="about-me-box-wrap">
      <div className="about-me-box shadow-box glass card">
        <a className="overlay-link" href="#about"></a>
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />

        <div className="img-box">
          <img className="proj-img" src={imageUrl} alt={name} />
        </div>

        <div className="infos">
          <h5>{title}</h5>
          <h1>{name}</h1>
          <p>{description}</p>
          <a href="#" className="about-btn">
            <img src="/assets/images/icon.png" alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
