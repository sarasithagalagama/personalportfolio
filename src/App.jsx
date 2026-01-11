import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import GalleryPage from "./pages/GalleryPage";

import { Analytics } from "@vercel/analytics/react";

import WhatsAppBtn from "./components/WhatsAppBtn";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <WhatsAppBtn />
      <Header />
      <Routes>
        {/* Assuming Home and AboutPage routes were present before the snippet */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/single-project/:id" element={<SingleProjectPage />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
