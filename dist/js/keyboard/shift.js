const shiftArr = [];
const shiftl = document.getElementById("shiftl");
const shiftr = document.getElementById("shiftr");
const shiftOffValues = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/',];
const shiftOnValues = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?',];
/**
 * Gets the elements by id and pushes them onto an array to be used
 * by changeInner()
 *
 * @param {array} arr Element ids connected to the Shift key
 * @returns
 */
export function createShiftItems(arr) {
    arr.forEach((item) => {
        const shiftItem = document.getElementById(item);
        shiftArr.push(shiftItem);
    });
    return shiftArr;
}
/**
 * Changes the textcontent for all the shift keys when the Shift key
 * is toggled on and off
 */
export function changeInner() {
    shiftOnValues.forEach((item, i) => {
        if (shiftl.classList.contains('shift-on') || shiftr.classList.contains('shift-on')) {
            shiftArr[i].textContent = item;
        }
        else {
            shiftArr[i].textContent = shiftOffValues[i];
        }
    });
}
