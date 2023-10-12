import { cursorPosition } from "../utils/cursorPosition.js";

const textBox = document.getElementById('text-box') as HTMLTextAreaElement;
const [...nonAlpha] = document.getElementsByClassName("nonAlpha");

/**
 * Add all characters other than alphabet letters to the textarea. 
 * Checks for the HTML entities for '&' and '<' and '>'.
 */
export function nonAlphaKeys() {
  nonAlpha.map(item => {
    item.addEventListener("click", (e: Event) => {
      const x = cursorPosition(textBox);
      const ch = <HTMLButtonElement>e.target!;
      const char = ch.innerHTML!;
      const sliceStart = textBox.value.slice(0, x);
      const sliceEnd = textBox.value.slice(x);
      if (char == "&amp;") {
        textBox.value = sliceStart + "&" + sliceEnd;
      } else if (char == "&lt;") {
        textBox.value = sliceStart + "<" + sliceEnd;
      } else if (char == "&gt;") {
        textBox.value = sliceStart + ">" + sliceEnd;
      } else {
        textBox.value = sliceStart + char + sliceEnd;
      }

      textBox.focus();
      return (textBox.selectionEnd = x + 1);
    });
  });
}