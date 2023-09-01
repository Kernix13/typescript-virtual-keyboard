/* ===============================
  MODAL & CLEAR functionality for textarea
================================== */
const textBox = document.getElementById('text-box');
const modal = document.getElementById("modal");
// Open modal for confirmation and clear the text area
export function openModalOnClick() {
    modal.classList.add("show-modal");
}
// Close modal
export function closeModalOnClick() {
    modal.classList.remove("show-modal");
}
window.addEventListener("click", e => (e.target === modal ? modal.classList.remove("show-modal") : false));
// clear textarea
export function clearTextarea() {
    textBox.value = "";
    textBox.focus();
    modal.classList.remove("show-modal");
}
