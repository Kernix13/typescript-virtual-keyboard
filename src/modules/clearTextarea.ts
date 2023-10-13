const textBox = document.getElementById('text-box') as HTMLTextAreaElement;
const modal = document.getElementById("modal")! as HTMLDivElement;

/**
 * Clear the textarea after clicking button on modal
 */
export function clearTextarea(): void {
  textBox.value = "";
  textBox.focus();
  modal.classList.remove("show-modal");
}