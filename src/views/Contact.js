import React from "react";

const Contact = () => (
  <div className="columns" style={{ marginTop: "52px" }}>
    <div className="column" />
    <div className="column is-two-thirds">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Ralph Parkison
          </p>
          <a className="card-header-icon">
            <span className="icon">
              <i className="fa fa-angle-down" />
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            <b>
              Howdy if you want to reach out with me feel free to send me an email or contact me on facebook.
            </b>
            {" "}
            <br />
            If you would like to see the source code to this site go
            {" "}
            <a href="https://github.com/rparkisoniii/my-site">here</a>
          </div>
        </div>
        <footer className="card-footer">
          <a href="mailto:chesslunatic@gmail.com" className="card-footer-item">
            <b>Email</b>
          </a>
          <a
            className="card-footer-item"
            href="https://www.facebook.com/profile.php?id=100006292510525"
          >
            <b>Facebook</b>
          </a>
          <a
            className="card-footer-item"
            href="https://github.com/rparkisoniii/"
          >
            <b>Github</b>
          </a>
          <a
            className="card-footer-item"
            href="https://www.linkedin.com/in/ralph-parkison-7b759bb3/"
          >
            <b>Linkedin</b>
          </a>
        </footer>
      </div>
    </div>
    <div className="column" />
  </div>
);

export default Contact;
