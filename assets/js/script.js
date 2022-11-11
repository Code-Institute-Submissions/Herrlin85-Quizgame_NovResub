// Get the elements for start button and question box
let startBtn = document.getElementById('start');
let questionBox = document.getElementById('question-box');
let scoreArea = document.getElementById('score-area');
let questions = document.getElementById('question');
let answers = document.getElementsByClassName('answer');
let intro = document.getElementById('intro');
let option1 = document.getElementById('1');
let option2 = document.getElementById('2');
let option3 = document.getElementById('3');
let option4 = document.getElementById('4');



startBtn.addEventListener('click', startQuiz);

// Start quiz function. Hide elements for visual effect
function startQuiz() {
    console.log('started');
    startBtn.classList.add('hide');
    intro.classList.add('hide');
    questionBox.classList.remove('hide');
    showQuestion();
    checkAnswer();
    document.body.style.background = "white"
}

//  Create questions
let myQuestions = [

    {
        question: "Who won ballon d'or 2021?",
        option1: 'Ronaldo',
        option2: 'Messi',
        option3: 'Benzema',
        option4: 'Zlatan',
        correctAnswer: '2',
    },
    {
        question: 'Which team has the most Champions League titles?',
        option1: 'FC Barcelona',
        option2: 'Liverpool',
        option3: 'Real Madrid',
        option4: 'AC Milan',
        correctAnswer: '3',
    },
    {
        question: 'Who came 2nd in the WC 1994?',
        option1: 'Italy',
        option2: 'England',
        option3: 'Sweden',
        option4: 'Brazil',
        correctAnswer: '1',
    },
    {
        question: 'Which club did Zlatan Ibrahimovic signed for when leaving Malmö FF?',
        option1: 'Inter',
        option2: 'Juventus',
        option3: 'Sweden',
        option4: 'Ajax',
        correctAnswer: '4',
    },
    {
        question: 'In 1992, the Champions League was created for champion teams around Europe. Which was the first team to win?',
        option1: 'Manchester United',
        option2: 'Paris Saint-Germain (PSG)',
        option3: 'Leeds United',
        option4: 'Marseille',
        correctAnswer: '4',
    },
];

let questionIndex = 0;
let newScore = 0;
let newQuestion = myQuestions.length - 1;
let randomQuestions = Math.floor(Math.random() * myQuestions);



// Code to show questions and answers
function showQuestion() {
    let q = randomQuestions[questionIndex];

    questions.innerHTML = q.question;
    option1.innerHTML = q.option1;
    option2.innerHTML = q.option2;
    option3.innerHTML = q.option3;
    option4.innerHTML = q.option4;

}

// check if answer is correct or not

function checkAnswer(answer) {

    if (answer == myQuestions[questionIndex].correctAnswer) {
        isCorrect();
    } else {
        isNotCorrect();
    }
    if (questionIndex < newQuestion) {
        questionIndex++;
        showQuestion();
}     else {
    questionBox.classList.add('hide');
    scoreArea.classList.remove('hide');
    
}

}

// if corrrect, add +1 too correct answers
function isCorrect() {
    newScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++newScore;
    document.body.style.background = "green";
    
}
// if incorrect, add +1 too incorrect answers
function isNotCorrect() {
    newScore =  parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++newScore;
    document.body.style.background = "red";
}