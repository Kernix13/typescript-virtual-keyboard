import { createListItems } from "./utils/createListItems.js";

/* ==== BEGIN ALPHA MANIPULATION & OUTPUT ===== */
// split alphabetical words from content.js
export function splitWords(str: string): string[] {
  const words: string[] = str.split(/[^a-zA-Z'-]+/gi);
  return words;
}

/* ====================================================
pageOutput places the words in each alphabet letter div
Need a Fx to toggle .hide to only show submenu when clicked
==================================================== */
export function pageOutput(arr: string[]): void {
  arr.map((item) => {
    
    const firstLetter: string = item.charAt(0);
    const id = `letter${firstLetter}`;
    const ul = document.getElementById(id)!;
    
    // find matching UL in the DOM and append li elements:
    const domLetterUls: NodeListOf<HTMLUListElement> = document.querySelectorAll(".top-words");
    domLetterUls.forEach(list => {
      if (id === list.id) {
        ul.append(createListItems(item, "alpha"));
      }
    })
  });
}
// pageOutput(splitWords(wordsToSplit));

