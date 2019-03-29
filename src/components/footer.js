/**
 * Created by Shubham Singh on 29/03/19.
 */
import React from "react";

import "../css/footer.css";

const Footer = () => (
  <div className="uk-container uk-margin-medium-top uk-margin-medium-bottom">
    <footer className="uk-text-center">
      <ul className="uk-navbar-nav uk-flex-inline">
        <li>
          <a
            href="https://github.com/singhshubham98"
            className="uk-icon-link"
            is
            uk-icon="icon:github"
            target="blank"
          />
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shubham-singh-a81638148"
            className="uk-icon-link"
            is
            uk-icon="icon:linkedin"
            target="blank"
          />
        </li>
        <li>
          <a
            href="https://twitter.com/shubhamsingh425"
            className="uk-icon-link"
            is
            uk-icon="icon:twitter"
            target="blank"
          />
        </li>
        <li>
          <a
            href="https://www.facebook.com/shubham4204"
            className="uk-icon-link"
            is
            uk-icon="icon:facebook"
            target="blank"
          />
        </li>
      </ul>
    </footer>
  </div>
);

export default Footer;
