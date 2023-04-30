import { createListItems } from './utils.js';

/* ==== BEGIN PROPER NOUNS MANIPULATION & OUTPUT ===== */

// split proper nouns from content.js
export function properNouns(str: string): string[] {
  const nouns = str.split(/[^a-zA-Z\s.:?!'-]\s+/gi);
  return nouns;
}

/* ==================================
properNounOutput places the Proper Nouns in the #special-words div
=================================== */
export function properNounOutput(arr: string[]) {
  arr.map(item => {
    const specialNoun = document.getElementById("special-words")!;
    specialNoun.append(createListItems(item, "special"));
  });
}