// DOM Helper
const DOMHelper = {
    createElement(tag, className = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        return element;
    }
};
window.DOMHelper = DOMHelper;
