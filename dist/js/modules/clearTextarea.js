const textBox = document.getElementById('text-box');
const modal = document.getElementById("modal");
/**
 * Clear the textarea after clicking button on modal
 */
export function clearTextarea() {
    textBox.value = "";
    textBox.focus();
    modal.classList.remove("show-modal");
}
