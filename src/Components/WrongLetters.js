import React from "react";

// Component to contains all the wrong letters
const WrongLetters = ({ wrongLetters }) => {
    return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>wrong</p>}
        {wrongLetters.wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>) // <- Unique key for .map method
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ",", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
