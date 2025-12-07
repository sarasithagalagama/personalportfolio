import "./GridCard.css";

const GridCard = ({
  title,
  subtitle,
  icon,
  image,
  contentImage,
  children,
  className = "",
  href = "#",
}) => {
  return (
    <div className={`info-box shadow-box glass card h-full ${className}`}>
      <a className="overlay-link" href={href}></a>
      <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />

      {contentImage && (
        <img className="proj-img" src={contentImage} alt={title} />
      )}

      {icon && <div className="icon-content">{icon}</div>}
      {image && (
        <div className="grid-card-image">
          <img src={image} alt={title} />
        </div>
      )}
      {children}

      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          {subtitle && <h5>{subtitle}</h5>}
          <h2>{title}</h2>
        </div>
        <a href={href} className="about-btn">
          <img src="/assets/images/icon.png" alt="Arrow" />
        </a>
      </div>
    </div>
  );
};

export default GridCard;
