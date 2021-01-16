/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//declare needed variables in the global scope:
const overlay = document.querySelector('#overlay');

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
     return randomPhrase;
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
 }
