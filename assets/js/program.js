const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");




let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question:"Python is a ___object-oriented programming language.",
        choice1:"Special purpose",
        choice2:"General purpose",
        choice3:"Medium level programming language",
        choice4:"All of the mentioned above",
        answer:2,
    },
    {
        question:"Amongst the following, who is the developer of Python programming?",
        choice1:"Guido van Rossum",
        choice2:"Denis Ritchie",
        choice3:"Y.C. Khenderakar",
        choice4:"None of the mentioned above",
        answer:1,
    },
    {
        question:"Amongst which of the following is / are the application areas of Python programming?",
        choice1:"Web Development",
        choice2:"Game Development",
        choice3:"Artificial Intelligence and Machine Learning",
        choice4:"All of the mentioned above",
        answer:4,
    },
    {
        question:"Amongst which of the following is / are the Numeric Types of Data Types?",
        choice1:"int",
        choice2:"float",
        choice3:"complex",
        choice4:"All of the mentioned above",
        answer:4,
    },
    {
        question:"list, tuple, and range are the ___ of Data Types.",
        choice1:"Sequence Types",
        choice2:"Binary Types",
        choice3:"Boolean Types",
        choice4:"None of the mentioned above",
        answer:1,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        if(score >= 400) {
            return window.location.assign("/Digi-Learn/end1.html?_ijt=hqq7508qlkc2cuh9omem48sv9q")
        }
        else {
            return window.location.assign("/Digi-Learn/end2.html?_ijt=omjtanr9ljdm1djjfkb63ehtqt")
        }
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]

    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
            'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)

    })
})

incrementScore = num => {
    score+=num;
    scoreText.innerText = score;
}
startGame()

console.log(mostRecentScore)