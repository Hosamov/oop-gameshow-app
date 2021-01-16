/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 const phraseSection = document.getElementById('phrase');
 const ul = document.querySelector('ul');
 const ulChild = ul.children;
 const hideClass = document.querySelector('.hide');


class Phrase {
  //constructor holds actual phrase object is representing
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    for(let i = 0; i < this.phrase.length; i++) {
      const addLI = document.createElement('li');
      //console.log(this.phrase[i]);
      ul.appendChild(addLI).classList.add('hide'); //add css class of 'hide' to all characters in the phrase
      addLI.textContent = this.phrase[i];
      if(this.phrase[i] !== ' ') {
        ul.appendChild(addLI).classList.add('letter'); //add css class for 'letter' if it's a letter
      } else {
        ul.appendChild(addLI).classList.add('space'); //Add css class of 'space' if it's a space
      }

    }

  }

  //Check to see if the letter selected by the player matches a letter in the phrase
  checkLetter() {

  }

  //Reveal letter(s) on the board that matches the player's selection
  showMatchedLetter(){
    //1. Select all of the letter DOM elements that have a CSS class name that matches the selected letter
    //2. Replace each selected element's 'hide' CSS class with the 'show' CSS class
  }
}
