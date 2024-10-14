// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.2.2

// page Module

/**
 * Load A StyleSheet
 * @param {string} dir
 */
const loadStyleSheet = function (dir) {
    const link = document.createElement("link");
    link.href = dir;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
};

/**
 * Get the current system theme
 * @returns ColorScheme
 */
const pageTheme = function () {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        return "dark";
    } else return "light";
};

/**
 * Set The Current Page Title
 * @param {*} title
 */
const pageTitle = function (title) {
    document.title = title;
};

export { loadStyleSheet, pageTheme, pageTitle };
