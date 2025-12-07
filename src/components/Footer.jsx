import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">GridX</div>
        <nav className="footer-nav">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#works">WORKS</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="footer-copyright">
          © All rights reserved by{" "}
          <a href="#" className="footer-link">
            YourPressRiver
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
