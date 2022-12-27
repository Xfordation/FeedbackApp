import React from "react";
import PropTypes from "prop-types";
function Header({ text }) {
  return (
    <header style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#ff6a95" }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Setting Types to To Props
Header.propTypes = {
  text: PropTypes.string,
};

// Default Property Value
Header.defaultProps = {
  text: "FeedBack UI",
};

export default Header;
