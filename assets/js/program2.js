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

let questions2 = [
    {
        question:"Application of machine learning methods to large databases is called",
        choice1:"data mining.",
        choice2:"artificial intelligence",
        choice3:"big data computing",
        choice4:"internet of things",
        answer:1,
    },
    {
        question:"If machine learning model output involves target variable then that model is called as",
        choice1:"descriptive model",
        choice2:"predictive model",
        choice3:"reinforcement learning",
        choice4:"all of the above",
        answer:2,
    },
    {
        question:"In what type of learning labelled training data is used",
        choice1:"unsupervised learning",
        choice2:"supervised learning",
        choice3:"reinforcement learning",
        choice4:"active learning",
        answer:2,
    },
    {
        question:"In following type of feature selection method we start with empty feature set",
        choice1:"forward feature selection",
        choice2:"backword feature selection",
        choice3:"both a and b??",
        choice4:"none of the above",
        answer:1,
    },
    {
        question:"Which of the following is the best machine learning method?",
        choice1:"scalable",
        choice2:"accuracy",
        choice3:"fast",
        choice4:"all of the above",
        answer:4,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions2]
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        if(score >= 0) {
            return window.location.assign("file:///home/bigg000/Hackathon/Digital%20Education%20Application/Digi-Learn/end1.html")
        }
        else {
            return window.location.assign("file:///home/bigg000/Hackathon/Digital%20Education%20Application/Digi-Learn/end2.html")
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