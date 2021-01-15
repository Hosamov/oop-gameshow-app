/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
      this.phrases = this.createPhrases(); //['Phrase One', 'Phrase Two', 'Phrase Three', 'Phrase Four', 'Phrase Five'];
     this.activePhrase = null;
   }

   createPhrases() {
     const phrase = [
      {  phrase: "I am your father" },
      {  phrase: "I made my family disappear" },
      {  phrase: "As you wish" },
      {  phrase: "I feel the need the need for speed" },
      {  phrase: "Beam me up Scotty" },
    ];
    return phrase;
   }

   getRandomPhrase() {
     //Select and return a random phrase stored in the 'phrase' property of Game class
     const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
     const randomPhrase =  this.phrases[randomPhraseIndex];
     return randomPhrase;
     //console.log(randomPhrase);
   }

 }
