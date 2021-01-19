/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Global DOM variables used in Phrase class
const phraseSection = document.getElementById('phrase');
const ul = document.querySelector('ul');
const ulChild = ul.children;
const hideClass = document.querySelectorAll('.hide'); //target all elements with a class of 'hide'
const showClass = document.querySelectorAll('.show'); //target all elements with a class of 'show'

//Global variables used in Game class
const overlay = document.querySelector('#overlay');
const tries = document.querySelectorAll('.tries');
const images =document.querySelectorAll('img[src="images/liveHeart.png"]');
const gameOverMessage = document.getElementById('game-over-message');
let livesLost = 0; //track lives lost in removeLife() method

//Global variables used in app.js
const resetButton = document.getElementById('btn__reset'); //target btn__reset
const button = document.querySelectorAll('.key');
let game = ''; //declare (blank) variable for "new Game()"


//Event listener for resetButton
resetButton.addEventListener('click', () => {
  game = new Game();  //create a new Game object
  game.startGame();   //Start game by calling startGame() method in the Game class
});

//Event listener for letter button elements
button.forEach(button => {
  button.addEventListener('click', () => {
    game.handleInteraction(button); //call handleInteraction(), passing 'button'
  });

});



// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();
