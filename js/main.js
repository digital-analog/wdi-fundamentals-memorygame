//Create an array to store all cards
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];


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
var flipCard = function () {

//Get the data attribute of the card that was flipped
cardId = this.getAttribute('data-id');
console.log(cardId);


  //Display in the console the card that user flipped
  console.log("User flipped " + cards[cardId].rank);

  //Add the card user flipped to the array of cards in play
  cardsInPlay.push(cards[cardId].rank);

  //Display the image path
  console.log(cards[cardId].cardImage)

  //Display the suit in the console
  console.log(cards[cardId].suit)

  //Display card's image
  this.setAttribute('src', cards[cardId].cardImage);

  // Check to see if two cards were played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
    cardsInPlay = [];
  }
};

// Function for creating board
var createBoard = function () {
  //Loop through the cards array
  for (var i = 0; i < cards.length; i++) {

    // Create an image element
    var cardElement = document.createElement('img');

    //Dispay back of card image
    cardElement.setAttribute('src','images/back.png');

    //Set the card's data-id to be the index of current element i
    cardElement.setAttribute('data-id',i);

    // Add a click event to the cardElement
    cardElement.addEventListener('click', flipCard);

    //Append the card to the createBoard
    document.getElementById('game-board').appendChild(cardElement);
  }
}

//Call createBoard function
createBoard();
