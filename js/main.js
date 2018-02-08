//Create an array to store all cards
var cards = ["queen", "queen", "king","king"];

// create array to hold cards that are in play
var cardsInPlay = [];

// Create variable for first card user flipped
var cardOne = cards[0];

// Add this card to cardsInPlay array
cardsInPlay.push(cardOne);

// Display card user flipped on the console
console.log("User flipped " + cardOne);

// Create variable for second card user flipped
var cardTwo = cards[2];

// Add this card to cardsInPlay array
cardsInPlay.push(cardTwo);

// Display card user flipped on the console
console.log("User flipped " + cardTwo);

// Check if two cards have been played
if (cardsInPlay.length === 2) {

  //Check if two cards played match and display alert message to user
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
       alert("Sorry, try again.");
     }
}
