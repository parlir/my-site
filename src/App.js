import React, { Component } from "react";
import NavBar from "./widgets/NavBar";
import AsciiPic from "./widgets/AsciiPic";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            justifyContent: "flex-start",
            display: "flex",
            border: "1px solid #fff"
          }}
        >
          <AsciiPic />
        </div>
      </div>
    );
  }
}

export default App;
