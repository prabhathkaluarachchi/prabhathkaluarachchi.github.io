import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function About() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  useEffect(() => {
    const timer1 = setInterval(() => {
      if (counter1 < 347) setCounter1((prev) => prev + 1);
    }, 10);

    const timer2 = setInterval(() => {
      if (counter2 < 412) setCounter2((prev) => prev + 1);
    }, 10);

    const timer3 = setInterval(() => {
      if (counter3 < 660) setCounter3((prev) => prev + 1);
    }, 10);

    const timer4 = setInterval(() => {
      if (counter4 < 25) setCounter4((prev) => prev + 1);
    }, 10);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, [counter1, counter2, counter3, counter4]);

  useEffect(() => {
    // Intersection Observer for skill animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.querySelector(".skills-animation");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  useEffect(() => {
    import("swiper").then((Swiper) => {
      // If you need to dynamically import Swiper components
      Swiper.default.use([
        Swiper.Navigation,
        Swiper.Pagination,
        Swiper.Autoplay,
      ]);
    });
  }, []);

  return (
    <>
      <PageTitle title="About" />
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img
                src="./assets/img/profile-img.jpg"
                width="100%"
                className="img-fluid"
                alt="MYIMAGE"
              />
            </div>
            <div className="col-lg-8 content">
              <h2>Prabhath Kaluarachchi</h2>
              <p className="fst-italic py-3">
                I'm a driven undergraduate software engineer at the Open
                University of Sri Lanka.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>25 June 1999</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Website:</strong>
                      <span>
                        <a href="https://prabhath.online/">
                          www.prabhath.online
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Phone:</strong>
                      <a href="tel:+94772347420">+94 77 234 7420</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Kandy</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong>
                      <span>25</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong> <span>BSE</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <a href="mailto:fmprabhath@gmail.com">
                        fmprabhath@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Hello! I'm Prabhath Kaluarachchi, an undergraduate software
                engineer at OUSL. Passionate Web Developer specializing in
                MERN, crafting fast and scalable web applications.{" "}
                <br />
                Experienced in building MERN projects and exploring modern
                web technologies like Tailwind CSS, NEXT.js, and Wordpress.
                Always eager to learn, innovate, and enhance user experiences
                with clean and efficient code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <div>
            <span>My</span> <span className="description-title">Skills</span>
          </div>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>HTML</span> <i className="val">99%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="99"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "99%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>CSS</span> <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "90%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>JavaScript</span> <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "85%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>React Js</span> <i className="val">88%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "88%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>Python</span> <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "80%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>Bootstrap</span> <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "80%" : "0%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>PHP</span> <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "80%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>WordPress/CMS</span> <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "90%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>JAVA / OOP</span> <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "85%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>Python</span> <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "85%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>React</span> <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "60%" : "0%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>NodeJs</span> <i className="val">65%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skillsAnimated ? "65%" : "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Skills Section */}

      <section id="testimonials" className="testimonials section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <div>
            <span>Check my</span>
            <span className="description-title">Testimonials</span>
          </div>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            autoplay={{
              delay: 5000,
            }}
            slidesPerView="auto"
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {[
              {
                text: "Prabhath did an exceptional job. He was very communicative and thought of things I missed myself. I look forward to working with him in the future.",
                img: "assets/img/testimonials/testimonials-6.jpg",
                name: "Carrie Collins",
                role: "Author / Content Writer - USA",
              },
              {
                text: "Working with Prabhath was a fantastic experience. They delivered a high-quality e-commerce website...",
                img: "assets/img/testimonials/testimonials-1.png",
                name: "Radee Gimhani",
                role: "Ceo & Founder - Radee Online Shopping",
              },
              {
                text: "Great work again from this creator! He does an excellent job, fulfilling exactly what I asked for...",
                img: "assets/img/testimonials/testimonials-2.jpeg",
                name: "Harley Hunt",
                role: "Author - France",
              },
              {
                text: "Prabhath delivered an exceptional branding kit for Niro Online Shopping...",
                img: "assets/img/testimonials/testimonials-3.jpeg",
                name: "Nirosha Sandamali",
                role: "Store Owner - Niro Online Shopping",
              },
              {
                text: "Working with Prabhath on my project was an absolute pleasure! His creativity and professionalism blew me away...",
                img: "assets/img/testimonials/testimonials-4.jfif",
                name: "Rasika Fernando",
                role: "IT Technician - Dubai National Air Travel Agency",
              },
              {
                text: "10/10 highly recommended, incredible work very happy customer...",
                img: "assets/img/testimonials/testimonials-5.webp",
                name: "Alex CZ",
                role: "Owner - www.llangoedhall.co.uk",
              },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.text}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <img
                    src={testimonial.img}
                    className="testimonial-img"
                    alt={testimonial.name}
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.role}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="stats" className="stats section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Fiverr Clients</h2>
          <div>
            <span>Working</span>{" "}
            <span className="description-title">Status</span>
          </div>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-emoji-smile"></i>
              <div className="stats-item">
                <span>{counter1}</span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-journal-richtext"></i>
              <div className="stats-item">
                <span>{counter2}</span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-headset"></i>
              <div className="stats-item">
                <span>{counter3}</span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <i className="bi bi-people"></i>
              <div className="stats-item">
                <span>{counter4}</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;