const textBox = document.getElementById('text-box');
const modal = document.getElementById("modal");
/**
 * Open modal on click as a confirmation to clear the text
 * in the textarea.
 */
export function clearTextarea() {
    textBox.value = "";
    textBox.focus();
    modal.classList.remove("show-modal");
}
