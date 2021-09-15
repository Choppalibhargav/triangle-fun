const quizform = document.querySelector('.quizform');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const output = document.querySelector('#output');
const correctAnswer = ["equilateral", "right-angle"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizform);
    for (let value of formResults.values()) {
        if (value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "your score is:" + score;
}

submitAnswerBtn.addEventListener('click', calculateScore);