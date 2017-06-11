import React, { Component } from "react";
import Editor from "../widgets/Editor";

class Coding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "Program output..."
    };
  }
  setCodeOutput() {
    this.setState({ output: this.refs.editor.getEvaluatedCode() });
  }

  render() {
    return (
      <div>
        <Editor ref="editor" />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            flex: 1
          }}
        >
          <button
            className="button is-primary"
            onClick={this.setCodeOutput.bind(this)}
          >
            Run Code
          </button>
          <textarea
            rows={2}
            style={{
              resize: "none",
              flex: 5,
              padding: 5,
              color: "white",
              backgroundColor: "#555",
              border: "0px"
            }}
            value={this.state.output}
          />
        </div>
      </div>
    );
  }
}

export default Coding;
