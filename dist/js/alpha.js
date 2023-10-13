import { createListItems } from "./utils/createListItems.js";
/**
 * Use Regex to split the words in content.js to be used in the
 * alphabetical menu.
 *
 * @param str Users string of words in content.js
 * @returns array of split words
 */
export function splitWords(str) {
    const words = str.split(/[^a-zA-Z'-]+/gi);
    return words;
}
/**
 * Places the words in each alphabet letter div
 *
 * @param arr Arroy of split words from splitWords()
 */
export function pageOutput(arr) {
    arr.map((item) => {
        const firstLetter = item.charAt(0);
        const id = `letter${firstLetter}`;
        const ul = document.getElementById(id);
        const domLetterUls = document.querySelectorAll(".top-words");
        domLetterUls.forEach(list => {
            if (id === list.id) {
                ul.append(createListItems(item, "alpha"));
            }
        });
    });
}
