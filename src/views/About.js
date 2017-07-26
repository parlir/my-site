import React from "react";

import AsciiPic from "../widgets/AsciiPic";

const About = () => (
  <div className="container">
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column" style={{ marginBottom: "20px" }}>
            <AsciiPic />
          </div>
          <div className="column is-two-thirds">
            <div className="columns">
              <div className="column">
                <div>
                  <span style={styles.header}>
                    Summary
                  </span>
                </div>
                <div className="content">
                  <span style={{ fontSize: 13 }}>
                    Hi this is my personal website. It is written in react and is currently hosted off s3. Feel free to contact me. Cheers ☺.
                  </span>
                </div>
                <div style={styles.divider} />
                <span style={styles.header}>
                  Experience
                </span>
                <div className="content">
                  <span style={{ fontSize: 13 }}>
                    I have worked at Epic for around a year and a half and before that I worked as a freelancer and built appraisal software for Berg Appraisals. Currently I am working on building a fitness app that uses a subscription model to pay trainers when users subscribed to their plan do not accomplish the goals set for a given day.
                  </span>
                </div>
              </div>
              <div className="column">
                <div>
                  <span style={styles.header}>Recreation</span>
                </div>
                <div style={{ marginBottom: 22 }} className="content">
                  <span style={{ fontSize: 13 }}>
                    For recreation I enjoy playing chess, running and travel. I enjoy looking at code on github and hearing about new tech. If you play me on lichess I will probably be using the halloween gambit.
                  </span>
                </div>
                <div style={styles.divider} />
                <div>
                  <span style={styles.header}>Coding</span>
                </div>
                <div>
                  <span style={{ fontSize: 13 }} className="content">
                    I do mostly web dev I've worked with a fair number of web frameworks (Django, Asp.net, Node etc...). I have done work in both the front end and the backend. You can checkout some of my code from my github page. Currently I am working on a fitness app called chizzli which you can get off google play and apple store. You can also checkout the web app at chizzli.com.
                  </span>
                </div>
              </div>
              <div className="column">
                <span style={styles.header}>
                  Tech I know
                </span>
                <div className="content">
                  <ul>
                    <li>javscript</li>
                    <li>python</li>
                    <li>react</li>
                    <li>react-native</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Some functional programming</li>
                    <li>OOP</li>
                    <li>General stuff like data structs etc...</li>
                    <li>Emacs</li>
                  </ul>
                </div>
                <div style={styles.divider} />
                <div>
                  <span style={styles.header}>Some Projects</span>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      appraisal software
                    </li>
                    <li>
                      server run junit testing
                    </li>
                    <li>
                      web barcoding
                    </li>
                    <li>
                      web printing
                    </li>
                    <li>Fitness app for ios/android and web</li>
                    <li>email blaster</li>
                    <li>webtris</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  header: {
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "cursive",
    borderBottom: "1px solid #999"
  },
  divider: { marginBottom: 25 }
};

export default About;
