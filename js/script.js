console.log("script.js connected!");
let userAnswers = {};

let buttons = document.querySelectorAll(".answer-btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let question = button.dataset.question;
        let answer = button.dataset.answer;
 
        let sameQuestionButtons = document.querySelectorAll(
            `.answer-btn[data-question="${question}"]`
        );
        // Only deselect same buttons
        sameQuestionButtons.forEach(btn => {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");



        // Store answer
        userAnswers[question] = answer;
        console.log(userAnswers);

    });
});






let resultButton = document.getElementById("show-result");

let totalScore = 0;

// Adds up results
resultButton.addEventListener("click", function () {
    for (let answer in userAnswers) {
        if (userAnswers[answer] === "A") {
            totalScore += 4;
        } else if (userAnswers[answer] === "B") {
            totalScore += 3;
        } else if (userAnswers[answer] === "C") {
            totalScore += 2;
        } else if (userAnswers[answer] === "D") {
            totalScore += 1;
        }
    }

// Outputs to user the results
    let container = document.getElementById("result-container");
    container.style.display = "block"
    let output = document.getElementById("result-text");
    // Now we can write different responses based on the mood
    if (totalScore >= 5 && totalScore <= 8) {
        output.textContent = "First Baseman 🧱 Reliable, steady, and dependable!!";
    } else if (totalScore >= 9 && totalScore <= 12) {
        output.textContent = "Shortstop ⚡Quick, adaptable, and energetic!!";
    } else if (totalScore >= 13 && totalScore <= 16) {
        output.textContent = "Catcher 🛡️ Smart, strategic, and a thinker!!";
    } else if (totalScore >= 17 && totalScore <= 20) {
        output.textContent = "Pitcher 🧢 Confident leader who handles pressure!!";
    }
});