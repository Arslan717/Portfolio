import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer style={{ backgroundColor: "#1a1a1d", color: "#c5c6c7", fontFamily: "'Press Start 2P', cursive", padding: "20px", textAlign: "center" }}>
      <p>© 2024 Dream Foundry Games. All Rights Reserved.</p>
      <p>1113 East Carson Street, Floor 2, Pittsburgh, Pa 15203</p>
      <p>Contact: <a href="mailto:player_one@dreamfoundrygames.com" style={{ color: "#66fcf1" }}>player_one@dreamfoundrygames.com</a></p>
      <div>
        <a href="https://www.facebook.com/dreamfoundrygames" style={{ margin: "0 10px", color: "#66fcf1" }}>Facebook</a>
        <a href="https://twitter.com/dreamfoundrygames" style={{ margin: "0 10px", color: "#66fcf1" }}>Twitter</a>
        <a href="https://www.twitch.tv/dreamfoundrygames" style={{ margin: "0 10px", color: "#66fcf1" }}>Twitch</a>
        <a href="https://www.linkedin.com/company/dreamfoundrygames" style={{ margin: "0 10px", color: "#66fcf1" }}>LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
