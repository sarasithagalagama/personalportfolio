import Header from "./components/Header";
import Hero from "./components/Hero";
import GridCard from "./components/GridCard";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="about-area">
          <div className="container">
            {/* Row 1: Hero + Marquee */}
            <section className="row">
              <div className="col-md-6">
                <Hero />
              </div>

              <div className="col-md-6">
                <div className="about-credentials-wrap">
                  <div className="banner shadow-box glass card">
                    <div className="marquee">
                      <div className="marquee-content">
                        <span>
                          LATEST WORK AND <strong>FEATURED</strong>{" "}
                          <img src="/assets/images/star1.png" alt="" />{" "}
                        </span>
                        <span>
                          LATEST WORK AND <strong>FEATURED</strong>{" "}
                          <img src="/assets/images/star1.png" alt="" />{" "}
                        </span>
                        <span>
                          LATEST WORK AND <strong>FEATURED</strong>{" "}
                          <img src="/assets/images/star1.png" alt="" />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nested Row: Credentials + Projects */}
                <section className="row mt-24">
                  <div className="col-50">
                    <GridCard
                      subtitle="MORE ABOUT ME"
                      title="Credentials"
                      contentImage="/assets/images/sign.png"
                      href="#credentials"
                    />
                  </div>

                  <div className="col-50">
                    <GridCard
                      subtitle="SHOWCASE"
                      title="Projects"
                      contentImage="/assets/images/my-works.png"
                      href="#projects"
                    />
                  </div>
                </section>
              </div>
            </section>

            {/* Row 2: GFonts + Services + Profiles */}
            <section className="row mt-24">
              <div className="col-25">
                <GridCard
                  subtitle="BLOG"
                  title="GFonts"
                  contentImage="/assets/images/gfonts.png"
                  href="#blog"
                />
              </div>

              <div className="col-50">
                <GridCard
                  subtitle="SPECIALIZATION"
                  title="Services Offering"
                  href="#services"
                >
                  <div className="icon-boxes">
                    <i>📷</i>
                    <i>✏️</i>
                    <i>🎨</i>
                    <i>📱</i>
                  </div>
                </GridCard>
              </div>

              <div className="col-25">
                <GridCard
                  subtitle="STAY WITH ME"
                  title="Profiles"
                  href="#profiles"
                >
                  <div className="inner-profile-icons shadow-box">
                    <a href="#dribbble">🌐</a>
                    <a href="#twitter">🐦</a>
                  </div>
                </GridCard>
              </div>
            </section>

            {/* Row 3: Stats + CTA */}
            <section className="row mt-24">
              <div className="col-md-6">
                <Stats />
              </div>

              <div className="col-md-6">
                <CTA />
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
