import React, { PropTypes } from "react";

const Card = ({ header, children, footer }) => (
  <div className="card">
    <header className="card-header">
      {header}
    </header>
    <div className="card-content">
      {children}
    </div>
    <footer className="card-footer">
      {footer}
    </footer>
  </div>
);

Card.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired
};

export default Card;
