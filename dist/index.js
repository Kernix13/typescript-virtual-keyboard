import { wordsToSplit, properToSplit } from './content.js';
import { splitWords, pageOutput } from './alpha.js';
import { properNouns, properNounOutput } from "./proper.js";
import { cursorPosition } from "./utils.js";
import { addLetters } from "./keyboard/letters.js";
import { createShiftItems, changeInner } from "./keyboard/shift.js";
import { nonAlphaKeys } from "./keyboard/nonalpha.js";
import { focusAtStart, focusAtEnd, arrowLeft, arrowRight } from "./keyboard/navigation.js";
import { removeCharBehind } from "./keyboard/remove.js";
import { removeCharAhead } from "./keyboard/remove.js";
import { copyTextArea } from "./clipboard.js";
import { openModalOnClick, closeModalOnClick, clearTextarea } from "./modal.js";
const textBox = document.getElementById('text-box');
/* add the alphabetical words to an array */
pageOutput(splitWords(wordsToSplit));
/* SHOW SUBMENU ON CLICK */
const mainNavLi = document.querySelectorAll(".main-nav li");
mainNavLi.forEach(item => {
    item.addEventListener('click', (e) => {
        item.classList.toggle('active');
        // if statement to fix error: Uncaught TypeError ...
        if (item.children[1]) {
            item.children[1].classList.toggle('show');
        }
        else {
            item.classList.toggle('active');
        }
    });
});
/* ======= adding ALPHA words to TEXTAREA ======= */
const [...textBtns] = document.getElementsByClassName("text-btn");
textBtns.map((item) => {
    if (item) {
        item.addEventListener("click", (e) => {
            // Getting an error so I had to create 'w'
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
/* ==== END ALPHA ===== */
/* ==== BEGIN PROPER NOUNS MANIPULATION & OUTPUT ===== */
properNounOutput(properNouns(properToSplit));
/* ACCORDIAN FOR PROPER NOUNS, need animation or transition for closing */
const accordian = document.getElementById("accordian");
const panel = document.getElementById("panel");
accordian.addEventListener("click", function () {
    panel.classList.toggle("inactive");
});
/* ====== adding PROPER words to TEXTAREA ====== */
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
/* ==================================
  add KEYBOARD CHARACTERS to textarea - LETTERS, CAPS key, SHIFT key
=================================== */
// CAPS key functionality and letters output In keyboard/letters.ts
const capsKey = document.getElementById("caps");
addLetters();
// add and remove class for highlighting the CAPS key
capsKey.addEventListener("click", function () {
    capsKey.classList.toggle("caps-on");
    capsKey.classList.toggle("caps-off");
});
// add and remove class for highlighting the SHIFT keys
const shiftl = document.getElementById("shiftl");
const shiftr = document.getElementById("shiftr");
shiftl.addEventListener("click", function () {
    shiftl.classList.toggle("shift-on");
    shiftr.classList.toggle("shift-on");
});
shiftr.addEventListener("click", function () {
    shiftr.classList.toggle("shift-on");
    shiftl.classList.toggle("shift-on");
});
// Grab all Shift Items and output them and the textContent for them
// In keyboard/shift.ts
const shiftItemIds = ['backtick', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'dash', 'equals', 'leftsq', 'rtsq', 'backslash', 'semicolon', 'quotes', 'comma', 'period', 'forwardslash'];
createShiftItems(shiftItemIds);
shiftl.addEventListener("click", changeInner);
shiftr.addEventListener("click", changeInner);
// add NON-ALPHABETIC CHARACTERS (numbers & symbols) to textarea
// I'm having a problem getting these keys
nonAlphaKeys();
/* ===========================================
  add nonprint keys functionality for textarea
============================================ */
const backspace = document.getElementById("backspace");
const deleteKey = document.getElementById("delete");
// BACKSPACE
backspace.addEventListener("click", removeCharBehind);
// DELETE
deleteKey.addEventListener("click", removeCharAhead);
/* Leaving Tab, Spacebar, and Enter functionality here */
// TAB (set to 5 spaces)
const tab = document.getElementById("tab");
tab.addEventListener("click", function () {
    if (tab.classList.contains("tab")) {
        const x = cursorPosition(textBox);
        textBox.value = textBox.value.slice(0, x) + `     ` + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + 5;
    }
});
// SPACEBAR
const spacebar = document.getElementById("spacebar");
spacebar.addEventListener("click", function () {
    if (spacebar.classList.contains("spacebar")) {
        const x = cursorPosition(textBox);
        textBox.value = textBox.value.slice(0, x) + " " + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + 1;
    }
});
// ENTER
const enter = document.getElementById("enter");
enter.addEventListener("click", function () {
    const x = cursorPosition(textBox);
    textBox.value = textBox.value.slice(0, x) + "\n" + textBox.value.slice(x);
    textBox.focus();
    textBox.selectionEnd = x + 1;
});
/* ===================================
add navigation keys functionality
===================================== */
const home = document.getElementById("homekey");
const end = document.getElementById("end");
const leftarrow = document.getElementById("leftarrow");
const rightarrow = document.getElementById("rightarrow");
// HOME key
home.addEventListener("click", focusAtStart);
// END key
end.addEventListener("click", focusAtEnd);
// LEFT ARROW key
leftarrow.addEventListener("click", arrowLeft);
// RIGHT ARROW key
rightarrow.addEventListener("click", arrowRight);
// Copy textarea to clipboard
const copy = document.getElementById("copy");
copy.addEventListener("click", copyTextArea);
/* Open and Close modal for clearing the textarea */
const openModal = document.getElementById("open");
openModal.addEventListener("click", openModalOnClick);
const closeModal = document.getElementById("close");
closeModal.addEventListener("click", closeModalOnClick);
// Clear textarea
const clearText = document.getElementById("clearText");
clearText.addEventListener("click", clearTextarea);

