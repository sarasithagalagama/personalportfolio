import React from "react";
import Intro from "../components/sections/Intro";
import Portfolio from "../components/sections/Portfolio";
import About from "../components/sections/About";
import Resume from "../components/sections/Resume";
import Certifications from "../components/sections/Certifications";
// import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Intro />
      <Portfolio />
      <About />
      <Resume />
      <Certifications />
      {/* <Blog /> */}
      <Contact />
    </>
  );
};

export default Home;
