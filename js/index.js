const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

const turnCardAndPlay = card => {
  turnCard(card)
  const name = card.getAttribute("data-card-name") 
  memoryGame.pickedCards.push(name)
  if( memoryGame.pickedCards.length === 2){
    checkPair()
  }
}

const turnCard = card => {
  card.classList.toggle("turned")
  card.id = card.getAttribute("data-card-name")
}

const checkPair = () =>{
  if( memoryGame.checkIfPair( memoryGame.pickedCards[0], memoryGame.pickedCards[1])){
    updateScore()
    emptyPickedCardsList( memoryGame.pickedCards[0], memoryGame.pickedCards[1] )
    if( memoryGame.checkIfFinished() ){
      finish()
    }
  }else{
    setTimeout( hidePickedCards, 500 )
  }
}

updateScore = () => {
  const pairsClickedInfo = document.getElementById('pairs-clicked')
  const pairsGuessedInfo = document.getElementById('pairs-guessed')
  pairsClickedInfo.textContent = memoryGame.pairsClicked
  pairsGuessedInfo.textContent = memoryGame.pairsGuessed
}

const emptyPickedCardsList = (card1, card2) => {
  let div1 = document.getElementById(card1)
  let div2 = document.getElementById(card2)
  div1.removeAttribute('id')
  div2.removeAttribute('id')
  memoryGame.pickedCards=[]  
}

const hidePickedCards = () => {
  const card1 = document.getElementById(memoryGame.pickedCards[0])
  const card2 = document.getElementById(memoryGame.pickedCards[1])
  console.log(card1)
  console.log(card2)
  card1.classList.toggle("turned")
  card2.classList.toggle("turned")
  updateScore()
  emptyPickedCardsList(memoryGame.pickedCards[0], memoryGame.pickedCards[1])

  console.log(card1)
  console.log(card2)
}



window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(card)
      turnCardAndPlay(card)

    });
  });
});
