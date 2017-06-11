import React, { PropTypes } from "react";
import TextReader from "./TextReader";

const TextMultiReader = props => (
  <div>
    {props.texts.map(text => <div><TextReader text={text} {...props} /> </div>)}
  </div>
);

TextMultiReader.propTypes = {
  texts: PropTypes.array.isRequired
};

export default TextMultiReader;
