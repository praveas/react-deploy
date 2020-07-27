//import classnames from "classnames";
import PropTypes from "prop-types";

// Load BootStrap
import React from "react";
import Image from "react-bootstrap/Image";

const InputGroup = ({ href, src, value, alt }) => {
  return (
    <ImageEvent
      date={date}
      className="text-center"
      text={projectName}
      src={src}
    >
      <div className="d-flex justify-content-between flex-column mt-1">
        <div>
          <Accordion>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="p-2 text-center accordian-main"
              >
                PROJECT DETAILS
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0" className="text-left">
                <Card.Body>
                  <strong>Description:</strong> An app that detects face in a
                  picture.
                  <hr />
                  <strong>Features:</strong>
                  <ul className="list-styles pt-1">
                    <li>Register new user</li>
                    <li>Signin exiting user</li>
                    <li>Keep tracks of entries for each user</li>
                  </ul>
                  <hr />
                  <strong>Tech used:</strong>
                  <ul>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_REACT}
                          alt="React"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        React
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_NODE_JS}
                          alt="Node.js"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Node.js
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_EXPRESS}
                          alt="Express"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        Express
                      </span>
                    </li>
                    <li>
                      <span className="p-2">
                        <Image
                          src={L_POSTGRESQL}
                          alt="PostgreSQL"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        PostgreSQL
                      </span>
                    </li>
                  </ul>
                  <hr />
                  <em>
                    <strong>SignUp/ Signin:</strong>
                    <br />
                    <br />
                    You can <strong>register</strong> as new user or{" "}
                    <strong>log in</strong> using the demo account below.
                    <br />
                    <br />
                    <strong>Demo Account Details:</strong>
                    <br />
                    email: demo@demo.com
                    <br />
                    password: demo
                  </em>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className="d-flex justify-content-between flex-nowrap text-center">
          <UrlButton
            href="https://smart-face-detect-app.herokuapp.com/"
            target="_blank"
          >
            SEE LIVE
          </UrlButton>
          <UrlButton
            href="https://github.com/akjha96/Smart_Brain"
            target="_blank"
          >
            SOURCE CODE
          </UrlButton>
          <UrlButton
            href="https://www.youtube.com/watch?v=ZZYSpi_blL0"
            target="_blank"
          >
            WATCH VIDEO
          </UrlButton>
        </div>
      </div>
    </ImageEvent>
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
