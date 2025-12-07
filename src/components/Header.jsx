import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">GridX</div>
        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#works" className="nav-link">
            Works
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
        <button className="btn-primary">Let's talk</button>
      </div>
    </header>
  );
};

export default Header;
