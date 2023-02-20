import React, {useEffect} from 'react'
import { checkWin } from '../helpers/helpers';

// Component to handle all Pop-ups 
const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    let finalMessage = ''; // Let player know whether he won or lost
    let finalMessageRevealWord = ''; // Reveal the message to the player after he lost the game
    let playable = true;

    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = 'Congratulations! You won 👍🏻';
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
        finalMessage = 'Unfortunately you lost 👎🏻';
        finalMessageRevealWord = `... the word was: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => setPlayable(playable)); // After render, using our state and setting it to 'playable'

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>

  )
}

export default Popup
