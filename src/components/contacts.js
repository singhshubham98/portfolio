/**
 * Created by Shubham Singh on 29/03/19.
 */

import React from "react";

import "../css/contact.css";
const Contacts = () => (
  <div className="uk-container contacts uk-text-left uk-margin-large-top uk-margin-large-bottom">
    <div uk-grid="true">
      <div className="uk-width-1-6@s uk-width-1-6@m" />
      <div className="uk-width-2-3@s uk-width-2-3@m">
        <h2 className="page-title uk-text-bold uk-text-uppercase color-grey-54">
          Contact
        </h2>

        {/*Contacts*/}
        <section className="uk-margin-large-top">
          <div className="mail-phone uk-flex uk-flex-wrap">
            <div className="mail uk-margin-medium-right">
              <span className=" color-primary text-medium">Email:</span>
              <a
                className="color-grey-54"
                href="mailto:shubhamsingh4204@gmail.com?Subject=Hello"
                target="_top"
              >
                {" "}
                shubhamsingh4204@gmail.com
              </a>
            </div>
            <div className="phone uk-margin-medium-right">
              <span className=" color-primary text-medium">Phone:</span>
              <span className="color-grey-54"> +91 9119637832</span>
            </div>
          </div>
        </section>

        {/*Social Links*/}
        <section className="social uk-margin-large-top">
          <h4 className="title-deco">Social Links</h4>
          <div className="social-list">
            <div className="row-1 uk-flex uk-flex-wrap">
              <div className="social-item uk-margin-large-right">
                <span
                  className="icon uk-margin-small-right"
                  uk-icon="icon:github"
                />
                <a href="https://github.com/singhshubham98" target="blank">
                  /singhshubham
                </a>
              </div>

              <div className="social-item">
                <span
                  className="icon uk-margin-small-right"
                  uk-icon="icon:twitter"
                />
                <a href="https://x.com/shubhamsingh425" target="blank">
                  /singhshubham
                </a>
              </div>
            </div>

            <div className="row-2 uk-flex uk-flex-wrap uk-margin-small-top">
              <div className="social-item uk-margin-large-right">
                <span
                  className="icon uk-margin-small-right"
                  uk-icon="icon:linkedin"
                />
                <a
                  href="https://www.linkedin.com/in/shubham-singh-a81638148"
                  target="blank"
                >
                  /singhshubham
                </a>
              </div>

              <div className="social-item">
                <span
                  className="icon uk-margin-small-right"
                  uk-icon="icon:facebook"
                />
                <a href="https://www.facebook.com/shubham4204" target="blank">
                  /singhshubham
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*Contact Form*/}
        <section className="contact-form uk-margin-large-top">
          <h4 className="title-deco">Write to me</h4>
          <div className="form-container">
            <form
              target="blank"
              method="POST"
              action="https://formspree.io/shubhamsingh4204@gmail.com"
            >
              <fieldset className="uk-fieldset">
                <div className="uk-margin">
                  <input
                    className="uk-input text-size-14"
                    name="name"
                    type="text"
                    placeholder="YOUR NAME"
                  />
                </div>

                <div className="uk-margin">
                  <input
                    className="uk-input text-size-14"
                    name="email"
                    type="email"
                    placeholder="YOUR EMAIL"
                  />
                </div>

                <div className="uk-margin">
                  <textarea
                    className="uk-textarea text-size-14"
                    name="query"
                    rows="5"
                    placeholder="YOUR QUERY"
                  />
                </div>
                <input
                  type="hidden"
                  name="_subject"
                  value="Query From Singhshubham"
                />
                <input type="hidden" name="_format" value="plain" />
                <div className="uk-margin">
                  <input
                    type="submit"
                    className="submit-btn uk-button"
                    value="SEND"
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Contacts;
