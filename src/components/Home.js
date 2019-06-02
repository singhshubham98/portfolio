/**
 * Created by Shubham Singh on 29/03/19.
 */
import React, { Component } from "react";
import "../css/home.css";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="header">
            <div className="photo-wrapper">
              <img
                alt="Shubham Singh Avatar"
                id="avatar"
                className="photo"
                src="https://avatars3.githubusercontent.com/u/25260334?v=4"
              />
            </div>
            <h1 className="name">Shubham Singh</h1>
            <h3 className="title">MERN stack Developer</h3>
            <div className="about">
              <div className="markdown">
                <p className="paragraph">
                  Indian Institute of Information Technology, Vadodara
                </p>
              </div>
            </div>
            <div>
              <ul className="uk-navbar-nav uk-flex-inline">
                <li>
                  <a
                    href="https://github.com/singhshubham98"
                    className="uk-icon-link"
                    uk-icon="icon:github"
                    target="blank"
                  />
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shubham-singh-a81638148"
                    className="uk-icon-link"
                    uk-icon="icon:linkedin"
                    target="blank"
                  />
                </li>
                <li>
                  <a
                    href="https://twitter.com/shubhamsingh425"
                    className="uk-icon-link"
                    uk-icon="icon:twitter"
                    target="blank"
                  />
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/shubham4204"
                    className="uk-icon-link"
                    uk-icon="icon:facebook"
                    target="blank"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
