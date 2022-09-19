// Get the elements for start button and question box
let startBtn = document.getElementById('start');
let questionBox = document.getElementById('question-box');

startBtn.addEventListener('click', startQuiz);

/* Hide the startbutton and remove the hide from question-box
 when the start button is being clicked on */
function startQuiz() {
    console.log('started');
    startBtn.classList.add('hide');
    questionBox.classList.remove('hide');
}

function answers() {

}

function nextQuestion() {

}