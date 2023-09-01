// Create the li and button for Alpha and Proper Nouns
export function createListItems(btnText, btnClass) {
    const li = document.createElement("li");
    li.classList.add("text-btn");
    const liBtn = document.createElement("button");
    liBtn.className = btnClass;
    liBtn.value = btnText;
    const liBtnText = document.createTextNode(btnText);
    liBtn.append(liBtnText);
    li.append(liBtn);
    return li;
}
// Get cursor position in textarea
export function cursorPosition(element) {
    const position = element.selectionStart;
    return position;
}
