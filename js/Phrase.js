/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 const phraseSection = document.getElementById('phrase');
 const ul = document.querySelector('ul');
 const ulChild = ul.children;
 //const hideClass = document.querySelector('.hide');
 const hideClass = document.querySelectorAll('.hide'); //target all elements with a class of 'hide'
 const showClass = document.querySelectorAll('.show'); //target all elements with a class of 'show'



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
      if(this.phrase[i] !== ' ') {
        ul.appendChild(addLI).classList.add('hide'); //add css class of 'hide' to all characters in the phrase
        addLI.textContent = this.phrase[i];
        ul.appendChild(addLI).classList.add('letter', this.phrase[i]); //add css class for 'letter' if it's a letter
      } else {
        ul.appendChild(addLI).classList.add('space'); //Add css class of 'space' if it's a space
      }
    }
  };

  /**
   * Checks if passed letter is in phrase
   * @param {string} letter - Letter to check
   */
  checkLetter(letter) {
    for(let i = 0; i < ulChild.length; i++) { //Loop over li elements that are children of ul
      if(ulChild[i].classList.contains(letter)) { //Check to see if the current index of classList for ulChild contains the selected letter
        return letter;
      }
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
