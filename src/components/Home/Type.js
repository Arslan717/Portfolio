import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ backgroundColor: "#1a1a1d", color: "#c5c6c7", fontFamily: "'Press Start 2P', cursive" }}>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Freelancer",
            "MERN Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
