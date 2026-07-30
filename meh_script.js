/* Finds the button in my HTML */
const button = document.querySelector("#magicButton");

/* Finds the empty paragraph where my message will appear */
const message = document.querySelector("#dreamMessage");

/* Waits until someone clicks the button */
button.addEventListener("click", function () {

    /* Changes the text inside the paragraph */
    message.textContent =
    "✨ The dream has begun...";

    /* Hides the button after it is clicked */
    button.style.display = "none";

});