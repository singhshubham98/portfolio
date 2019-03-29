import React, { Component } from "react";
import "../css/navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="portfolio-wrapper theme-default" data-reactroot="">
          <div className="pulse-header">
            <header id="header">
              <div className="pulse-wrapper">
                <div className="photo-wrapper">
                  <img
                    alt="Shubham Singh Avatar"
                    id="avatar"
                    src="https://avatars3.githubusercontent.com/u/25260334?v=4"
                  />
                </div>
                <h1 id="name">Shubham Singh</h1>
                <h3 id="title">I am a Web Developer</h3>
                <div id="about">
                  <div className="markdown">
                    <p>
                      I'm an entrepreneur living in Istanbul, Turkey. I started
                      to do different businesses while I was studying in
                      University. After I stayed for a year in Istanbul I
                      discovered the opportunity of building tech startups and I
                      decided to be the part of marketing and managing in my
                      entrepreneurship life.
                    </p>
                  </div>
                </div>
                <div className="social-wrapper">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:harun@broftware.com"
                  >
                    <span className="far fa-envelope" aria-hidden="true" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/HarunInam"
                  >
                    <span className="fab fa-facebook-f" aria-hidden="true" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/haruninam"
                  >
                    <span className="fab fa-linkedin-in" aria-hidden="true" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@haruninam"
                  >
                    <span className="fab fa-medium-m" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="doubleable">
                <div className="profile-section">
                  <p className="profile-head">Location</p>
                  <div className="profile-content">
                    <a
                      className="profile-location"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Manhattan"
                      href="https://www.google.com/maps/search/Manhattan"
                    >
                      Manhattan
                    </a>
                  </div>
                </div>
                <div className="profile-section">
                  <p className="profile-head">Work</p>
                  <div className="profile-content">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Broftware Labs."
                      href="https://broftware.com"
                    >
                      Broftware Labs.
                    </a>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="latest-blogs general-content">
            <h3 className="general-content-title">Latest blogs</h3>
            <hr className="general-divider" />
            <div className="blogs-wrapper">
              <a
                title="How to create your online portfolio website with Project Showcase"
                className="blog-card"
                href="https://medium.com/p/39cd1178f173"
              >
                <div className="blog-img-1" />
                <div className="blog-content">
                  <h4 className="blog-title">
                    How to create your online portfolio website with Project
                    Showcase
                  </h4>
                  <p className="blog-description">
                    Not like other website builders we don’t use confusing drag
                    and drop features. All we care about is to be the fastest
                    and the simplest for…
                  </p>
                </div>
              </a>
              <a
                title="15 Web Developer Portfolios to Inspire You"
                className="blog-card"
                href="https://medium.com/p/137fb1743cae"
              >
                <div className="blog-img-2" />
                <div className="blog-content">
                  <h4 className="blog-title">
                    15 Web Developer Portfolios to Inspire You
                  </h4>
                  <p className="blog-description">
                    One of the toughest things to do as a new developer is to
                    assemble an online portfolio.
                  </p>
                </div>
              </a>
              <a
                title="Great websites!"
                className="blog-card"
                href="https://medium.com/p/7e7940249b9b"
              >
                <div className="blog-content">
                  <h4 className="blog-title">Great websites!</h4>
                  <p className="blog-description">
                    Check out mine sarpkeskin.pscase.me
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div id="right">
            <div id="projects" className="little-card-projects">
              <div className="projects-header">
                <h3 className="projects-title">Projects</h3>
                <hr className="projects-divider" />
              </div>
              <div className="projects-wrapper">
                <div className="little-card-project">
                  <div className="project-background" />
                  <div>
                    <img className="little-card-icon" />
                    <h3 className="little-card-title">Stubridge</h3>
                    <h4 className="project-tag">
                      <span>
                        <span className="label label-default">
                          social media
                        </span>
                      </span>
                      <span>
                        <span className="label label-default">Social App</span>
                      </span>
                      <span>
                        <span className="label label-default">Stubridge</span>
                      </span>
                      <span>
                        <span className="label label-default">
                          Stubridge App
                        </span>
                      </span>
                      <span>
                        <span className="label label-default">University</span>
                      </span>
                      <span>
                        <span className="label label-default">
                          Social Network
                        </span>
                      </span>
                    </h4>
                  </div>
                  <button
                    type="button"
                    className="little-card-btn btn btn-default"
                  >
                    Details
                  </button>
                </div>
                <div className="little-card-project">
                  <div>
                    <img
                      className="little-card-icon"
                      src="https://firebasestorage.googleapis.com/v0/b/project-showcase-b739c.appspot.com/o/ProjectIcons%2FQNXLmr6wPzLFqRA1TOqWP9CcN9Z2%2Fbf82fa59-df4d-4014-bde3-a722dc255867?alt=media&amp;token=57d200b4-097b-4b3b-bb52-64ad1c25259c"
                    />
                    <h3 className="little-card-title">Project Showcase</h3>
                    <h4 className="project-tag">
                      <span>
                        <span className="label label-default l-1">
                          Portfolio
                        </span>
                      </span>
                      <span>
                        <span className="label label-default l-1">SaaS</span>
                      </span>
                      <span>
                        <span className="label label-default l-1">Project</span>
                      </span>
                      <span>
                        <span className="label label-default l-1">Website</span>
                      </span>
                      <span>
                        <span className="label label-default l-1">Design</span>
                      </span>
                    </h4>
                  </div>
                  <button
                    type="button"
                    className="little-card-btn btn btn-default"
                  >
                    Details
                  </button>
                </div>
                <div className="little-card-project">
                  <div>
                    <img
                      className="little-card-icon"
                      src="https://firebasestorage.googleapis.com/v0/b/project-showcase-b739c.appspot.com/o/ProjectIcons%2FQNXLmr6wPzLFqRA1TOqWP9CcN9Z2%2Faae2cf38-52c3-4b37-be40-9ee96ea0a4db?alt=media&amp;token=f48d18d8-d3b1-44d6-9e14-9d573582c185"
                    />
                    <h3 className="little-card-title">Bunny Network</h3>
                    <h4 className="project-tag">
                      <span>
                        <span className="label label-default l-1">
                          Advertising
                        </span>
                      </span>
                      <span>
                        <span className="label label-default l-1">Agency</span>
                      </span>
                      <span>
                        <span className="label label-default l-1">Media</span>
                      </span>
                      <span>
                        <span className="label label-default l-1">Startup</span>
                      </span>
                    </h4>
                  </div>
                  <button
                    type="button"
                    className="little-card-btn btn btn-default"
                  >
                    Details
                  </button>
                </div>
                <div className="little-card-project">
                  <div>
                    <img
                      className="little-card-icon"
                      src="https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/db/c5/fd/dbc5fd05-c048-d57a-9dc0-b4948f247f66/source/60x60bb.jpg"
                    />
                    <h3 className="little-card-title">
                      The Before or After Game
                    </h3>
                    <h4 className="project-tag">
                      <span>
                        <span className="label label-default l-1">Games</span>
                      </span>
                      <span>
                        <span className="label label-default l-1">
                          Education
                        </span>
                      </span>
                      <span>
                        <span className="label label-default l-1">Trivia</span>{" "}
                      </span>
                    </h4>
                  </div>
                  <button
                    type="button"
                    className="little-card-btn btn btn-default"
                  >
                    Details
                  </button>
                </div>
                <div className="little-card-project">
                  <div>
                    <img
                      className="little-card-icon"
                      src="https://lh3.googleusercontent.com/WgBW2Isjtzs7hiKe7VmtpMJcb7KzA7A9vIL8o5PCWW40d8IIpDRLJE9aCTEbLepGrC8"
                    />
                    <h3 className="little-card-title">
                      Daily Affirmations Plus - Need motivation?
                    </h3>
                    <h4 className="project-tag">
                      <span>
                        <span className="label label-default l-2">
                          Lifestyle
                        </span>
                      </span>
                    </h4>
                  </div>
                  <button
                    type="button"
                    className="little-card-btn btn btn-default"
                  >
                    Details
                  </button>
                </div>
                <div className="little-card-project">
                  <div>
                    <img
                      className="little-card-icon"
                      src="https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/5c/57/13/5c5713bf-caa0-db5b-939a-22e4d67300fb/source/60x60bb.jpg"
                    />
                    <h3 className="little-card-title">
                      Yabancı Dil Kelime Kartları
                    </h3>
                    <h4 className="project-tag">
                      <span>
                        <span className="label label-default l-2">
                          Education
                        </span>
                      </span>
                      <span>
                        <span className="label label-default l-2">
                          Reference
                        </span>
                      </span>
                    </h4>
                  </div>
                  <button
                    type="button"
                    className="little-card-btn btn btn-default b-1"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <footer id="footer" className="texty-footer ">
            <div className="footer-container">
              <div className="footer-social">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:harun@broftware.com"
                >
                  Email
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/HarunInam"
                >
                  Facebook
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/haruninam"
                >
                  Linkedin
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@haruninam"
                >
                  Medium
                </a>
              </div>
              <h5>© Harun Inam</h5>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
