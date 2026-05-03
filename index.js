import React, { useState } from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

import img1 from "./assets/profile.jpg";
import img2 from "./assets/profile2.jpg";
import img3 from "./assets/profile3.jpg";

import cv from "./assets/cv.pdf";

export default function Portfolio() {

  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(false);

  const content = {
    en: {
      title: "I build modern web applications",
      about: "Software engineering student passionate about building clean apps.",
      contact: "Let's work together",
      skills: "Skills",
      projects: "Projects",
      cv: "Download CV"
    },
    fr: {
      title: "Je crée des applications web modernes",
      about: "Étudiante en déveleppement logiciel et applicatif passionnée par le développement.",
      contact: "Travaillons ensemble ",
      skills: "Compétences",
      projects: "Projets",
      cv: "Télécharger CV"
    }
  };

  return (
    <div className={dark ? "dark" : ""}>

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">Latifa.dev</h1>

        <div className="nav-links">
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("fr")}>FR</button>
          <button onClick={() => setDark(!dark)}>🌙</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="hero-text">
            <h1>{content[lang].title}</h1>
            <p>{content[lang].about}</p>

            <div className="hero-buttons">
                  <a href={cv} download className="btn">
                    Download CV
                  </a>




              <a href="#contact" className="btn-outline">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <div className="gallery-grid">
          {[img1, img2, img3].map((img, i) => (
            <motion.div
              key={i}
              className="gallery-item"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <img src={img} alt="gallery" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2>About</h2>
        <p>{content[lang].about}</p>
      </motion.section>

      {/* SKILLS */}
      <section className="section">
        <h2>{content[lang].skills}</h2>
        <div className="skills-grid">
          <span>Java</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>SQL</span>
          <span>Python</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>{content[lang].projects}</h2>

        <div className="grid">
          <div className="card">
            <h3>UizWay</h3>
            <p>Student carpooling platform.</p>
            <a href="https://projetcovoiturage.github.io/uizway/">GitHub</a>
          </div>

          <div className="card">
            <h3>StreamifyX</h3>
            <p>Responsive website of films project.</p>
            <a href="https://latifaelguerouani-01.github.io/streamifyX/">GitHub</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>{content[lang].contact}</h2>
        <p>Email: latifaelguerouani@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Latifa El Guerouani
      </footer>

    </div>
  );
}
