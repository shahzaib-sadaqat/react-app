import React, { useState, useEffect } from "react";

function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1000,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Index for the current word
  const [isDeleting, setIsDeleting] = useState(false); // Track if we're deleting
  const [typingComplete, setTypingComplete] = useState(false); // Track when typing is complete

  useEffect(() => {
    const currentText = texts[currentWordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    // Handle typing and deleting logic
    const type = () => {
      setDisplayedText((prev) => {
        if (!isDeleting) {
          // Typing phase
          if (prev.length < currentText.length) {
            return currentText.slice(0, prev.length + 1);
          } else {
            // Once typing is complete, set typingComplete to true and start deleting after pause
            setTypingComplete(true);
            setTimeout(() => setIsDeleting(true), pause);
            return prev;
          }
        } else {
          // Deleting phase
          if (prev.length > 0) {
            return currentText.slice(0, prev.length - 1);
          } else {
            // Move to the next word after deleting the current one
            const nextIndex = (currentWordIndex + 1) % texts.length;
            setCurrentWordIndex(nextIndex); // Move to the next word
            setIsDeleting(false);
            setTypingComplete(false); // Reset typing complete flag
            return ""; // Reset the displayed text for the next word
          }
        }
      });
    };

    const typeInterval = setInterval(type, speed);

    return () => clearInterval(typeInterval); // Cleanup interval on component unmount or re-render
  }, [
    currentWordIndex,
    isDeleting,
    typingComplete,
    texts,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return <div>{displayedText}</div>;
}

export default function App() {
  return (
    <div>
      <Typewriter
        texts={["Developer", "Designer", "Freelancer"]} // Sequence of words
        typingSpeed={100} // Speed at which text types
        deletingSpeed={50} // Speed at which text deletes
        pause={1000} // Pause time before deleting
      />
    </div>
  );
}
