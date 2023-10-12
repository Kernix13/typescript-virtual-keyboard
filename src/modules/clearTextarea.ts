const textBox = document.getElementById('text-box') as HTMLTextAreaElement;
const modal = document.getElementById("modal")! as HTMLDivElement;

/**
 * Open modal on click as a confirmation to clear the text 
 * in the textarea.
 */
export function clearTextarea(): void {
  textBox.value = "";
  textBox.focus();
  modal.classList.remove("show-modal");
}