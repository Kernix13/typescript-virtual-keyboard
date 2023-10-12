import { createListItems } from "./utils/createListItems.js";
/**
 * split proper nouns from content.js
 *
 * @param str Users string of proper nouns in content.js
 * @returns
 */
export function properNouns(str) {
    const nouns = str.split(/[^a-zA-Z\s.:?!'-]\s+/gi);
    return nouns;
}
/**
 * Places the Proper Nouns in the #special-words div
 *
 * @param arr Array of split words from properNouns()
 */
export function properNounOutput(arr) {
    arr.map(item => {
        const specialNoun = document.getElementById("special-words");
        specialNoun.append(createListItems(item, "special"));
    });
}
