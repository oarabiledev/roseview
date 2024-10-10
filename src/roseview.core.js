// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.2.1
// @ts-nocheck

"use strict";

/**
 * Creates a special div which has options allowing
 * you to define the position of its children.
 * @param {string} type - The type of container (e.g., 'div', 'section').
 * @param {string} options - Alignment options to define the childrens
 * alignment in the container, so as the size of the container.
 * @returns {htmlContainer} - A new htmlContainer instance.
 */
export function CreateLayout(type, options) {
    return new htmlContainer(type, options);
}

export const roseComponent = class {
    constructor() {
        this.element;
        this.eventListeners = [];
        this.elementClasses = [];
    }

    /**
     * Adds CSS styles to the element using the provided styles.
     * Accepts styles as either an object or a template literal, and applies the styles by generating a class.
     * The class is added to the element's class list.
     *
     * @param {object | TemplateStringsArray} styles - CSS styles as an object or a template literal.
     * @returns {this} - Returns the instance of the class for chaining.
     */
    css(styles) {
        const className = cssParser(styles);
        this.element.classList.add(className);
        this.elementClasses.push(className);
        return this;
    }

    /**
     * For Legacy Reasons , This Is Maintained
     * Adds CSS styles to the element using the provided styles.
     * Accepts styles as either an object or a template literal, and applies the styles by generating a class.
     * The class is added to the element's class list.
     *
     * @param {object | TemplateStringsArray} styles - CSS styles as an object or a template literal.
     * @returns {this} - Returns the instance of the class for chaining.
     */
    style(styles) {
        this.css(styles);
        return this;
    }

    /**
     * Set the aligmnet of child elements on your control
     * @param {string} options
     */
    set alignment(options) {
        options
            ? optionsApi(this.element, options)
            : console.log("Alignment Options Undefined");
    }

    /**
     * Add multiple classes
     * @param {string} classes
     */
    set classes(classes) {
        classes.split(" ").map((v) => {
            this.element.classList.add(v);
            this.elementClasses.push(v);
        });
    }

    /**
     * Remove Classes
     * @param {string} classes
     */
    set removeClasses(classes) {
        classes.split(" ").map((v) => {
            this.element.classList.remove(v);
            this.elementClasses.indexOf(v);
        });
    }

    /**
     * Allows you to use direct DOM methods on elements,
     * In the context provided as an object.
     * @param {object} props
     */
    batchProps(props) {
        Object.entries(props).forEach(([key, value]) => {
            requestAnimationFrame(() => {
                // @ts-ignore
                this.element[key] = value;
            });
        });
        return this;
    }

    /**
     * Inserts HTML content into an element by processing template literal strings.
     *
     * @param {TemplateStringsArray} strings - The array of strings in the template literal.
     * @param {...any} values - The interpolated values from the template literal.
     */
    html(strings, ...values) {
        let htmlString = strings.reduce((result, str, i) => {
            return result + str + (values[i] || "");
        }, "");
        this.element.innerHTML = htmlString;
    }

    /**
     * Add a child to that element
     * @param {Function} child
     */
    addChild(child) {
        if (child instanceof roseComponent) {
            this.element.appendChild(child.element);
        } else {
            console.error("Mounted Child Is Not A htmlComponent");
        }
        return this;
    }

    /**
     * Remove The Child
     * @param {object} child
     */
    destroyChild(child) {
        if (child instanceof roseComponent) {
            child.eventListeners.forEach((el) => {
                // @ts-ignore
                let [event, Fn] = el;
                child.element.removeEventListener(event, Fn);
            });

            child.element.remove();
        } else {
            console.error("Child Is Not A htmlComponent");
        }
        return this;
    }

    /**
     * Add an event listener and handler.
     * @param {EventListener} event
     * @param {Function} handler
     */
    on(event, handler) {
        // @ts-ignore
        this.element.addEventListener(event, handler);
        // @ts-ignore
        this.eventListeners.push([event, handler]);
        return this;
    }

    /**
     * Setter method to switch element visibility
     * @param {boolean} bool
     */
    set show(bool) {
        if (bool) {
            this.style({
                visibility: "visible",
            });
        } else {
            this.style({
                visibility: "hidden",
            });
        }
    }

    /**
     * Setter method, allows switching element visibility
     * in a way that the element does not take space
     * @param {boolean} bool
     */
    set gone(bool) {
        if (bool) {
            this.style({
                display: "none !important",
                visibility: "hidden",
            });
        } else {
            this.style({
                display: "block",
                visibility: "visible",
            });
        }
    }

    /**
     * Set The Margins Of Child Elements
     * @param {string} params
     */
    set setChildMargins(params) {
        let [left, top, right, bottom] = params.split(",").map((val) => {
            return val.trim();
        });

        this.style({
            " *": {
                marginLeft: left,
                marginTop: top,
                marginRight: right,
                marginBottom: bottom,
            },
        });
    }

    /**
     * Set The Margins Of The Element
     * @param {string} params
     */
    set setMargins(params) {
        let [left, top, right, bottom] = params.split(",").map((val) => {
            return val.trim();
        });

        this.style({
            marginLeft: left,
            marginRight: right,
            marginTop: top,
            marginBottom: bottom,
        });
    }

    /**
     * Set The Pading Of The Element
     * @param {string} params
     */
    set setPadding(params) {
        let [left, top, right, bottom] = params.split(",").map((val) => {
            return val.trim();
        });

        this.style({
            paddingLeft: left,
            paddingRight: right,
            paddingTop: top,
            paddingBottom: bottom,
        });
    }

    /**
     * Set The Position Of The Element
     * @param {string} params
     */

    set setPosition(params) {
        let [leftv, topv, rightv, bottomv] = params.split(",").map((val) => {
            return val.trim();
        });

        this.style({
            position: "relative",
            left: leftv,
            right: rightv,
            top: topv,
            bottom: bottomv,
        });
    }
};

/**
 * This class allows you to create and render html elements
 * in your layout and add properties in an object style.
 * @param {HTMLElement} parent - The parent element to attach this element to.
 * @param {string} tag - The tag name of the element to create.
 * @param {Object} props - The properties to apply to the element.
 * @returns {HTMLElement} The created HTML element with methods and properties accessible.
 */
export const htmlElement = class extends roseComponent {
    constructor(parent, tag, props = {}) {
        super();

        /** @type {HTMLElement} */
        this.element = document.createElement(tag);

        Object.entries(props).forEach(([key, value]) => {
            requestAnimationFrame(() => {
                this.element[key] = value;
            });
        });

        if (parent) {
            parent.addChild(this);
        } else {
            console.error("No Parent For Component To Attach To.");
            return;
        }
    }
};

let viewOptions = [
    "noscrollbar",
    "scrollxy",
    "scrollx",
    "scrolly",
    "top",
    "bottom",
    "left",
    "right",
    "horizontal",
    "vertical",
    "vcenter",
    "center",
    "fillxy",
    "fillx",
    "filly",
];

/**
 *
 * @param {HTMLElement} element
 * @param {string} options
 */
const optionsApi = (element, options) => {
    const functions = {
        noscrollbar: () => {
            element.classList.add("noscrollbar");
        },

        fillxy: () => {
            let className = cssParser({
                width: "100%",
                height: window.innerHeight + "px",
            });
            element.classList.add(className);
        },

        fillx: () => {
            let className = cssParser({
                width: "100%",
            });
            element.classList.add(className);
        },

        filly: () => {
            let className = cssParser({
                height: window.innerHeight + "px",
            });
            element.classList.add(className);
        },

        scrollxy: () => {
            let className = cssParser({
                overflow: "auto",
            });
            element.classList.add(className);
        },
        scrollx: () => {
            let className = cssParser({
                overflowX: "auto",
            });
            element.classList.add(className);
        },
        scrolly: () => {
            let className = cssParser({
                overflowY: "auto",
            });
            element.classList.add(className);
        },
        left: () => {
            let className = cssParser({
                display: "flex",
                justifyContent: "flex-start",
            });
            element.classList.add(className);
        },
        right: () => {
            let className = cssParser({
                display: "flex",
                justifyContent: "flex-end",
            });
            element.classList.add(className);
        },
        center: () => {
            let className = cssParser({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            });
            element.classList.add(className);
        },
        vcenter: () => {
            let className = cssParser({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            });
            element.classList.add(className);
        },
        bottom: () => {
            let className = cssParser({
                display: "flex",
                alignItems: "flex-end",
            });
            element.classList.add(className);
        },
        top: () => {
            let className = cssParser({
                display: "flex",
                alignItems: "flex-start",
            });
            element.classList.add(className);
        },
        horizontal: () => {
            let className = cssParser({
                display: "flex",
                flexDirection: "row !important",
            });
            element.classList.add(className);
        },
        vertical: () => {
            let className = cssParser({
                display: "flex",
                flexDirection: "column",
            });
            element.classList.add(className);
        },
    };

    options
        .toLowerCase()
        .replace(/\s/g, "")
        .split(",")
        .forEach((el) => {
            if (viewOptions.includes(el)) {
                // @ts-ignore
                functions[el]();
            } else {
                console.error(`Unknown option: ${el}`);
            }
        });
};

/**
 * An internal api used by containers and elements, this
 * function adds css required for certain types of
 * layouts.
 * @param {HTMLElement} layout
 * @param {string} type
 * @param {string} options
 */
function layoutFitApi(layout, type, options) {
    options ? optionsApi(layout, options) : null;

    let layoutTYPE = type.toLowerCase();

    if (layoutTYPE == "linear") {
        let className = cssParser({
            display: "inline-flex",
            position: "relative !important",
            flexDirection: "column !important",
        });
        layout.classList.add(className);
    } else if (layoutTYPE == "absolute") {
        let className = cssParser({
            display: "flex",
        });
        layout.classList.add(className);
    } else console.error("Unknown Layout ", layout);
}

/**
 * An internal function that generates classnames
 * for your scoped syles
 * @returns string
 */
const generateClassName = (() => {
    let counter = 0;
    return () => `roseview-class-${counter++}`;
})();

/**
 * Add CSS properties, works with both template literals
 * and objects (like Emotion in React).
 * Automatically detects the type of
 * input and returns a class name.
 *
 * @param {TemplateStringsArray | object} styles - CSS styles as either a template literal or an object.
 * @param {...any} values - Optional values for template literals.
 * @returns {string} ClassName - The generated class name.
 */
export const cssParser = (styles, ...values) => {
    const className = generateClassName();
    const styleSheet =
        document.styleSheets[0] ||
        document.head.appendChild(document.createElement("style")).sheet;

    let cssString = "";

    /**
     * @type {Array<any> | null}
     */
    let nestedCssRules = [];

    /**
     * @type {Array<any> | null}
     */
    let mediaQueryRules = [];

    /**
     * Parses a style object and generates a CSS string.
     * Handles nested selectors, pseudo-classes, and media queries.
     *
     * @param {object} styles - An object representing CSS properties and values.
     * @param {string} selector - The CSS selector to apply the styles to.
     * @returns {string} - A string representing the base CSS styles for the selector.
     */
    const parseStyles = (styles, selector) => {
        let baseStyles = "";
        Object.entries(styles).forEach(([key, value]) => {
            if (typeof value === "object") {
                if (key.startsWith("@")) {
                    mediaQueryRules.push({
                        media: key,
                        selector,
                        styles: value,
                    });
                } else if (key.startsWith("&:")) {
                    // Handle pseudo-classes prefixed with "&:"
                    const pseudoClass = key.replace("&", selector);
                    nestedCssRules.push({
                        selector: pseudoClass,
                        styles: value,
                    });
                } else {
                    // Handle other nested selectors
                    nestedCssRules.push({
                        selector: `${selector} ${key}`,
                        styles: value,
                    });
                }
            } else {
                baseStyles += `${key
                    .replace(/([A-Z])/g, "-$1")
                    .toLowerCase()}: ${value}; `;
            }
        });
        return baseStyles;
    };

    // Check if 'styles' is a template literal or an object
    if (typeof styles === "object" && !Array.isArray(styles)) {
        // It's an object, so we parse it
        cssString = parseStyles(styles, `.${className}`);
    } else if (Array.isArray(styles)) {
        // It's a template literal, combine strings and values into CSS string
        cssString = styles.reduce((result, str, i) => {
            return result + str + (values[i] || "");
        }, "");
    }

    // Insert base class CSS rule
    if (cssString) {
        styleSheet.insertRule(
            `.${className} { ${cssString} }`,
            styleSheet.cssRules.length
        );
    }

    // Insert nested CSS rules
    nestedCssRules.forEach(({ selector, styles }) => {
        const nestedCssString = parseStyles(styles, selector);
        if (nestedCssString) {
            const rule = `${selector} { ${nestedCssString} }`;
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
        }
    });

    // Insert media query rules
    mediaQueryRules.forEach(({ media, selector, styles }) => {
        const nestedCssString = parseStyles(styles, selector);
        if (nestedCssString) {
            const rule = `${media} { ${selector} { ${nestedCssString} } }`;
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
        }
    });

    return className;
};

const htmlContainer = class extends roseComponent {
    constructor(type = "linear", options = "fillxy,vcenter") {
        super();

        this.element = document.createElement("div");
        type ? layoutFitApi(this.element, type, options) : null;
    }
};

/**
 * This function is used to attach the main component
 * of your app, so as to mount plugins
 * @param {Function} mainComponent
 * @returns
 */
export const createApp = function (mainComponent) {
    const app = {
        _rootComponent: mainComponent,
        _plugins: [],

        /**
         * An Elements Id
         * The provided string is queried so that the
         * main component is appended to it.
         * @param {string} selector
         * @returns this
         */
        mount: function (selector) {
            const container = document.querySelector(selector);
            if (!container) {
                console.error(`No element found for selector "${selector}"`);
                return;
            }

            document.body.style.margin = "0";
            document.body.style.width = "100%";

            container.innerHTML = "";
            const instance = this._rootComponent;
            // @ts-ignore
            container.appendChild(instance.element);
            return this;
        },

        /**
         *
         * @param {Function} plugin
         * @returns this
         */
        use(plugin) {
            // @ts-ignore
            if (typeof plugin._install === "function") {
                // @ts-ignore
                plugin._install(this);
                // @ts-ignore
                this._plugins.push(plugin);
            }
            return this;
        },
    };
    return app;
};
