/* ===============================
  CLEAR functionality for textarea
================================== */
const textBox = document.getElementById('text-box') as HTMLTextAreaElement;
const modal = document.getElementById("modal")! as HTMLDivElement;

export function clearTextarea(): void {
  textBox.value = "";
  textBox.focus();
  modal.classList.remove("show-modal");
}