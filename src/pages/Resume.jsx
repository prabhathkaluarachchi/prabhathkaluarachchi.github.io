import PageTitle from "../components/PageTitle";
import { useEffect } from "react";

function Resume() {
  const certificates = [
    {
      id: 1,
      title: "Introduction to SQL",
      institution: "SoloLearn",
      year: "2023",
      description:
        "Completed an online course on SQL, covering database management and query writing.",
      image: "./assets/img/certificate1.jpg",
    },
    {
      id: 2,
      title: "Introduction to Python",
      institution: "SoloLearn",
      year: "2023",
      description:
        "Completed an online course on Python programming, focusing on syntax, data structures, and algorithms.",
      image: "./assets/img/certificate2.jpg",
    },
    {
      id: 3,
      title: "Introduction to JAVA",
      institution: "SoloLearn",
      year: "2023",
      description:
        "Completed an online course on Java programming, covering object-oriented programming concepts and Java syntax.",
      image: "./assets/img/certificate3.jpg",
    },
  ];

  // Initialize carousel when component mounts
  useEffect(() => {
    const myCarousel = document.querySelector("#certificatesCarousel");
    if (myCarousel) {
      new window.bootstrap.Carousel(myCarousel, {
        interval: 3000, // Change slide every 3 seconds
        wrap: true, // Enable continuous looping
      });
    }
  }, []);

  return (
    <>
      <PageTitle title="Resume" />
      <section id="resume" className="resume section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Qualifications</h3>

              <div className="resume-item">
                <h4>Bachelor of Software Engineering (Honours)</h4>
                <h5>2022 - present</h5>
                <p>
                  <em>The Open University of Sri Lanka, Nawala</em>
                </p>
                <p>
                  <em>
                    Innovative and detail-oriented undergraduate Bachelor of
                    Software Engineering (Honours) student with a solid
                    foundation in software development and design principles.
                    Bringing hands-on project experience and a passion for
                    creating user-centered digital solutions.
                  </em>
                </p>
              </div>

              <div className="resume-item">
                <h4>Diploma in English</h4>
                <h5>2021 - 2022</h5>
                <p>
                  <em>
                    Sri Lanka International Buddhist Academy (SIBA Campus),
                    Pallekele
                  </em>
                </p>
                <p>
                  <em>
                    Successfully completed a comprehensive Diploma in English,
                    enhancing language proficiency with a focus on grammar,
                    speaking, and writing skills. Gained strong communication
                    abilities beneficial for both academic and professional
                    settings.
                  </em>
                </p>
              </div>

              <div className="resume-item pb-0">
                <h4>Certificate of Completion in Computer Literacy</h4>
                <h5>2019 - 2020</h5>
                <p>
                  <em>The Open University of Sri Lanka, Polgolla</em>
                </p>
                <p>
                  <em>
                    Completed a comprehensive certificate program in Computer
                    Literacy, gaining essential skills in MS Office applications
                    with 60 hours of hands-on practical training. Developed
                    foundational technical skills beneficial for various
                    academic and professional applications.
                  </em>
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item pb-0">
                <h4>Freelance Web Developer, UI/UX & Graphic Designer</h4>
                <h5>2019 - present</h5>
                <p>
                  <em>Fiverr International Ltd, Israel </em>
                </p>
                <p>
                  <em>
                    I have extensive work experience over 6 years as a
                    freelancer on Fiverr, where I have collaborated with over
                    500 real clients worldwide. I worked in graphic design,
                    including UI/UX design, logo creation, flyer design and
                    WordPress development.
                  </em>
                </p>
                <div>
                  <ul>
                    <li>
                      6+ years of experience as a freelancer on Fiverr,
                      collaborating with 400+ clients worldwide.
                    </li>
                    <li>
                      2 years of experience as a freelance WordPress developer
                      on Fiverr and local marketplaces.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Carousel Section */}
      <section id="certificates" className="certificates section">
        <div className="container">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>CERTIFICATES</h2>
            <div>
              <span>Check my </span>
              <span className="description-title">Certificates</span>
            </div>
          </div>
          {/* End Section Title */}

          <div
            id="certificatesCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-aos="fade-up"
          >
            <div className="carousel-inner">
              {certificates.map((cert, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={cert.id}
                >
                  <div className="certificate-item text-center">
                    <div className="certificate-img-container mx-auto mb-4">
                      <img
                        src={cert.image}
                        className="d-block img-fluid certificate-img"
                        alt={cert.title}
                      />
                    </div>
                    <div className="certificate-info">
                      <h4>{cert.title}</h4>
                      <h5>{cert.institution}</h5>
                      <p>
                        <em>{cert.year}</em>
                      </p>
                      <p>{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#certificatesCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#certificatesCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Download Resume Section */}
      <section id="download-resume" className="download-resume section">
        <div className="container">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>RESUME</h2>
            <div>
              <span>Download my </span>
              <span className="description-title">Resume</span>
            </div>
          </div>
          {/* End Section Title */}
          <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
            <a
              href="./Prabhath Kaluarachchi.pdf"
              className="btn-download-resume"
              download="Prabhath Kaluarachchi.pdf"
            >
              <i className="bi bi-download me-2"></i>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
