import { cursorPosition } from "../utils/cursorPosition.js";
const textBox = document.getElementById('text-box') as HTMLTextAreaElement;

// BACKSPACE
export function removeCharBehind(): void {
  const x = cursorPosition(textBox);
  if (x != 0) {
    textBox.value = textBox.value.slice(0, x - 1) + textBox.value.slice(x);
    textBox.focus();
    textBox.selectionEnd = x - 1;
  } else {
    textBox.focus();
  }
}

// DELETE
export function removeCharAhead(): void {
  const x = cursorPosition(textBox);
  textBox.value = textBox.value.slice(0, x) + textBox.value.slice(x + 1);
  textBox.focus();
  textBox.selectionEnd = x;
}