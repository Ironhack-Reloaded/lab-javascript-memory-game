class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // Fisher-Yates Shuffle / Knuth Shuffle / Sattolo's algorithm
  shuffleCards(arr) {
    if( arr ){
    return shuffleArr( arr )
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if( card1 === card2 ){
      this.pairsGuessed =+ 1
      return true
    }
    return false
  }

  checkIfFinished() {
    if( this.pairsGuessed * 2 === this.cards.length){
      return true
    }
    return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
