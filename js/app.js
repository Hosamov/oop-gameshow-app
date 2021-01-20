/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*
 * Global Variables
 */
//Global DOM variables used in Phrase class
const phraseSection = document.getElementById('phrase');
const ul = document.querySelector('ul');
const ulChild = ul.children;
const hideClass = document.querySelectorAll('.hide'); //target all elements with a class of 'hide'
const showClass = document.querySelectorAll('.show'); //target all elements with a class of 'show'

//Global variables used in Game class
const overlay = document.querySelector('#overlay');
const tries = document.querySelectorAll('.tries');
const images = document.querySelectorAll('img[src="images/liveHeart.png"]');
const gameOverMessage = document.getElementById('game-over-message');
let livesLost = 0; //track lives lost in removeLife() method

//Global variables used in app.js
const resetButton = document.getElementById('btn__reset'); //target btn__reset
const button = document.querySelectorAll('.key');
let game = ''; //declare (blank) variable for "new Game()"
const keysPressed = [];

//Function to hold files for starting a new game (created for DRY)
function startNewGame() {
  game = new Game(); //create a new Game object
  game.startGame(); //Start game by calling startGame() method in the Game class
  keysPressed.length = 0; //reset keysPressed array
}
/*
 * Event Listener for resetButton
 * start or reset the game  by clicking 'Start Game' button
 */
resetButton.addEventListener('click', () => {
  startNewGame(); //Start a new instance of the game (also called in 'keyup' event when 'enter' pressed)
});

/*
 * Event Listener for onscreen keyboard buttons
 * Select keyboard letters by clicking them on the screen
 */
button.forEach(button => {
  //let buttonText = button.textContent;
  button.addEventListener('click', () => {
    game.handleInteraction(button); //call handleInteraction(), passing 'button'
  });
});

/*
 * Event Listener for physical keyboard keys/button
 * listen for keyup event
 */
document.addEventListener('keyup', (e) => {
  const eventKey = e.key; //capture the key value of the pressed key

  //add ability to press 'enter' key to start a new game
  if(!overlay.style.display || overlay.style.display == 'flex') {
      if(eventKey === 'Enter') {
        startNewGame();
      }
  }
  button.forEach(button => {
    if(overlay.style.display == 'none') { //check if the onscreen keyboard is displayed
      //ensure eventKey matches the button's text content & that that the button hasn't already been pressed
      if (eventKey === button.textContent && !keysPressed.includes(eventKey)) {
        game.handleInteraction(button); //as in the button event listener (above), pass in button to the handleInteraction() method
        keysPressed.push(eventKey); //add pressed key to the keysPressed array
      }
    }
  });
});
