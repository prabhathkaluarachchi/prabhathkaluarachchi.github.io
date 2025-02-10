import React, { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function About() {
  useEffect(() => {
    import('swiper').then(Swiper => {
      // If you need to dynamically import Swiper components
      Swiper.default.use([Swiper.Navigation, Swiper.Pagination, Swiper.Autoplay]);
    });

    // Initialize the progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const value = bar.getAttribute('aria-valuenow');
      bar.style.width = `${value}%`;
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
              <h2>Software Engineer (UG)</h2>
              <p className="fst-italic py-3">
                I'm a driven undergraduate software engineer at the Open
                University of Sri Lanka.OUSL
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
                        <a href="https://prabhath.me/">www.prabhath.me</a>
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
                      <i className="bi bi-chevron-right"></i> <strong>Age:</strong>
                      <span>25</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong> <span>BSE</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <a href="mailto:fmprabhath@gmail.com">fmprabhath@gmail.com</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                I am passionate about web development, UI/UX design, and
                WordPress development, with a strong focus on creating
                intuitive, visually engaging, and innovative solutions that
                prioritize user experience. I thrive on transforming ideas into
                interactive and functional designs that meet both user needs and
                business goals. Whether through custom websites, thoughtful
                interface designs, or WordPress platforms optimized for user
                engagement, I aim to bridge the gap between design and
                technology to deliver impactful digital experiences.
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
                <span className="skill"><span>HTML</span> <i className="val">99%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="99"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>CSS</span> <i className="val">95%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>JavaScript</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>Adobe Photoshop / Illustrator</span> <i className="val">95%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>Figma</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>Bootstrap</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>JAVA / OOP</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>Python</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>React</span> <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>NodeJs</span> <i className="val">65%</i></span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Skills Section */}

      <section id="interests" className="interests section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Features</h2>
    <div>
      <span>I'm</span>
      <span className="description-title">interested in</span>
    </div>
  </div>
  {/* End Section Title */}

  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div className="features-item">
          <i className="bi bi-brush" style={{ color: '#ffbb2c' }}></i>
          <h3><a href="#" className="stretched-link">Graphic Design</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div className="features-item">
          <i className="bi bi-code" style={{ color: '#5578ff' }}></i>
          <h3><a href="#" className="stretched-link">Coding</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
        <div className="features-item">
          <i className="bi bi-mortarboard" style={{ color: '#e80368' }}></i>
          <h3><a href="#" className="stretched-link">Learning</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
        <div className="features-item">
          <i className="bi bi-joystick" style={{ color: '#e361ff' }}></i>
          <h3><a href="#" className="stretched-link">Gaming</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
        <div className="features-item">
          <i className="bi bi-people" style={{ color: '#47aeff' }}></i>
          <h3><a href="#" className="stretched-link">Social Media</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
        <div className="features-item">
          <i className="bi bi-motherboard" style={{ color: '#ffa76e' }}></i>
          <h3><a href="#" className="stretched-link">Hardware</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
        <div className="features-item">
          <i className="bi bi-laptop" style={{ color: '#11dbcf' }}></i>
          <h3><a href="#" className="stretched-link">Software</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
        <div className="features-item">
          <i className="bi bi-star" style={{ color: '#4233ff' }}></i>
          <h3><a href="#" className="stretched-link">Technology</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
        <div className="features-item">
          <i className="bi bi-github" style={{ color: '#b2904f' }}></i>
          <h3><a href="#" className="stretched-link">Github</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
        <div className="features-item">
          <i className="bi bi-git" style={{ color: '#b20969' }}></i>
          <h3><a href="#" className="stretched-link">Version Control</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
        <div className="features-item">
          <i className="bi bi-type" style={{ color: '#ff5828' }}></i>
          <h3><a href="#" className="stretched-link">Typography</a></h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
        <div className="features-item">
          <i className="bi bi-brightness-high" style={{ color: '#29cc61' }}></i>
          <h3><a href="#" className="stretched-link">Innovation</a></h3>
        </div>
      </div>
    </div>
  </div>
</section>


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
              el: '.swiper-pagination',
              type: 'bullets',
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
                text: 'Working with Prabhath was a fantastic experience. They delivered a high-quality e-commerce website...',
                img: 'assets/img/testimonials/testimonials-1.png',
                name: 'Radee Gimhani',
                role: 'Ceo & Founder - Radee Online Shopping',
              },
              {
                text: 'Great work again from this creator! He does an excellent job, fulfilling exactly what I asked for...',
                img: 'assets/img/testimonials/testimonials-2.jpeg',
                name: 'Harley Hunt',
                role: 'Author - France',
              },
              {
                text: 'Prabhath delivered an exceptional branding kit for Niro Online Shopping...',
                img: 'assets/img/testimonials/testimonials-3.jpeg',
                name: 'Nirosha Sandamali',
                role: 'Store Owner - Niro Online Shopping',
              },
              {
                text: 'Working with Prabhath on my project was an absolute pleasure! His creativity and professionalism blew me away...',
                img: 'assets/img/testimonials/testimonials-4.jfif',
                name: 'Rasika Fernando',
                role: 'IT Technician - Dubai National Air Travel Agency',
              },
              {
                text: '10/10 highly recommended, incredible work very happy customer...',
                img: 'assets/img/testimonials/testimonials-5.webp',
                name: 'Alex CZ',
                role: 'Owner - www.llangoedhall.co.uk',
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
    </>
  );
}

export default About;
