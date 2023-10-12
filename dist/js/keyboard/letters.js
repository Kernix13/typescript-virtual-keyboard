import { cursorPosition } from "../utils/cursorPosition.js";
const textBox = document.getElementById('text-box');
const [...keys] = document.getElementsByClassName("key");
const capsKey = document.getElementById("caps");
/**
 * Capitalize initial letter and output to textarea if Caps key is off
 * AND the letter is the first letter in the textarea OR following end of
 * sentence punctuation. Otherwise, capitalize all letters if Caps is on.
 */
export function addLetters() {
    keys.map(key => {
        key.addEventListener("click", e => {
            const letter = e.target;
            const letterkey = letter.value;
            if (capsKey.classList.contains("caps-off")) {
                const len = textBox.value.length;
                const punc = textBox.value;
                const x = cursorPosition(textBox);
                if ([".", "?", "!", "\n"].includes(punc.charAt(len - 1)) || textBox.value.charAt(0) == "") {
                    textBox.value = textBox.value.slice(0, x) + " " + letterkey.toUpperCase() + textBox.value.slice(x);
                    textBox.focus();
                    textBox.selectionEnd = x + 2;
                }
                else {
                    textBox.value = textBox.value.slice(0, x) + letterkey.toLowerCase() + textBox.value.slice(x);
                    textBox.focus();
                    textBox.selectionEnd = x + 1;
                }
            }
            else {
                const x = cursorPosition(textBox);
                textBox.value = textBox.value.slice(0, x) + letterkey.toUpperCase() + textBox.value.slice(x);
                textBox.focus();
                textBox.selectionEnd = x + 1;
            }
        });
    });
}
