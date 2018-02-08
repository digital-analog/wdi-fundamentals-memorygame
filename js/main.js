//Create an array to store all cards
var cards = ["queen", "queen", "king","king"];

// create array to hold cards that are in play
var cardsInPlay = [];

// Create a function to check for a match
var checkForMatch = function () {

  //Check if two cards played match and display alert message to user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
     alert("Sorry, try again.");
   }
  };

// Create a function for when user flips a card
var flipCard = function (cardId) {

  //Display in the console the card that user flipped
  console.log("User flipped " + cards[cardId]);

  //Add the card user flipped to the array of cards in play
  cardsInPlay.push(cards[cardId]);

  // Check to see if two cards were played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
  }
};

// Call the flipCard function, passing in 0 as an argument
flipCard(0);
//Call the flipCard function, passing in 2 as an argument
flipCard(2);
