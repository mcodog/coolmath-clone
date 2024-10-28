const animals = [
    { name: "elephant", hints: ["I am the largest land animal", "I have a trunk", "I am known for my big ears"] },
    { name: "lion", hints: ["I am known as the King of the Jungle", "I have a mane", "I roar loudly"] },
    { name: "penguin", hints: ["I cannot fly", "I live in cold climates", "I am black and white"] },
    { name: "giraffe", hints: ["I have a very long neck", "I eat leaves from tall trees", "I am the tallest land animal"] }
];

let currentAnimal = 0;
let currentHintIndex = 0;

function loadHint() {
    const hintElement = document.getElementById("hint");
    hintElement.innerText = animals[currentAnimal].hints[currentHintIndex];
    document.getElementById("feedback").innerText = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("nextButton").style.display = "none";
}

function checkGuess() {
    const userGuess = document.getElementById("guessInput").value.toLowerCase();
    const correctAnswer = animals[currentAnimal].name;
    const feedback = document.getElementById("feedback");

    if (userGuess === correctAnswer) {
        feedback.innerText = "Correct! Well done!";
        feedback.style.color = "green";
        document.getElementById("nextButton").style.display = "block";
    } else {
        feedback.innerText = "Oops! Try again.";
        feedback.style.color = "red";
    }
}

function nextHint() {
    currentHintIndex++;
    if (currentHintIndex >= animals[currentAnimal].hints.length) {
        currentAnimal = (currentAnimal + 1) % animals.length;
        currentHintIndex = 0;
    }
    loadHint();
}

window.onload = loadHint;
