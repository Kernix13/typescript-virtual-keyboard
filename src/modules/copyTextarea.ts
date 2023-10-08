/* ==============================================
  COPY (Clipboard API) functionality for textarea
================================================= */
const textBox = document.getElementById('text-box') as HTMLTextAreaElement;

export async function copyTextArea(): Promise<void> {
  if (!navigator.clipboard) {
    alert("Copy to clipboard not supported");
    return;
  }
  try {
    await navigator.clipboard.writeText(textBox.value);
    textBox.select();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}