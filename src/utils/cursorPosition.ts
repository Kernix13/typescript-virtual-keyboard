/* Get cursor position in textarea */
export function cursorPosition(element: HTMLTextAreaElement) {
  const position: number = element.selectionStart;
  return position;
}