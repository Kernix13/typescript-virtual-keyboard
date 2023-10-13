const modal = document.getElementById("modal");
/**
 * Open modal for confirmation and clear the textarea on button click
 *
 */
export function openModalOnClick() {
    modal.classList.add("show-modal");
}
/**
 * Close modal on click
 *
 */
export function closeModalOnClick() {
    modal.classList.remove("show-modal");
}
/**
 * Close modal on click outside of modal
 */
window.addEventListener("click", e => (e.target === modal ? modal.classList.remove("show-modal") : false));
