import { cursorPosition } from "../utils/cursorPosition.js";
/**
 * Add the words in the alphabet menu to the textarea on click.
 * The words are lowercased but are capitalized if first in the
 * textarea or if they follow end-of-sentence punctuation.
 */
export function addWordsToTextarea() {
    const textBox = document.getElementById('text-box');
    const [...textBtns] = document.getElementsByClassName("text-btn");
    textBtns.map((item) => {
        if (item) {
            item.addEventListener("click", (e) => {
                // Getting an error so I created the variable 'w'
                const w = e.target;
                const word = w.textContent;
                const len = textBox.value.length;
                const punc = textBox.value;
                const first = word.charAt(0);
                // const remainder = word.slice(1);
                const remainder = word.substring(1);
                const x = cursorPosition(textBox);
                if ([".", "?", "!", "\n"].includes(punc.charAt(len - 1)) || textBox.value.charAt(0) == "") {
                    textBox.value = textBox.value.slice(0, x) + " " + first.toUpperCase() + remainder + textBox.value.slice(x);
                    textBox.focus();
                    textBox.selectionEnd = x + word.length + 1;
                    return textBox.value;
                }
                else {
                    textBox.value = textBox.value.slice(0, x) + " " + word + textBox.value.slice(x);
                    textBox.focus();
                    textBox.selectionEnd = x + word.length + 1;
                    return textBox.value;
                }
            });
        }
    });
}
