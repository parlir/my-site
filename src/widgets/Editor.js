import React, { Component, PropTypes } from "react";
import CodeMirror from "react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/solarized.css";
import "./Editor.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.initCode
    };
  }
  getCode() {
    return this.state.code;
  }
  getEvaluatedCode() {
    try {
      return new Function(this.state.code)();
    } catch (err) {
      return err.message;
    }
  }
  render() {
    const options = {
      lineNumbers: true,
      theme: `solarized ${this.props.themeColor}`,
      mode: "javascript",
      ...this.props.extraOptions
    };
    return (
      <div
        style={{
          ...this.props.containerStyle
        }}
      >
        <CodeMirror
          value={this.state.code}
          onChange={code =>
            this.setState(
              state => ({ ...state, code }),
              () => this.props.onCodeChange(this.state.code)
            )}
          options={options}
          mode="javascript"
        />
      </div>
    );
  }
}

Editor.propTypes = {
  initCode: PropTypes.string,
  themeColor: PropTypes.oneOf(["light", "dark"]),
  extraOptions: PropTypes.object,
  containerStyle: PropTypes.object,
  onCodeChange: PropTypes.func
};

Editor.defaultProps = {
  initCode: "// Enter your javascript code here.",
  themeColor: "dark",
  extraOptions: {},
  containerStyle: {},
  onCodeChange: () => {}
};

export default Editor;
