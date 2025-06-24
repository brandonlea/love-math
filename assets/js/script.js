document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * This main game "Loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

 function checkAnswer() {

 }

 function calculateCorrectAnswer() {

 }

 function incrementScore() {

 }

 function incrementWrongAnswer() {

 }

 function displayAdditonQuestion() {

 }

 function displaySubtractQuestion() {

 }

 function displayMiltiplyQuestion() {

 }