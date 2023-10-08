/* ===============================
  CLEAR functionality for textarea
================================== */
const textBox = document.getElementById('text-box');
const modal = document.getElementById("modal");
export function clearTextarea() {
    textBox.value = "";
    textBox.focus();
    modal.classList.remove("show-modal");
}
