import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';

function Resume() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      if (counter1 < 347) setCounter1(prev => prev + 1);
    }, 10);

    const timer2 = setInterval(() => {
      if (counter2 < 412) setCounter2(prev => prev + 1);
    }, 10);

    const timer3 = setInterval(() => {
      if (counter3 < 1560) setCounter3(prev => prev + 1);
    }, 10);

    const timer4 = setInterval(() => {
      if (counter4 < 25) setCounter4(prev => prev + 1);
    }, 10);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, [counter1, counter2, counter3, counter4]);

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
                <p><em>The Open University of Sri Lanka, Nawala</em></p>
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
                  <li>Experienced UI/UX Designer with a user-focused approach</li>
                  <li>Strong problem-solving abilities for dynamic challenges</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Diploma in English</h4>
                <h5>2021 - 2022</h5>
                <p>
                  <em>Sri Lanka International Buddhist Academy (SIBA Campus), Pallekele</em>
                </p>
                <p>
                  <em>
                    Successfully completed a comprehensive Diploma in English, enhancing
                    language proficiency with a focus on grammar, speaking, and writing skills. Gained
                    strong communication abilities beneficial for both academic and professional settings.
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
                    Completed a comprehensive certificate program in Computer Literacy, gaining essential skills in MS Office applications with 60 hours of hands-on practical training. Developed foundational technical skills beneficial for various academic and professional applications.
                  </em>
                </p>
                <ul>
                  <li>Proficient in MS Office Suite: Word, Excel, PowerPoint, and Access</li>
                  <li>Skilled in document creation, data management, and presentations</li>
                  <li>Enhanced practical IT skills with a focus on productivity software</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item pb-0">
                <h4>Senior graphic design specialist</h4>
                <h5>2019 - present</h5>
                <p><em>Fiverr International Ltd, Israel </em></p>
                <p>
                  <em>
                    I have extensive work experience over 5 years as a freelancer
                    on Fiverr, where I have collaborated with over 500 real clients
                    worldwide. I worked in graphic design, including UI/UX design,
                    logo creation, and flyer design.
                  </em>
                </p>
              </div>

              <h3 className="resume-title">Educational Qualifications</h3>
              <div className="resume-item">
                <h4>G.C.E. A/L 2020</h4>
                <p><em>A. Rathnayake Central College, Walala</em></p>
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
                <p><em>A. Rathnayake Central College, Walala</em></p>
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

      <section id="stats" className="stats section">
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

export default Resume;
