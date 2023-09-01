import { cursorPosition } from "../utils.js";
const textBox = document.getElementById('text-box');
const [...nonAlpha] = document.getElementsByClassName("nonAlpha");
export function nonAlphaKeys() {
    nonAlpha.map(item => {
        item.addEventListener("click", (e) => {
            const x = cursorPosition(textBox);
            const ch = e.target;
            const char = ch.innerHTML;
            const sliceStart = textBox.value.slice(0, x);
            const sliceEnd = textBox.value.slice(x);
            if (char == "&amp;") {
                textBox.value = sliceStart + "&" + sliceEnd;
            }
            else if (char == "&lt;") {
                textBox.value = sliceStart + "<" + sliceEnd;
            }
            else if (char == "&gt;") {
                textBox.value = sliceStart + ">" + sliceEnd;
            }
            else {
                textBox.value = sliceStart + char + sliceEnd;
            }
            textBox.focus();
            return (textBox.selectionEnd = x + 1);
        });
    });
}
