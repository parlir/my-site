import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CustomEditor = ({ editorState, onEditorStateChange }) => (
  <Editor
    editorState={editorState}
    toolbarClassName="home-toolbar"
    wrapperClassName="home-wrapper"
    editorClassName="home-editor"
    onEditorStateChange={onEditorStateChange}
    editorStyle={{ paddingLeft: "15px", paddingRight: "15px" }}
  />
);

export default CustomEditor;
