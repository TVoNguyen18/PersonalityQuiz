let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", processResults);

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetQuiz);

let resultArea = document.getElementById("result");

function processResults() {
  let personalityResult = getPersonality();
  console.log(personalityResult);

  resultArea.innerHTML = "You are " + personalityResult;

  function getPersonality() {
    let aAnswer = document.querySelector('input[name="anime"]:checked');
    aAnswer = aAnswer.id;
    let rAnswer = document.querySelector('input[name="reading"]:checked');
    rAnswer = rAnswer.id;
    let mAnswer = document.querySelector('input[name="music"]:checked');
    mAnswer = mAnswer.id;
    let cAnswer = document.querySelector('input[name="class"]:checked');
    cAnswer = cAnswer.id;
    let tAnswer = document.querySelector('input[name="time"]:checked');
    tAnswer = tAnswer.id;
  }
}

function resetQuiz() {

}

let animeObject = {
  q1c1: 3,
  q1c2: 1,
  q1c3: 2,
  q1c4: 4
}

let readingObject = {
  q2c1: 2,
  q2c2: 4,
  q2c3: 3,
  q2c4: 1
}

let musicObject = {
  q3c1: 3,
  q3c2: 2,
  q3c3: 4,
  q3c4: 1
}

let classObject = {
  q4c1: 1,
  q4c2: 3,
  q4c3: 4,
  q4c4: 2
}

let timeObject = {
  q5c1: 2,
  q5c2: 4,
  q5c3: 1,
  q5c4: 3
}
