import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
const myName = "Prabesh Pokharel";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;{myName}</strong>
                <br />A passionate programmer born and raised in Nepal,
                currently residing in Sydney, Australia.
                <br />
                About Me, I love playing games and just love learning about new
                technological changes to build the product building fast,
                scalable and reliable.
                <br />
                Four years’ experience in PHP, developing web applications and
                mobile applications.
                <br />
                Started programming from small flash games, web apps at school
                age, and joined Real Time Solution for professional internship,
                part time and full time job of PHP developer after high school.
                <br /> <br />
                BIM (Hons) Bachelors of Information (2014) - St. Xaviers
                College, Kathmandu, Nepal
                <br />
                Masters in Information Systems (2017) - Central Queensland
                University, Sydney, Australia
                <br />
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/148UcaqxF0pjzIRi22zRYywO7sMJ5y64b/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/praveas"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/prabesh-pokharel-3369a272/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
