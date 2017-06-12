import React from "react";

import TextReader from "../widgets/TextReader";
import AsciiPic from "../widgets/AsciiPic";

const MainSection = () => (
  <div style={{ ...styles.textContainer, height: "190px" }}>
    <div>
      <TextReader text="Summary" speed={70} style={styles.header} />
    </div>
    <div>
      <TextReader
        text="Hi this is my personal website. If you wanna run some javascript code go to the editor page. If you wanna see ma blog go to the blog page. If ya need to contact me go to the contact page. It's just that easy &#9786;."
        speed={10}
        style={{ fontSize: 13 }}
      />
    </div>
  </div>
);

const CodingSection = () => (
  <div style={{ ...styles.textContainer, height: "190px" }}>
    <div>
      <TextReader text="Coding" speed={70} style={styles.header} />
    </div>
    <div>
      <TextReader
        text="I am a programmer. I like using javascript, python, c# and sass. I work mostly in react, react-native, django, asp.net. "
        speed={10}
        style={{ fontSize: 13 }}
      />
    </div>
  </div>
);

const RecreationSection = () => (
  <div style={{ ...styles.textContainer, height: "80px" }}>
    <div>
      <TextReader text="Recreation" speed={70} style={styles.header} />
    </div>
    <div>
      <TextReader
        text="For recreation I enjoy playing chess, running and travel. I am currently creating a fitness app. "
        speed={10}
        style={{ fontSize: 13 }}
      />
    </div>
  </div>
);

const About = () => (
  <div className="container">
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column" style={{ marginBottom: "20px" }}>
            <AsciiPic />
          </div>
          <div className="column is-two-thirds">
            <MainSection />
            <CodingSection />
            <RecreationSection />
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
  textContainer: { height: "150px", paddingRight: "25px", paddingLeft: "25px" }
};

export default About;
