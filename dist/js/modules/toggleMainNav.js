/**
 * Open the submenu when you click any alphabet letter
 *
 * @param elements main-nav li elements
 */
export function toggleMainNav(elements) {
    elements.forEach(item => {
        item.addEventListener('click', (e) => {
            item.classList.toggle('active');
            // if statement to fix error: Uncaught TypeError ...
            if (item.children[1]) {
                item.children[1].classList.toggle('show');
            }
            else {
                item.classList.toggle('active');
            }
        });
    });
}
