//import classnames from "classnames";
import PropTypes from "prop-types";

// Load BootStrap
import React from "react";
import Image from "react-bootstrap/Image";

const InputGroup = ({ href, src, value, alt }) => {
  return (
    <span className="p-2">
      <a
        className="text-dark text-decoration-none"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={src} alt={alt} rounded className="image-style m-1"></Image>{" "}
        {value}
      </a>
    </span>
  );
};

InputGroup.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

InputGroup.defaultProps = {
  type: "text",
};
export default InputGroup;
