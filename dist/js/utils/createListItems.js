/**
 * Create the li and button elements for Alpha and Proper Nouns
 *
 * @param btnText string
 * @param btnClass string
 * @returns HTMLLIElement
 */
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
