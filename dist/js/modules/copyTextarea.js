const textBox = document.getElementById('text-box');
/**
 * Use the Clipboard API to copy the textarea on click and
 * highlight the text as a visual clue for the user.
 *
 * @returns
 */
export async function copyTextArea() {
    if (!navigator.clipboard) {
        alert("Copy to clipboard not supported");
        return;
    }
    try {
        await navigator.clipboard.writeText(textBox.value);
        textBox.select();
    }
    catch (err) {
        console.error("Failed to copy: ", err);
    }
}
