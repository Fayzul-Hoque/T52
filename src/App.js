import React, {useState, useEffect} from "react"; // We will be using React hooks 'useState' and 'useEffect'
import Header from "./Components/Header"; // Header Component
import Figure from "./Components/Figure"; // Figure Component (Figure of the hangman)
import WrongLetters from "./Components/WrongLetters"; // Component to contain all the wrong letters 
import Word from "./Components/Word"; // Words Component
import Popup from "./Components/Popup"; // Player Pop-up Component
import Notification from "./Components/Notification"; // Player Notification Component
import Help from "./Components/Help"; // Player Help Component
import "../src/App.css"
import { showNotification as show, checkWin } from './helpers/helpers'; // helper file to assist with notifications, and to check if player has won

// Main array of words used to play the game
let words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {

  // Initialising our states
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // Utiliising React hook 'useEffect' to handle events => Each time the player presses a key
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) { // <- Alphabet A-Z
        const letter = key.toLowerCase(); // -> Transform all to lower-case
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown); // Remove event listener to avoid multiple listeners
  }, [correctLetters, wrongLetters, playable]); // <- any time these get updated, this function is called

  // Function for when the user wants to play again
  function playAgain() { 
    setPlayable(true);

    // Empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    let random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
     <Header />
     <div className="game-container">
     <Figure wrongLetters={wrongLetters}/>
     <WrongLetters wrongLetters={{wrongLetters}}/>
     <Word selectedWord={selectedWord} correctLetters={correctLetters} />
     <Help />
     </div>
     <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
     <Notification showNotification={showNotification} />
    </>
  )
}

export default App;
