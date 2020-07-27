import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import L_HTML5 from "../../assets/img/skills/html-5.svg";

import "./skills.styles.css";
import InputGroup from "../../components/common/InputGroup";

import {
  L_HTML5,
  L_CSS3,
  L_SASS,
  L_BOOTSTRAP4,
  L_REACT,
  L_REDUX,
  L_REACT_ROUTER,
  L_REACT_BOOTSTRAP,
  L_NODE_JS,
  L_EXPRESS,
  L_DJANGO,
  L_FLASK,
  L_POSTGRESQL,
  L_MSSQL,
  L_GIT,
  L_HEROKU,
  L_DIGITAL_OCEAN,
  L_GITHUB_PAGES,
  L_PYTHONANYWHERE,
  L_JAVASCRIPT,
  L_PYTHON,
  L_PHP,
  L_MONGO,
  L_PHONEGAP,
} from "../../assets/img/skills";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Frontend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <InputGroup
                    href="https://en.wikipedia.org/wiki/HTML5"
                    src={L_HTML5}
                    value="HTML5"
                    alt="HTML5"
                  />
                  <InputGroup href="#" src={L_CSS3} value="CSS3" alt="CSS3" />
                  <InputGroup
                    href="#"
                    src={L_JAVASCRIPT}
                    value="JavaScript"
                    alt="JavaScript"
                  />
                  <InputGroup href="#" src={L_SASS} value="SASS" alt="SASS" />
                  <InputGroup
                    href="#"
                    src={L_BOOTSTRAP4}
                    value="BootStrap4"
                    alt="BootStrap4"
                  />
                  <InputGroup
                    href="#"
                    src={L_REACT}
                    value="ReactJS"
                    alt="ReactJS"
                  />
                  <InputGroup
                    href="#"
                    src={L_REDUX}
                    value="Redux"
                    alt="Redux"
                  />
                  <InputGroup
                    href="#"
                    src={L_REACT_ROUTER}
                    value="React Router"
                    alt="React Router"
                  />
                  <InputGroup
                    href="#"
                    src={L_REACT_BOOTSTRAP}
                    value="React BootStrap"
                    alt="React BootStrap"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Backend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <InputGroup
                    href="#"
                    src={L_NODE_JS}
                    value="NodeJS"
                    alt="NodeJS"
                  />
                  <InputGroup
                    href="#"
                    src={L_EXPRESS}
                    value="ExpressJS"
                    alt="ExpressJS"
                  />
                  <InputGroup href="#" src={L_PHP} value="PHP" alt="PHP" />
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Hosting Platforms
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <InputGroup
                    href="#"
                    src={L_EXPRESS}
                    value="ExpressJS"
                    alt="ExpressJS"
                  />
                  <InputGroup
                    href="https://www.heroku.com/"
                    src={L_HEROKU}
                    value="Heroku"
                    alt="Heroku"
                  />

                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href="https://www.digitalocean.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={L_DIGITAL_OCEAN}
                        alt="Digital Ocean"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      Digital-Ocean
                    </a>
                  </span>

                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href="https://pages.github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={L_GITHUB_PAGES}
                        alt="GitHub Pages"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      GitHub-Pages
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Programming Languages
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href="https://www.javascript.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={L_JAVASCRIPT}
                        alt="JavaScript"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      JavaScript
                    </a>
                  </span>

                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href="https://www.python.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={L_PHP}
                        alt="PHP"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      PHP
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Database
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href="https://www.postgresql.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={L_POSTGRESQL}
                        alt="PostgreSQL"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      PostgreSQL
                    </a>
                  </span>
                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href="https://www.microsoft.com/en-us/sql-server/sql-server-2019"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={L_MSSQL}
                        alt="MS-SQL"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      MS-SQL
                    </a>
                  </span>
                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={L_MONGO}
                        alt="MongoDB"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      MONGODB
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Version Control
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a
                      className="text-dark text-decoration-none"
                      href="https://git-scm.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={L_GIT}
                        alt="GIT"
                        rounded
                        className="image-style m-1"
                      ></Image>{" "}
                      GIT
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
