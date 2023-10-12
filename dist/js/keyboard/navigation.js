/* ===================================
add nvaigation keys functionality
===================================== */
import { cursorPosition } from "../utils/cursorPosition.js";
const textBox = document.getElementById('text-box');
/**
 * HOME key: functionality to add cursor focus to start of textarea
 */
export function focusAtStart() {
    textBox.value = textBox.value;
    textBox.focus();
    // textBox.selectionEnd = textBox.value[0];
    textBox.selectionEnd = parseInt(textBox.value[0]);
}
/**
 * END key: functionality to add cursor focus to end of textarea
 */
export function focusAtEnd() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value;
    textBox.focus();
    const length = textBox.value.length;
    textBox.selectionStart = length;
}
/**
 * LEFT ARROW key: functionality to move the cursor to the left
 */
export function arrowLeft() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value;
    textBox.focus();
    textBox.selectionEnd = x - 1;
}
/**
 * RIGHT ARROW key: functionality to move the cursor to the right
 */
export function arrowRight() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value;
    textBox.focus();
    textBox.selectionStart = x + 1;
}
