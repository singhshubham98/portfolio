/**
 * Created by Shubham Singh on 29/03/19.
 */
import React from "react";
import "../css/resume.css";
import Footer from "./footer";

const Resume = () => (
  <>
    <div className="uk-container resume uk-text-left uk-margin-large-top uk-margin-large-bottom">
      <div uk-grid="true">
        <div className="uk-width-1-6@s uk-width-1-6@m" />
        <div className="uk-width-2-3@s uk-width-2-3@m">
          <h2 className="page-title uk-text-bold uk-text-uppercase color-grey-54">
            Resume
          </h2>

          {/*About*/}
          <section className="about uk-margin-large-top">
            <h4 className="title-deco">About</h4>
            <p className="paragraph">
              I am a Software Engineer, specialising at Web & App development.
              For the last 4.5 years, I have been developing frontend of modern
              web application using React and mobile application using React
              Native.
            </p>
          </section>

          {/*Skills*/}
          <section className="skills uk-margin-large-top">
            <h4 className="title-deco ">Skills</h4>
            <div uk-grid="true">
              <div className="uk-width-1-2@m">
                <div className="h5 section-subtitle">Core Skills</div>
                <div className="core-skills-list uk-flex uk-flex-wrap uk-margin-small-top">
                  <div className="core-skill circle-text-container">React</div>
                  <div className="core-skill circle-text-container">Redux</div>
                  <div className="core-skill circle-text-container">
                    React Native
                  </div>
                  {/* <div className="core-skill circle-text-container">Angular</div> */}
                  <div className="core-skill circle-text-container">Node</div>
                  <div className="core-skill circle-text-container">HTML5</div>
                  <div className="core-skill circle-text-container">CSS3</div>
                </div>
              </div>
              <div className="uk-width-1-2@m">
                <div className="h5 section-subtitle">Other Skills</div>
                <div className="other-skills-list  uk-flex uk-flex-wrap uk-margin-small-top">
                  <div className="other-skill">C</div>
                  <div className="other-skill">JAVA</div>
                  <div className="other-skill">Bootstrap</div>
                  <div className="other-skill">Firebase</div>
                  <div className="other-skill">Webpack</div>
                  <div className="other-skill">Github</div>
                </div>
              </div>
            </div>
          </section>

          {/*Education*/}
          <section className="edu uk-margin-large-top">
            <h4 className="title-deco">Education</h4>
            <div className="edu-list">
              <div className="edu-item uk-flex">
                <div className="year uk-margin-small-right">
                  <span>2020</span>
                </div>
                <div className="edu-info">
                  <div className="degree text-medium">
                    Bachelor of Technology (IT)
                  </div>
                  <div className="inst-name text-size-14 color-grey-38">
                    INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, VADODARA
                  </div>
                  {/* <div className="grade text-size-14">
                  <span className="text-medium">CGPA:</span> 6.66/10
                </div> */}
                </div>
              </div>

              <div className="edu-item uk-flex">
                <div className="year uk-margin-small-right">
                  <span>2015</span>
                </div>
                <div className="edu-info">
                  <div className="degree text-medium">
                    XII (Senior Secondary)
                  </div>
                  <div className="inst-name text-size-14 color-grey-38">
                    J D S V M I C Rasoolabad Allahabad
                  </div>
                  {/* <div className="grade text-size-14">
                  <span className="text-medium">Percentage :</span> 92.20%
                </div> */}
                </div>
              </div>

              <div className="edu-item uk-flex">
                <div className="year uk-margin-small-right">
                  <span>2013</span>
                </div>
                <div className="edu-info">
                  <div className="degree text-medium">X (Secondary)</div>
                  <div className="inst-name text-size-14 color-grey-38">
                    Ch Prahalad Singh I C dhata Fatehpur
                  </div>
                  {/* <div className="grade text-size-14">
                  <span className="text-medium">Percentage:</span> 87.60%
                </div> */}
                </div>
              </div>
            </div>
          </section>

          {/* Certificate  */}
          <section className="edu uk-margin-large-top">
            <h4 className="title-deco">Certificate</h4>
            <div className="exp-list">
              <div className="exp-item">
                <div className="position text-medium">
                  Server-side Development with NodeJS, Express and MongoDB
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  Certificate Link:{" "}
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/GQPQADP7JP4C"
                    alt="React"
                  >
                    https://www.coursera.org/account/accomplishments/certificate/GQPQADP7JP4C
                  </a>
                </div>
              </div>
              <div className="exp-item mt-4">
                <div className="position text-medium">
                  Front-End JavaScript Frameworks: Angular
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  Certificate Link:{" "}
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/2MRVFE7LQYR6"
                    alt="Angular"
                  >
                    https://www.coursera.org/account/accomplishments/certificate/2MRVFE7LQYR6
                  </a>
                </div>
              </div>
              <div className="exp-item mt-4">
                <div className="position text-medium">
                  Front-End Web Development with React
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  Certificate Link:{" "}
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/F5H6XCLHNFJR"
                    alt="React"
                  >
                    https://www.coursera.org/account/accomplishments/certificate/F5H6XCLHNFJR
                  </a>
                </div>
              </div>
              <div className="exp-item mt-4">
                <div className="position text-medium">
                  Multiplatform Mobile App Development with React Native
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  Certificate Link:{" "}
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/C5NX8AA9B9CD"
                    alt="React Native"
                  >
                    https://www.coursera.org/account/accomplishments/certificate/C5NX8AA9B9CD
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="edu uk-margin-large-top">
            <h4 className="title-deco">Experience</h4>
            <div className="exp-list">
              <div className="exp-item">
                <div className="position text-medium">
                  Senior Software Engineer (Remote)
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  Cognam Technologies Pvt. Ltd.
                </div>
                <div className="time text-size-14">Aug 2024 - Present</div>
              </div>
              <div className="exp-item mt-3">
                <div className="position text-medium">
                  Software Engineer (Remote)
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  Cognam Technologies Pvt. Ltd.
                </div>
                <div className="time text-size-14">Jan 2022 - Aug 2024</div>
              </div>
              <div className="exp-item mt-3">
                <div className="position text-medium">
                  Software Engineer (Remote)
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  iView Labs Pvt. Ltd.
                </div>
                <div className="time text-size-14">May 2020 - Dec 2021</div>
              </div>
              <div className="exp-item mt-3">
                <div className="position text-medium">
                  Software Engineer Intern (On-site)
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  iView Labs Pvt. Ltd.
                </div>
                <div className="time text-size-14">Jan 2020 - Apr 2020</div>
              </div>
              <div className="exp-item mt-3">
                <div className="position text-medium">
                  Software Engineer Intern (On-site)
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  iView Labs Pvt. Ltd.
                </div>
                <div className="time text-size-14">May 2019 - July 2019</div>
              </div>

              <div className="exp-item mt-3">
                <div className="position text-medium">Rural Internship</div>
                <div className="inst-name text-size-14 color-grey-38">
                  Subhash Children Society, Kanpur, India
                </div>
                <div className="time text-size-14">
                  {" "}
                  1st Dec 2018 - 31st Dec 2018
                </div>
              </div>
            </div>
          </section>

          {/*Hoby*/}
          {/* <section className="edu uk-margin-large-top">
          <h4 className="title-deco">Interest & Hobbies</h4>
          <div className="hobby-list uk-flex uk-flex-wrap">
            <div className="hobby-item circle-text-container">Music</div>
            <div className="hobby-item circle-text-container">Cricket</div>
            <div className="hobby-item circle-text-container">Chess</div>
            <div className="hobby-item circle-text-container">Travel</div>
          </div>
          <div className="uk-padding-small" />
        </section> */}
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Resume;
