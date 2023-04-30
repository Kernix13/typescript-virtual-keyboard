const shiftArr = [];
const shiftl = document.getElementById("shiftl");
const shiftr = document.getElementById("shiftr");
const shiftOffValues = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/',];
const shiftOnValues = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?',];
export function createShiftItems(arr) {
    arr.forEach((item) => {
        const shiftItem = document.getElementById(item);
        shiftArr.push(shiftItem);
    });
    return shiftArr;
}
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
