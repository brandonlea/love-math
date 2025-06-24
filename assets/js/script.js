document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * This main game "Loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition" || gameType === "+") {
        displayAdditonQuestion(num1, num2);
    } else if(gameType === "minus" || gameType === "-") {
        displaySubtractQuestion(num1, num2);
    } else if(gameType === "times" || gameType === "*") {
        displayMiltiplyQuestion(num1, num2);
    } else if(gameType === "divide" || gameType === "/") {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`)
        throw `Unknow game type: ${gameType}. Aborting!`;
    }
}
/**
 * Checks the anser agasist the first element in
 * the returned calculateCorrectAnser array
 */
 function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect) {
        alert("yay");
    } else {
        alert(`Awww.... you answerd ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);
 }

 /**
  * Gets the operands and the operator 
  * directly from the dom, returns the correct answer
  */
 function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 + operand2, operator];
    } else {
        alert(`Unknown operator: ${operator}`);
        throw `Unknown operator: ${operator}. Aborting!`;
    }
 }

 function incrementScore() {

 }

 function incrementWrongAnswer() {

 }

 function displayAdditonQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
 }

 function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
 }

 function displayMiltiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "*";
 }

 function displayDivideQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
 }