// This function will handle notification duration 
export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000); // <- Our setter will be true, then after 2 seconds it will go back to default (false)
  }
  
  // This function will check whether player has won
  export function checkWin(correct, wrong, word) {
    let status = 'win';
  
    // Check if player has won
    word.split('').forEach(letter => {
      if(!correct.includes(letter)){
        status = '';
      }
    });
    
    // Check if player has lost
    if(wrong.length === 6) status = 'lose'; // A player has 6 chances, if exceeded then the player is notified that he lost
  
    return status
  }