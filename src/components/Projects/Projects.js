import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mobiworld from "../../Assets/Projects/mobiworld.png";
import weather from "../../Assets/Projects/weather.png";
import url from "../../Assets/Projects/url.png";
import word from "../../Assets/Projects/word.png";
import ludo from "../../Assets/Projects/ludo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobiworld}
              isBlog={false}
              title="Mobiworld"
              description="Academic Team Project: plateform for buying and selling used phones. In this the customer mentions its image and other details 
              to sell the mobile and which is stored in the database and visible to buyer. 
              The Technology of This Web app usses React fronted along with css and material UI, Node.js, Express REST API, MongoDb database"
              ghLink="https://github.com/meghdewangan/MOBIWORLD"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Web App"
              description="Using Technology : html, css, javascript, mongodb, OpenWeatherMap Api - The weather web app does a weather report show by
              fetching api from the open weather map."
              ghLink="https://github.com/meghdewangan/Weather-Web-App"
              demoLink="https://meghdewangan.github.io/Weather-Web-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={url}
              isBlog={false}
              title="Url Shortener"
              description="Url shortener web application store the given links
              and input in the database. The name of the input is redirected to the website of
              that url."
              ghLink="https://github.com/meghdewangan/URL-SHORTENER"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={word}
              isBlog={false}
              title="Guess Coding Word Game"
              description="Using Technology: HTML, CSS, JavaScript and JavaScript randome function: In this project,
               the user guesses the given words and enters the word in the input field, which the app checks and tells
               whether it is correct or not."
              ghLink="https://github.com/meghdewangan/Guess-The-Word-Game"
              demoLink="https://meghdewangan.github.io/Guess-The-Word-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ludo}
              isBlog={false}
              title="Ludo Game"
              description="There are two dice in this project, which have to be guessed that how many numbers will come when the dice is rotated, the winner is the desite."
              ghLink="https://github.com/meghdewangan/Ludo-Game"
              demoLink="https://meghdewangan.github.io/Ludo-Game/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
