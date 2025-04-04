import PageTitle from "../components/PageTitle";
import { useEffect } from "react";

function Resume() {
  const certificates = [
    {
      id: 1,
      title: "Bachelor of Software Engineering (Honours)",
      institution: "The Open University of Sri Lanka",
      year: "2022 - Present",
      description:
        "Currently pursuing my degree in Software Engineering with a focus on modern development practices.",
      image: "./assets/img/certificate1.jpg",
    },
    {
      id: 2,
      title: "Diploma in English",
      institution: "SIBA Campus, Pallekele",
      year: "2021 - 2022",
      description:
        "Completed a comprehensive English diploma program focusing on advanced communication skills.",
      image: "./assets/img/certificate2.jpg",
    },
    {
      id: 3,
      title: "Computer Literacy Certificate",
      institution: "The Open University of Sri Lanka",
      year: "2019 - 2020",
      description:
        "Gained essential skills in MS Office applications with 60 hours of hands-on practical training.",
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
                <ul>
                  <li>Skilled in Frontend & Backend Development</li>
                  <li>
                    Experienced UI/UX Designer with a user-focused approach
                  </li>
                  <li>
                    Strong problem-solving abilities for dynamic challenges
                  </li>
                </ul>
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
                <ul>
                  <li>Advanced grammar and effective communication skills</li>
                  <li>Proficient in public speaking and presentation</li>
                  <li>Skilled in formal writing and document preparation</li>
                </ul>
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
                <ul>
                  <li>
                    Proficient in MS Office Suite: Word, Excel, PowerPoint, and
                    Access
                  </li>
                  <li>
                    Skilled in document creation, data management, and
                    presentations
                  </li>
                  <li>
                    Enhanced practical IT skills with a focus on productivity
                    software
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item pb-0">
                <h4>Senior graphic design specialist</h4>
                <h5>2019 - present</h5>
                <p>
                  <em>Fiverr International Ltd, Israel </em>
                </p>
                <p>
                  <em>
                    I have extensive work experience over 5 years as a
                    freelancer on Fiverr, where I have collaborated with over
                    500 real clients worldwide. I worked in graphic design,
                    including UI/UX design, logo creation, and flyer design.
                  </em>
                </p>
              </div>

              <h3 className="resume-title">Educational Qualifications</h3>
              <div className="resume-item">
                <h4>G.C.E. A/L 2020</h4>
                <p>
                  <em>A. Rathnayake Central College, Walala</em>
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Combined Maths</td>
                      <td>&nbsp;&nbsp;&nbsp;C</td>
                    </tr>
                    <tr>
                      <td>Information & Communication Technology</td>
                      <td>&nbsp;&nbsp;&nbsp;C</td>
                    </tr>
                    <tr>
                      <td>Physics</td>
                      <td>&nbsp;&nbsp;&nbsp;S</td>
                    </tr>
                    <tr>
                      <td>General English</td>
                      <td>&nbsp;&nbsp;&nbsp;S</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="resume-item">
                <h4>G.C.E. O/L 2015</h4>
                <p>
                  <em>A. Rathnayake Central College, Walala</em>
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Buddhism</td>
                      <td>&nbsp;&nbsp;&nbsp;B</td>
                    </tr>
                    <tr>
                      <td>Sinhala</td>
                      <td>&nbsp;&nbsp;&nbsp;A</td>
                    </tr>
                    <tr>
                      <td>English</td>
                      <td>&nbsp;&nbsp;&nbsp;C</td>
                    </tr>
                    <tr>
                      <td>Science</td>
                      <td>&nbsp;&nbsp;&nbsp;B</td>
                    </tr>
                    <tr>
                      <td>Mathematics</td>
                      <td>&nbsp;&nbsp;&nbsp;B</td>
                    </tr>
                    <tr>
                      <td>History</td>
                      <td>&nbsp;&nbsp;&nbsp;C</td>
                    </tr>
                    <tr>
                      <td>Art</td>
                      <td>&nbsp;&nbsp;&nbsp;B</td>
                    </tr>
                    <tr>
                      <td>Geography</td>
                      <td>&nbsp;&nbsp;&nbsp;A</td>
                    </tr>
                    <tr>
                      <td>Information & Communication Technology</td>
                      <td>&nbsp;&nbsp;&nbsp;A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Resume Section */}
      <section id="download-resume" className="download-resume section">
        <div className="container">
          <div className="section-title">
            <h2>Download</h2>
            <p>Get My Complete Resume</p>
          </div>
          <div className="text-center">
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

      {/* Certificates Carousel Section */}
      <section id="certificates" className="certificates section">
        <div className="container">
          <div className="section-title">
            <h2>Certificates</h2>
            <p>My Academic and Professional Certifications</p>
          </div>

          <div
            id="certificatesCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
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
    </>
  );
}

export default Resume;
