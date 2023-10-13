/**
 * Get cursor position in textarea for many of the keyboard functions.
 * 
 * @param element 
 * @returns number
 */
export function cursorPosition(element: HTMLTextAreaElement) {
  const position: number = element.selectionStart;
  return position;
}