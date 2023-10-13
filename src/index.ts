import { wordsToSplit, properToSplit } from './modules/content.js';
import { splitWords, pageOutput } from './alpha.js';
import { openModalOnClick, closeModalOnClick } from "./modal.js";
import { properNouns, properNounOutput } from "./proper.js"

import { cursorPosition } from './utils/cursorPosition.js';

import { addLetters } from "./keyboard/letters.js";
import { createShiftItems, changeInner } from "./keyboard/shift.js";
import { nonAlphaKeys } from "./keyboard/nonalpha.js";
import { focusAtStart, focusAtEnd, arrowLeft, arrowRight } from "./keyboard/navigation.js";
import { removeCharBehind } from "./keyboard/remove.js";
import { removeCharAhead } from "./keyboard/remove.js";
import tabKey from './keyboard/tabKey.js';
import spacebarKey from './keyboard/spacebarKey.js';
import enterKey from './keyboard/enterKey.js';

import { copyTextArea } from './modules/copyTextarea.js';
import { clearTextarea } from './modules/clearTextarea.js';
import { toggleMainNav } from './modules/toggleMainNav.js';
import { addWordsToTextarea } from './modules/addWordsToTextarea.js';
import { addPhrasestoTextarea } from './modules/addPhrasesToTextarea.js';

/* add the alphabetical words to an array */
pageOutput(splitWords(wordsToSplit));

/* SHOW ALPHABET SUBMENU ON CLICK */
const mainNavLi: NodeListOf<HTMLLIElement> = document.querySelectorAll(".main-nav li")!;
toggleMainNav(mainNavLi);

/* ======= adding ALPHA words to TEXTAREA ======= */
addWordsToTextarea();

/* ==== BEGIN PROPER NOUNS MANIPULATION & OUTPUT ===== */
properNounOutput(properNouns(properToSplit));

/* ACCORDIAN FOR PROPER NOUNS, need animation or transition for closing */
const accordian = document.getElementById("accordian")!;
const panel = document.getElementById("panel")!;
accordian.addEventListener("click", function() {
  panel.classList.toggle("inactive");
});

/* ====== adding PROPER words to TEXTAREA ====== */
addPhrasestoTextarea();

/* ==================================
  CONSTANTS AND EVENT LISTENERS FROM HERE TO BOTTOM OF FILE

  Add KEYBOARD CHARACTERS to textarea - LETTERS, CAPS key, SHIFT key
=================================== */
// CAPS key functionality and letters output In keyboard/letters.ts
const capsKey = document.getElementById("caps") as HTMLButtonElement;
addLetters();

// Add and remove class for highlighting the CAPS key
capsKey.addEventListener("click", function() {
  capsKey.classList.toggle("caps-on");
  capsKey.classList.toggle("caps-off");
});

// Add and remove class for highlighting the SHIFT keys
const shiftl = document.getElementById("shiftl")!;
const shiftr = document.getElementById("shiftr")!;

shiftl.addEventListener("click", function() {
  shiftl.classList.toggle("shift-on");
  shiftr.classList.toggle("shift-on");
});

shiftr.addEventListener("click", function() {
  shiftr.classList.toggle("shift-on");
  shiftl.classList.toggle("shift-on");
});

// Grab all Shift Items and output them and the textContent for them
// In keyboard/shift.ts - there has to be a better way to do this?!?
const shiftItemIds: string[] = ['backtick', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero', 'dash', 'equals', 'leftsq', 'rtsq', 'backslash', 'semicolon', 'quotes', 'comma', 'period', 'forwardslash'];
createShiftItems(shiftItemIds);

shiftl.addEventListener("click", changeInner);
shiftr.addEventListener("click", changeInner);

// Add NON-ALPHABETIC CHARACTERS (numbers & symbols) to textarea
nonAlphaKeys();

/* ===========================================
  Add nonprint keys functionality for textarea
============================================ */
const backspace = document.getElementById("backspace")!;
const deleteKey = document.getElementById("delete")!;

// BACKSPACE KEY
backspace.addEventListener("click", removeCharBehind);

// DELETE KEY
deleteKey.addEventListener("click", removeCharAhead);

// TAB KEY (set to 5 spaces)
const tab = document.getElementById("tab")!;
tab.addEventListener('click', tabKey);

// SPACEBAR KEY
const spacebar = document.getElementById("spacebar")!;
spacebar.addEventListener('click', spacebarKey);

// ENTER KEY
const enter = document.getElementById("enter")!;
enter.addEventListener('click', enterKey);

/* ===================================
add navigation keys functionality 
===================================== */
const home = document.getElementById("homekey")!;
const end = document.getElementById("end")!;
const leftarrow = document.getElementById("leftarrow")!;
const rightarrow = document.getElementById("rightarrow")!;

// HOME key
home.addEventListener("click", focusAtStart);

// END key
end.addEventListener("click", focusAtEnd);

// LEFT ARROW key
leftarrow.addEventListener("click", arrowLeft);

// RIGHT ARROW key
rightarrow.addEventListener("click", arrowRight);

/* ===================================
add Copy & Clear Textarea and Open/Close Modal 
===================================== */
// Copy textarea to clipboard
const copy = document.getElementById("copy")! as HTMLButtonElement;
copy.addEventListener("click", copyTextArea);

// Clear textarea
const clearText = document.getElementById("clearText")! as HTMLButtonElement;
clearText.addEventListener("click", clearTextarea);

// Open and Close modal for clearing the textarea
const openModal = document.getElementById("open")! as HTMLButtonElement;
openModal.addEventListener("click", openModalOnClick);

const closeModal = document.getElementById("close")! as HTMLButtonElement;
closeModal.addEventListener("click", closeModalOnClick);