import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to Dream Foundry Games! 
                <span className="wave" role="img" aria-labelledby="wave">
                  🎮
                </span>
              </h1>

              <h1 className="heading-name">
                WE CREATE
                <strong className="main-name"> IMMERSIVE EXPERIENCES</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#c5c6c7" }}>
                At Dream Foundry Games, we are dedicated to crafting magical gaming experiences that captivate and inspire players around the world.
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
