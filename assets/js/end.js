let mostRecentScore = localStorage.getItem('mostRecentScore');
let finalScore = document.querySelector("#finalScore")
console.log(mostRecentScore)
finalScore.innerText = mostRecentScore;