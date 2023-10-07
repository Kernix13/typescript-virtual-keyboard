/* ===================================
add nvaigation keys functionality
===================================== */
import { cursorPosition } from "../utils/cursorPosition.js";
const textBox = document.getElementById('text-box');
// HOME key
export function focusAtStart() {
    textBox.value = textBox.value;
    textBox.focus();
    // textBox.selectionEnd = textBox.value[0];
    textBox.selectionEnd = parseInt(textBox.value[0]);
}
// END key
export function focusAtEnd() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value;
    textBox.focus();
    const length = textBox.value.length;
    textBox.selectionStart = length;
}
// LEFT ARROW key
export function arrowLeft() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value;
    textBox.focus();
    textBox.selectionEnd = x - 1;
}
// RIGHT ARROW key
export function arrowRight() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value;
    textBox.focus();
    textBox.selectionStart = x + 1;
}
