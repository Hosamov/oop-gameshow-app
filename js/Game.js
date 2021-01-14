/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = [
       {
         phrase: "I am your father"
       },
       {
         phrase: "I made my family disappear"
       },
       {
         phrase: "As you wish"
       },
       {
         phrase: "I feel a need the need for speed"
       },
       {
         phrase: "Beam me up Scotty"
       },
     ]; //['Phrase One', 'Phrase Two', 'Phrase Three', 'Phrase Four', 'Phrase Five'];
     this.activePhrase = null;
   }

   getRandomPhrase() {
     //Select and returna  random phrase stored in the 'phrase' property of Game class
     return this.phrases[Math.floor(Math.random() * Math.floor(this.phrases.length))];
   }

 }
