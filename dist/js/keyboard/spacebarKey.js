import { cursorPosition } from "../utils/cursorPosition.js";
const textBox = document.getElementById('text-box');
const spacebar = document.getElementById("spacebar");
/**
 * SPACEBAR key: Add functionality to add a space at the cursor position
 */
export default function spacebarKey() {
    if (spacebar.classList.contains("spacebar")) {
        const x = cursorPosition(textBox);
        textBox.value = textBox.value.slice(0, x) + " " + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + 1;
    }
}
