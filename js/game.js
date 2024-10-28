const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What color is the sky?",
        answers: [
            { text: "Blue", correct: true },
            { text: "Green", correct: false },
            { text: "Red", correct: false },
            { text: "Yellow", correct: false }
        ]
    },
    {
        question: "What animal says 'Moo'?",
        answers: [
            { text: "Dog", correct: false },
            { text: "Cat", correct: false },
            { text: "Cow", correct: true },
            { text: "Sheep", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    nextButton.style.display = "none";
    questionContainer.style.display = "block";
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) score++;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
    });
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.style.display = "block";
    } else {
        showResult();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.innerText = `Your Score: ${score} / ${questions.length}`;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
});

restartButton.addEventListener("click", startGame);

startGame();
