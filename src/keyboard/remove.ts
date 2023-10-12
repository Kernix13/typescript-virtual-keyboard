import { cursorPosition } from "../utils/cursorPosition.js";
const textBox = document.getElementById('text-box') as HTMLTextAreaElement;

// 
/**
 * BACKSPACE key: add functionality for the Backpace key to remove the
 * character or space to the left (behind) the cursor. 
 */
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

/**
 * DELETE key: add functionality for the Delete key to remove the
 * character or space to the right (ahead) of the cursor. 
 */
export function removeCharAhead(): void {
  const x = cursorPosition(textBox);
  textBox.value = textBox.value.slice(0, x) + textBox.value.slice(x + 1);
  textBox.focus();
  textBox.selectionEnd = x;
}