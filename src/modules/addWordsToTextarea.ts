import { cursorPosition } from "../utils/cursorPosition.js";

export function addWordsToTextarea() {

  const textBox = document.getElementById('text-box') as HTMLTextAreaElement;
  const [...textBtns] = document.getElementsByClassName("text-btn") as HTMLCollectionOf<HTMLLIElement>;

  textBtns.map((item): void => {
  if (item) {
    item.addEventListener("click", (e: MouseEvent) => {
      // Getting an error so I had to create 'w'
      const w = <HTMLButtonElement>e.target;
      const word = w.textContent!;
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
      } else {
        textBox.value = textBox.value.slice(0, x) + " " + word + textBox.value.slice(x);
        textBox.focus();
        textBox.selectionEnd = x + word.length + 1;
        return textBox.value;
      }
    });
  }
});
}