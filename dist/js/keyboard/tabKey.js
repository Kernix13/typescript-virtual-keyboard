import { cursorPosition } from "../utils/cursorPosition.js";
const textBox = document.getElementById('text-box');
const tab = document.getElementById("tab");
export default function tabKey() {
    if (tab.classList.contains("tab")) {
        const x = cursorPosition(textBox);
        textBox.value = textBox.value.slice(0, x) + `     ` + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + 5;
    }
}
