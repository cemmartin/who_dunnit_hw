// # Scope Homework: Who Dunnit

// ### Learning Objectives
// - Understand function scope
// - Know the difference in between the let and const keywords

// ## Brief
// Using your knowledge about scope and variable declarations in JavaScript, look at 
// the following code snippets and predict what the output or error will be and why. Copy 
// the following episodes into a JavaScript file and add comments under each one detailing the 
// reason for your predicted output.

// ### MVP
// #### Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// Outcome: will return "The murderer is Miss Scarlet", I believe because it's not outside the block it's declared in.




// // #### Episode 2 ////////////////////////////////////

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// // Outcome: Will return "The murder is Mrs. Peacock" because a const is used to reassign the murder & it's not nested.


// // #### Episode 3


// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Outcome: The murderer in the first verdict will be Mrs. Peacock because it's calling declareMurder() in which she is defined as the murderer
// The murderer in the second verdict will be Professor Plum because it's just calling {murderer} which is the original murderer. If we wanted the Mrs. Peacock we'd have to call the function declareMurderer


// // #### Episode 4


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//Outcome: "The suspects are Miss Scarlet, Professor Plum, and Colonel Mustart." It's not Mrs. Peacock bc in this block supsectThree is reassigned as Colonel Mustard
// Then suspect three is identified as Mrs. Peacock. This is because the scope of let supsectThree is restricted to the prior block, therefore it does not affect the third code block.

// // #### Episode 5


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) { //allows it to be changed to a nerw weapon
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() { //declares the weapon
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver'); //calls changeWeapon, supplying it with parametet ='Revolver'
// const verdict = declareWeapon();
// console.log(verdict);

// Outcome: "The weapon is the Revolver".
// It's not candle stick because changeWeapon specifically & declareWeapon are called in the final codeblock


// #### Episode 6


let murderer = 'Colonel Mustard';

const changeMurderer = function() { //is Mr. Green at this  point
  murderer = 'Mr. Green';

  const plotTwist = function() { // would be Mrs. White now
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//Outcome: I believe it would be Mrs. White
//If it's not Mrs. White, it'll be Mr. Green, defo not Colonel Mustard tho

// #### Episode 7

// ```js
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ```

// #### Episode 8

// ```js
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// ```

// #### Episode 9

// ```js
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// ```

// ### Extensions

// Make up your own episode!
