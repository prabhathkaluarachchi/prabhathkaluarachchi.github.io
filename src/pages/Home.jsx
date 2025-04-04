import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js

function Home() {
  const typedRef = useRef(null);  // Reference for the typed element
  let typedInstance = useRef(null); // Reference for the Typed.js instance

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Graphic Designer", "Freelancer", "Programmer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    // Initialize Typed.js only if the element exists
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, options);
    }

    return () => {
      // Cleanup Typed.js instance on unmount
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <main className="main">
      <section id="hero" className="hero section dark-background">
        {/* <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" /> */}
        <img src="./assets/img/hero-bg.jpg" alt="Hero Background" data-aos="fade-up" />

        {/* <img src={heroBg} alt="" data-aos="fade-in" /> */}
        <div className="container" data-aos="fade-up" data-aos-delay="100" >
          <h2>Prabhath Kaluarachchi</h2>
          <p>
            I'm <span className="typed" ref={typedRef}></span> 
            {/* Typed.js will handle the cursor automatically */}
          </p>
          <p className="hero-description">
            <br /> I'm a driven undergraduate software engineer at the Open University of Sri Lanka, <br /> 
            dedicated to crafting innovative solutions and pushing technological boundaries. <br /> 
            Let's build something extraordinary together!
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/prabhathkaluarachchi/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/prabhathkaluarachchi" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://wa.me/94772347420" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/prabhathtkaluarachchi/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/prabhathtkaluarachchi/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
