import React from "react";
import Typewriter from "typewriter-effect";

const TypingText = () => {
  return (
    <div style={styles.container}>
      <Typewriter
        options={{
          loop: true, // Enables built-in looping if available
          delay: 75, // Typing speed
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Designer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Freelancer")
            .pauseFor(1000)
            .deleteAll()
            .start(); // Start the typewriter effect once, no need for callFunction
        }}
      />
    </div>
  );
};

export default TypingText;

const styles = {
  container: {
    fontWeight: "700",
    fontSize: "25px",
    color: "#000",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
