//contact us text animation

const text = ["Now", "Today", "Tomorrow", "Anytime"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }
    /*adds the letter one by one */
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".type").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 500);

}());
