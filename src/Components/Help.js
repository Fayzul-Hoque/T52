import React from "react";
import "../Components/Help.css";

// Component to show the rules of the game when the player clicks on 'help' button
function Help() {
  return (
    <div>
      <button onClick={function() {
        alert('Rules \n\n Object: One player thinks of a word and the other tries to guess it by guessing letters. Each incorrect guess brings you closer to being "hanged." \n\n 1. Each player has 6 chances, and each incorrect letter brings the player closer to being "hanged" \n\n  2. Each time a player guesses the correct letter, it is added to the word row \n\n 3. Each time a player guesses an incorrect letter, it is added to a separate row of letters \n\n 4. A player will not be able to guess the same letter more than once'
        )
}}>Help</button>
        
    </div>
  );
}

export default Help;
