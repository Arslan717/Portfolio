import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section" style={{ backgroundColor: "#1a1a1d", color: "#c5c6c7", fontFamily: "'Press Start 2P', cursive" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.5em", paddingBottom: "20px", color: "#66fcf1" }}>
              OUR MISSION
            </h1>
            <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#c5c6c7" }}>
              At Dream Foundry Games, our mission is to craft magical gaming experiences that captivate and inspire players around the world.
            </p>
            <h1 style={{ fontSize: "2.5em", paddingBottom: "20px", color: "#66fcf1" }}>
              WHO WE ARE
            </h1>
            <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#c5c6c7" }}>
              We are a team of passionate gamers and developers dedicated to pushing the boundaries of interactive entertainment. From concept to launch, we bring your gaming visions to life.
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" style={{ border: "5px solid #66fcf1", borderRadius: "10px" }} />
          </Col>
        </Row>
        <h1 className="project-heading" style={{ color: "#66fcf1" }}>
          Gaming <strong className="purple">Skillset</strong>
        </h1>
        <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#c5c6c7" }}>
          Our team excels in game design, development, and testing, with expertise in Unity, Unreal Engine, and cutting-edge VR/AR technologies.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
          <img src="https://www.dreamfoundrygames.com/assets/rive-logo.png" alt="Rive Logo" style={{ width: "50px", margin: "0 10px" }} />
          <img src="https://www.dreamfoundrygames.com/assets/figma-logo.png" alt="Figma Logo" style={{ width: "50px", margin: "0 10px" }} />
          <img src="https://www.dreamfoundrygames.com/assets/unity-logo.png" alt="Unity Logo" style={{ width: "50px", margin: "0 10px" }} />
          <img src="https://www.dreamfoundrygames.com/assets/procreate-icon.png" alt="Procreate Icon" style={{ width: "50px", margin: "0 10px" }} />
          <img src="https://www.dreamfoundrygames.com/assets/adobe-cc-logo.png" alt="Adobe CC Logo" style={{ width: "50px", margin: "0 10px" }} />
        </div>
        <Techstack />
        <h1 className="project-heading" style={{ color: "#66fcf1" }}>
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
