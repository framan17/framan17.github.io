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

/*make the cats show up by decade */
function showDecade(decade) {

  // Find every cat card
  const cats = document.querySelectorAll(".cat-card");

  // Hide all cat cards
  cats.forEach(function(cat) {
    cat.style.display = "none";
  });

  // Show only the selected decade
  const selectedCats = document.querySelectorAll("." + decade);

  selectedCats.forEach(function(cat) {
    cat.style.display = "block";
  });
}