import { cursorPosition } from "../utils/cursorPosition.js";
const textBox = document.getElementById('text-box');
const enter = document.getElementById("enter");
export default function enterKey() {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value.slice(0, x) + "\n" + textBox.value.slice(x);
    textBox.focus();
    textBox.selectionEnd = x + 1;
}
