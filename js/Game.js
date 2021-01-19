/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases(); //['Phrase One', 'Phrase Two', 'Phrase Three', 'Phrase Four', 'Phrase Five'];
     this.activePhrase = null;
   }

   /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
   createPhrases() {
     const phrase = [
      {  phrase: "I am your father" },
      {  phrase: "I made my family disappear" },
      {  phrase: "As you wish" },
      {  phrase: "Tale as old as time" },
      {  phrase: "Beam me up Scotty" },
    ];
    return phrase;
   }

   /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
   getRandomPhrase() {
     //Select and return a random phrase stored in the 'phrase' property of Game class
     const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
     const randomPhrase =  this.phrases[randomPhraseIndex];
     //return randomPhrase;
     return new Phrase(randomPhrase.phrase);
     //console.log(randomPhrase);
   }

   /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
      //1. Hide start screen overlay (div with id of 'overlay')
      overlay.style.display = 'none';
      //2. Call the getRandomPhrase() method to select a Phrase object from the Game object's array of phrases
      const newRandomPhrase = this.getRandomPhrase();
      //3. Call addPhraseToDisplay() method to add the phrase to the gameboard
      new Phrase(newRandomPhrase.phrase).addPhraseToDisplay();
      //4. Store the selected phrase to the game's activePhrase property
      this.activePhrase = newRandomPhrase;
    }

   /**
    * Check for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
      const checkWin = [] //Array to hold li values with className of 'hide'
      for(let i = 0; i < ulChild.length; i++) {
        if(ulChild[i].classList.contains('hide')) {  //check for list items with classList containing 'hide'
          checkWin.push(ulChild[i].textContent);     //Add found list item(s) to the checkWin array
        }
      }
      //parse checkWin to see if there are any values left within the array
      if(checkWin.length === 0) {
        return true;  //if no items in the array, return 'true'--you guessed the phrase
      } else {
        return false; //otherwise, return 'false'
      }
    };

   /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
      this.missed++; //increment the 'missed' property
      images[images.length - this.missed].src = 'images/lostHeart.png'; //replace furthest 'liveHeart' to the right with 'lostHeart'

      if(this.missed === 5) { //If the player has five missed guesses (out of lives)
        this.gameOver(false); //end the game
      }
    };

   /**
    * Displays game over message
    * @return {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
      overlay.style.display = 'flex'; //Display the original start screen overlay
      if(!gameWon) { //if gameWon param is false...
        gameOverMessage.textContent = "Sorry, better luck next time!"; //Add a friendly lose message to the screen
        overlay.classList.remove('start', 'win'); //remove 'start' and/or 'win' class
        overlay.classList.add('lose'); //add 'lose' class to overlay
      } else {
        gameOverMessage.textContent = 'Congratulations, you guessed the phrase!'; //Add a friendly win message to the screen
        overlay.classList.remove('start', 'lose'); //remove 'start' and/or 'lose' class
        overlay.classList.add('win'); //add 'win' class to overlay
      }


    };

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
      console.log(button);
    };
 }
