## oop-gameshow-app
A word-guessing game
FSJS TD Project 4
By: Matt Coale
Last Updated 1/19/2021

An OOP (Object Oriented Programming) Gameshow App, created using Vanilla JavaScript.
Click a letter on the onscreen keyboard to guess the phrase that is randomly picked.
Up to five (5) wrong guesses are allowed.

### BASIC FEATURES
1. Game class:
- Constructor - 3x properties: missed, phrases, activePhrase
- createPhrases() - holds an array of 5x phrase objects
- getRandomPhrase() - returns a random phrase and passes it to a new Phrase class
- startGame() - sets/resets the gameboard and creates a new (random) Phrase
- checkForWin() - returns boolean value, depending on whether the game is over/won
- removeLife() - removes a heart/'life' based on the game.missed property
- gameOver(boolean) - returns true/false(win/lose) message, depending on gameOver state
- handleInteraction(button) - controls most of the game logic
2. Phrase class:
- Constructor - 1x property: phrase
- addPhraseToDisplay() - displays phrase on gameboard (gray blocks and white spaces)
- checkLetter(letter) - checks to see if the letter passed to the method is in the phrase
- showMatchedLetter(letter) - If a match is found, this method shows the letter on screen

### EXTRA/ADDED FEATURES
1. Functionality:
- Physical keyboard functionality: Press applicable 'letter' key instead of using the onscreen keyboard
- Pressing the 'Enter' key while on the main, Game Over, or Winning screens is enabled to allow the user to start/restart the game without clicking 'Start Game' button
2. App CSS Styling
- Changed font from 'Montserrat' to 'Trebuchet MS'; added 3px letter spacing to help spread out the letters
- Adjusted background color --color-win to #88b81b
- Adjusted .win background-color from a preset value to --color-win (#88b81b)
- Adjusted background color --color-lose to #9f132e
- Adjusted start color --color-start to #1e0b49;
- Adjusted .show background-color to #9cd31f
- Adjusted .wrong background style to #dc1a40
- Adjusted .chosen background style to #1e0b49
