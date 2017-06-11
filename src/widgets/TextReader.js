import React, { Component, PropTypes } from "react";

class TextReader extends Component {
  // Basic widget that displays text based on speed passed.
  intervalID: number;
  constructor(props) {
    super(props);
    this.state = {
      curPosition: 0,
      textDisplay: ""
    };
  }
  incrementText() {
    const nextPosition = this.state.curPosition + 1;
    this.setState({
      curPosition: nextPosition,
      textDisplay: this.props.text.substring(0, nextPosition)
    });
    if (nextPosition >= this.props.text.length) {
      clearInterval(this.intervalID);
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.incrementText(), this.props.speed);
  }
  render() {
    return (
      <span className={this.props.className} style={this.props.style}>
        {this.state.textDisplay}
      </span>
    );
  }
}

TextReader.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};

export default TextReader;
