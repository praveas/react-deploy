//import classnames from "classnames";
import PropTypes from "prop-types";

// Load BootStrap
import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";

const ExperienceGroupInput = ({
  imageLogo,
  imageLogoAlt,
  position,
  domain,
  role,
  jobdesc,
  techUsed,
  date,
}) => {
  return (
    <Jumbotron className="jumbo-style">
      <Container>
        <Tilt options={{ max: 25 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                src={imageLogo}
                alt={imageLogoAlt}
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">{position}</Card.Title>
              </div>
              <div>
                <Card.Text className="text-center style">
                  <strong>Domain:</strong> {domain}
                  <br />
                  <strong>Role:</strong> {role}
                  <br />
                  <strong>Description:</strong> {jobdesc}
                  <br />
                  <strong>Technology:</strong> {techUsed}
                  <br />
                  <strong>Duration:</strong> {date}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Container>
    </Jumbotron>
  );
};

ExperienceGroupInput.propTypes = {
  imageLogo: PropTypes.string,
  imageLogoAlt: PropTypes.string,
  position: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  role: PropTypes.string,
  jobdesc: PropTypes.string,
  techUsed: PropTypes.string,
  date: PropTypes.string,
};

ExperienceGroupInput.defaultProps = {
  type: "text",
};
export default ExperienceGroupInput;
