/* ===============================
  MODAL & CLEAR functionality for textarea
================================== */
const textBox = document.getElementById('text-box') as HTMLTextAreaElement;
const modal = document.getElementById("modal")! as HTMLDivElement;

// Open modal for confirmation and clear the text area
export function openModalOnClick(): void {
  modal.classList.add("show-modal");
}

// Close modal
export function closeModalOnClick(): void {
  modal.classList.remove("show-modal");
}

window.addEventListener("click", e => (e.target === modal ? modal.classList.remove("show-modal") : false));

// clear textarea
export function clearTextarea(): void {
  textBox.value = "";
  textBox.focus();
  modal.classList.remove("show-modal");
}
