/**
 * Get cursor position in textarea for many functions.
 * 
 * @param element 
 * @returns number
 */
export function cursorPosition(element: HTMLTextAreaElement) {
  const position: number = element.selectionStart;
  return position;
}