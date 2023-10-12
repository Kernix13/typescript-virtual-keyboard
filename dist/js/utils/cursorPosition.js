/**
 * Get cursor position in textarea for many functions.
 *
 * @param element
 * @returns number
 */
export function cursorPosition(element) {
    const position = element.selectionStart;
    return position;
}
