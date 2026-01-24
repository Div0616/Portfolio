import React, { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import GalaxyBackground from "./Components/GalaxyBackground.jsx";
import About from "./Components/Aboutsec.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import ContactBar from "./Components/ContactBar.jsx";
import Footer from "./Components/Footer.jsx"


console.log("Loader:", Loader);
console.log("Navbar:", Navbar);
console.log("Hero:", Hero);
console.log("GalaxyBackground:", GalaxyBackground);
console.log("About:", About)
console.log("ContactBar:", ContactBar)
function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const removeTimer = setTimeout(() => setLoading(false), 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className={`loader-wrapper ${fadeOut ? "fade-out" : ""}`}>
          <Loader />
        </div>
      ) : (
        <div className="app-main">
          {/* 🌌 BACKGROUND FIRST */}
          <GalaxyBackground />

          {/* CONTENT ABOVE BACKGROUND */}
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ContactBar />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
