// Iteration 8: Making scoreboard functional
const playAgainButton = document.getElementById("play-again-button")

const scoreBoard = document.getElementById("score-board")
scoreBoard.innerText = localStorage.getItem('score')


playAgainButton.addEventListener('click',()=>{
    window.location.href="game.html"
})