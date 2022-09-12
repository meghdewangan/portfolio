import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Meghraj Dewangan </span>
            from <span className="purple"> Raipur, Chhattisgarh, India.</span>
            <br />I am currently pursuing B.Tech Final Year department of 
            Computer Science and Engineering at Government Engineering College Bilaspur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learn New Things...
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel...
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games...
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Trying to make things that develop new thinking!"{" "}
          </p>
          <footer className="blockquote-footer">Meghraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
