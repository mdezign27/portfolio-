import { useState } from "react";
import heroBackground from "../assets/bg.jfif";
import characterArt from "../assets/chararcter.png";
import cameraArt from "../assets/camera.png";
import floatingObjects from "../assets/floating-objects.png";
import cloudArt from "../assets/cloud.png";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <img
          className="hero-background"
          src={heroBackground}
          alt=""
          aria-hidden="true"
        />
        <div className="hero-atmosphere" aria-hidden="true" />

        <header className="site-header">
          <a className="brand" href="#home" aria-label="Manpreet, home">
            MANPREET
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav
            className={`main-navigation ${menuOpen ? "is-open" : ""}`}
            id="main-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-scene">
          <img
            className="hero-cloud-detail"
            src={cloudArt}
            alt=""
            aria-hidden="true"
          />

          <p className="hero-intro">
            Yo I’m <span className="intro-arrow" aria-hidden="true">↘</span>
          </p>

          <h1 className="hero-title" id="hero-title">
            MANPREET
          </h1>

          <img
            className="hero-floating-objects"
            src={floatingObjects}
            alt=""
            aria-hidden="true"
          />

          <img
            className="hero-character"
            src={characterArt}
            alt="Manpreet's illustrated character"
            fetchPriority="high"
          />

          <img
            className="hero-camera"
            src={cameraArt}
            alt=""
            aria-hidden="true"
          />

          <div className="hero-bottom-glow" aria-hidden="true" />
        </div>

        <a className="scroll-cue" href="#about">
          <span>Scroll to explore</span>
          <span className="scroll-cue-arrow" aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="next-section-placeholder" id="about" aria-label="About section coming next">
        <p>01 / NEXT UP</p>
        <h2>ABOUT ME</h2>
        <span>We’ll build this section next.</span>
      </section>
    </main>
  );
}
