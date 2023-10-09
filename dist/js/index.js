import { wordsToSplit, properToSplit } from './modules/content.js';
import { splitWords, pageOutput } from './alpha.js';
import { openModalOnClick, closeModalOnClick } from "./modal.js";
import { properNouns, properNounOutput } from "./proper.js";
import { cursorPosition } from './utils/cursorPosition.js';
import { addLetters } from "./keyboard/letters.js";
import { createShiftItems, changeInner } from "./keyboard/shift.js";
import { nonAlphaKeys } from "./keyboard/nonalpha.js";
import { focusAtStart, focusAtEnd, arrowLeft, arrowRight } from "./keyboard/navigation.js";
import { removeCharBehind } from "./keyboard/remove.js";
import { removeCharAhead } from "./keyboard/remove.js";
import { copyTextArea } from './modules/copyTextarea.js';
import { clearTextarea } from './modules/clearTextarea.js';
import { toggleMainNav } from './modules/toggleMainNav.js';
import { addWordsToTextarea } from './modules/addWordsToTextarea.js';
const textBox = document.getElementById('text-box');
/* add the alphabetical words to an array */
pageOutput(splitWords(wordsToSplit));
/* SHOW ALPHABET SUBMENU ON CLICK */
const mainNavLi = document.querySelectorAll(".main-nav li");
toggleMainNav(mainNavLi);
/* ======= adding ALPHA words to TEXTAREA ======= */
addWordsToTextarea();
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
console.log("Testing root TS file");
