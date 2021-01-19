/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  //constructor holds actual phrase object is representing
  constructor(phrase) {
    this.phrase = phrase.toLowerCase(); //initialize 'phrase' property, set to lowerCase()
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    for(let i = 0; i < this.phrase.length; i++) {
      const addLI = document.createElement('li');
      const appendLI = ul.appendChild(addLI);
      //console.log(this.phrase[i]);
      if(this.phrase[i] !== ' ') {
        appendLI.classList.add('hide'); //add css class of 'hide' to all characters in the phrase
        addLI.textContent = this.phrase[i];
        appendLI.classList.add('letter', this.phrase[i]); //add css class for 'letter' if it's a letter
      } else {
      appendLI.classList.add('space'); //Add css class of 'space' if it's a space
      }
    }
  };

  /**
   * Checks if passed letter is in phrase
   * @param {string} letter - Letter to check
   */
  checkLetter(letter) {
    if(game.activePhrase.phrase.includes(letter.toLowerCase())) { //convert letter to lowercase, check and see if it's included in game.activePhrase
      return true;
    } else {
      return false;
    }
  };

  /**
   * Displays passed letter on screen after a match is found
   * @param {string} letter - Letter to display
   */
  showMatchedLetter(letter){
    // Select all of the letter DOM elements that have a CSS class name that matches the selected letter
    for (let i = 0; i < ulChild.length; i++) {
      //Replace each selected element's 'hide' CSS class with the 'show' CSS class
      if(ulChild[i].classList.contains(letter)) {
        ulChild[i].classList.remove('hide');
        ulChild[i].classList.add('show');
      }
    }
  };


}
