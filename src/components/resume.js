/**
 * Created by Shubham Singh on 29/03/19.
 */
import React from "react";

import "../css/resume.css";

const Resume = () => (
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
            Hi, I’m <span className="color-primary">Shubham Singh</span>, a self
            taught <span className="color-primary">React web developer</span>{" "}
            3rd year Undergraduate student from IIIT Vadodara. I started with
            developing websites and eventually the developing component caught
            my imagination which encouraged me to explore it more seriously from
            a professional perspective. Since last 2 years, I’ve been exploring,
            learning and creating as much as I can to evolve as a better
            developer.
          </p>
        </section>

        {/*Skills*/}
        <section className="skills uk-margin-large-top">
          <h4 className="title-deco">Skills</h4>
          <div uk-grid="true">
            <div className="uk-width-1-2@m">
              <div className="h5 section-subtitle">Core Skills</div>
              <div className="core-skills-list uk-flex uk-flex-wrap uk-margin-small-top">
                <div className="core-skill circle-text-container">React</div>
                <div className="core-skill circle-text-container">Redux</div>
                <div className="core-skill circle-text-container">
                  HTML & CSS
                </div>
                <div className="core-skill circle-text-container">Django</div>
                <div className="core-skill circle-text-container">PHP</div>
              </div>
            </div>
            <div className="uk-width-1-2@m">
              <div className="h5 section-subtitle">Other Skills</div>
              <div className="other-skills-list  uk-flex uk-flex-wrap uk-margin-small-top">
                <div className="other-skill">C</div>
                <div className="other-skill">JAVA</div>
                <div className="other-skill">Latex</div>
                <div className="other-skill">MySQL</div>
                <div className="other-skill">PostgreSQL</div>
                <div className="other-skill">Github</div>
                <div className="other-skill">JavaScript</div>
                <div className="other-skill">Firebase</div>
                <div className="other-skill">UIkit</div>
                <div className="other-skill">NodeJs</div>
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
                  Bachelor of Technology (B.Tech), Information Technology
                </div>
                <div className="inst-name text-size-14 color-grey-38">
                  INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, VADODARA
                </div>
                <div className="grade text-size-14">
                  <span className="text-medium">CGPA:</span> 6.66/10
                </div>
              </div>
            </div>

            <div className="edu-item uk-flex">
              <div className="year uk-margin-small-right">
                <span>2015</span>
              </div>
              <div className="edu-info">
                <div className="degree text-medium">XII (Senior Secondary)</div>
                <div className="inst-name text-size-14 color-grey-38">
                  J D S V M I C Rasoolabad Allahabad
                </div>
                <div className="grade text-size-14">
                  <span className="text-medium">Percentage :</span> 92.20%
                </div>
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
                <div className="grade text-size-14">
                  <span className="text-medium">CGPA:</span> 87.60%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience
        <section className="edu uk-margin-large-top">
          <h4 className="title-deco">Experience</h4>
          <div className="exp-list">
            <div className="exp-item">
              <div className="position text-medium">Web Developer</div>
              <div className="inst-name text-size-14 color-grey-38">
                SECUREITLAB
              </div>
              <div className="time text-size-14">May 2016 - Sep 2016</div>
            </div>
          </div>
        </section> */}

        {/*Hoby*/}
        <section className="edu uk-margin-large-top">
          <h4 className="title-deco">Interest & Hobbies</h4>
          <div className="hobby-list uk-flex uk-flex-wrap">
            <div className="hobby-item circle-text-container">Music</div>
            <div className="hobby-item circle-text-container">Cricket</div>
            <div className="hobby-item circle-text-container">Chess</div>
            <div className="hobby-item circle-text-container">Travel</div>
          </div>
          <div className="uk-padding-small" />
        </section>
      </div>
    </div>
  </div>
);

export default Resume;
