import { cursorPosition } from "../utils/cursorPosition.js";
const textBox = document.getElementById('text-box');
const spacebar = document.getElementById("spacebar");
export default function spacebarKey() {
    if (spacebar.classList.contains("spacebar")) {
        const x = cursorPosition(textBox);
        textBox.value = textBox.value.slice(0, x) + " " + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + 1;
    }
}
