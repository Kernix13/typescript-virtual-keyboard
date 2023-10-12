import { cursorPosition } from "../utils/cursorPosition.js";

const textBox = document.getElementById('text-box') as HTMLTextAreaElement;
const enter = document.getElementById("enter")!;

/**
 * Allow Enter key to break to a new line, including slicing the text
 * in the textarea if the cursor position is not at the end of the text.
 */
export default function enterKey(): void {
  const x = cursorPosition(textBox);
  textBox.value = textBox.value.slice(0, x) + "\n" + textBox.value.slice(x);
  textBox.focus();
  textBox.selectionEnd = x + 1;
}