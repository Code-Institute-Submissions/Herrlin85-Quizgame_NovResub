// Get the elements for start button and question box
let startBtn = document.getElementById('start');
let questionBox = document.getElementById('question-box');
let scoreArea = document.getElementById('score-area');
let questions = document.getElementById('question');
let intro = document.getElementById('intro');
let option1 = document.getElementById('1');
let option2 = document.getElementById('2');
let option3 = document.getElementById('3');
let option4 = document.getElementById('4');

let randomQuestion;

// Eventlistener for startbutton to start the quiz
startBtn.addEventListener('click', startQuiz);

// Start quiz function. Hide elements for visual effect
function startQuiz() {
    console.log('started');
    startBtn.classList.add('hide');
    intro.classList.add('hide');
    questionBox.classList.remove('hide');
    // Makes the questions random
    randomQuestion = myQuestions.sort(() => Math.random() - 0.5);
    showQuestion();
}

//  Create question array
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
        option3: 'Fc Bacelona',
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
    {
        question: 'Which of the following is not a football team in London?',
        option1: 'Tottenham Hotspur FC',
        option2: 'Everton FC',
        option3: 'Arsenal FC',
        option4: 'Chelsea FC',
        correctAnswer: '2',

    },
    {
        question: 'Which european country was first to qualify for WC in Qatar 2022?',
        option1: 'Denmark',
        option2: 'Belgium',
        option3: 'Germany',
        option4: 'Spain',
        correctAnswer: '3',
    },
    {
        question: 'Which newly founded club did David Beckham became president over in 2018?',
        option1: 'LA Galaxy',
        option2: 'DC United',
        option3: 'Inter Miami CF',
        option4: 'Los Angeles FC',
        correctAnswer: '3',
    },
    {
        question: 'How many people watched World Cup 2018 in total?',
        option1: '1 billion',
        option2: '3.5 billions',
        option3: '5.1 billions',
        option4: '2.5 billions',
        correctAnswer: '2',
    },
    {
        question: 'Who has the record of most goals in WC in total? (16 goals)',
        option1: 'Ronaldo, BRA',
        option2: 'Christiano Ronaldo, POR',
        option3: 'Diego Maradona, ARG',
        option4: 'Miroslav Klose, GER',
        correctAnswer: '4',
    },

];

let questionIndex = 0;
let newScore = 0;
let newQuestion = myQuestions.length - 1;



// Code to show questions and answers
function showQuestion() {
    let q = myQuestions[questionIndex];

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
    // Code for next question, the score will show up after last question
    if (questionIndex < newQuestion) {
        questionIndex++;
        showQuestion();
    } else {
        questionBox.classList.add('hide');
        scoreArea.classList.remove('hide');
        document.querySelector('.game-area').style.backgroundColor = 'black';

    }
}

// if corrrect, add +1 too correct answers and change background color on game area and font color
function isCorrect() {
    newScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++newScore;
    document.querySelector('.game-area').style.backgroundColor = 'rgb(0 255 0 / 60%)';
    document.querySelector('#question').style.color = 'black';
}
// if incorrect, add +1 too incorrect answers and change background color on game area and font color
function isNotCorrect() {
    newScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++newScore;
    document.querySelector('.game-area').style.backgroundColor = 'rgb(255 0 0 / 75%)';
    document.querySelector('#question').style.color = 'black';
}