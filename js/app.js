/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
////Test 1
 // const phrase = new Phrase();
 // const game = new Game();

////Test 2
// const phrase = new Phrase("Life is like a box of chocolates");
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// //Test 3
// const game = new Game();
//
// game.phrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

////Test 3
// const logPhrase = (phrase) => {
//   console.log('Phrase - phrase: ', phrase.phrase);
// }
//
// const game = new Game();
//
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

const game = new Game();
const phrase = new Phrase(game.getRandomPhrase());
