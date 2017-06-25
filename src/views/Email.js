import React, { Component } from "react";
import CustomEditor from "../widgets/Editor";
import {
  ContentState,
  EditorState,
  convertToRaw,
  convertFromRaw
} from "draft-js";
import draftToHtml from "draftjs-to-html";

class Email extends Component {
  email = "chesslunatic@gmail.com";
  subject = "From rparki.com inquiry";
  constructor(props) {
    super(props);
    let editorState = null;
    if (localStorage.getItem("email-data")) {
      const data = convertFromRaw(
        JSON.parse(localStorage.getItem("email-data"))
      );
      editorState = EditorState.createWithContent(data);
    }
    this.state = {
      editorState
    };
  }
  sendMail() {}
  render() {
    return (
      <div className="columns" style={{ marginTop: "52px" }}>
        <div id="html-container" className="column" />
        <div className="column is-two-thirds">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Email
              </p>
              <a className="card-header-icon">
                <span className="icon">
                  <i className="fa fa-angle-down" />
                </span>
              </a>
            </header>
            <CustomEditor
              editorState={this.state.editorState}
              onEditorStateChange={state => {
                const data = state.getCurrentContent();
                localStorage.setItem(
                  "email-data",
                  JSON.stringify(convertToRaw(data))
                );
                this.setState({ editorState: state });
              }}
            />
            <footer className="card-footer">
              <button
                onClick={() => this.sendMail()}
                className="button is-primary"
                style={{ flex: 1 }}
              >
                <span style={{ color: "white" }}>Send</span>
              </button>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Email;
