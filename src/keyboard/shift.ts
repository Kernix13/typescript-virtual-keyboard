const shiftArr: HTMLButtonElement[] = [];
const shiftl = document.getElementById("shiftl")!;
const shiftr = document.getElementById("shiftr")!;
const shiftOffValues: string[] = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', '\'', ',', '.', '/', ]
const shiftOnValues: string[] = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?',];

export function createShiftItems(arr: string[]) {
  arr.forEach((item: string) => {
    const shiftItem = document.getElementById(item)! as HTMLButtonElement;
    shiftArr.push(shiftItem);
  })
  return shiftArr;
}

export function changeInner() {
  shiftOnValues.forEach((item, i) => {
    if (shiftl.classList.contains('shift-on') || shiftr.classList.contains('shift-on')) {
      shiftArr[i].textContent = item;
    } else {
      shiftArr[i].textContent = shiftOffValues[i];
    }
  })
}