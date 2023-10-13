const modal = document.getElementById("modal")! as HTMLDivElement;

/**
 * Open modal for confirmation and clear the textarea on button click
 *  
 */
export function openModalOnClick(): void {
  modal.classList.add("show-modal");
}

/**
 * Close modal on click
 * 
 */
export function closeModalOnClick(): void {
  modal.classList.remove("show-modal");
}

/**
 * Close modal on click outside of modal
 */
window.addEventListener("click", e => (e.target === modal ? modal.classList.remove("show-modal") : false));
