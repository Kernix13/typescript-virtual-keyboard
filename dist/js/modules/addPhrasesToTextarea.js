import { cursorPosition } from "../utils/cursorPosition.js";
export function addPhrasestoTextarea() {
    const panel = document.getElementById("panel");
    const textBox = document.getElementById('text-box');
    const [...special] = document.getElementsByClassName("special");
    special.map(item => {
        item.addEventListener("click", (e) => {
            panel.classList.toggle("inactive");
            const phrase = e.target;
            const userPhrase = phrase.value;
            const x = cursorPosition(textBox);
            textBox.value = textBox.value.slice(0, x) + " " + userPhrase + textBox.value.slice(x);
            textBox.focus();
            textBox.selectionEnd = x + userPhrase.length + 1;
            return textBox.value;
        });
    });
}
