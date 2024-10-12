// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.2.2

"use strict";

// roseview web framework for
// declarative UI development.

// @license
// MIT

// @version
// 0.2.2

"use strict";

export const roseComponent = class {
    constructor() {
        /** @type {HTMLElement | null} */
        this.element = null;
        /** @type {Array<[string, Function]>} */
        this.eventListeners = [];
        /** @type {Array<string>} */
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
        this.element?.classList.add(className);
        this.elementClasses.push(className);
        return this;
    }

    /**
     * For Legacy Reasons, This Is Maintained
     * Adds CSS styles to the element using the provided styles.
     * Accepts styles as either an object or a template literal, and applies the styles by generating a class.
     * The class is added to the element's class list.
     *
     * @param {object | TemplateStringsArray} styles - CSS styles as an object or a template literal.
     * @returns {this} - Returns the instance of the class for chaining.
     */
    style(styles) {
        return this.css(styles);
    }

    /**
     * Set the alignment of child elements in the control.
     * @param {string} options - Alignment options.
     */
    set alignment(options) {
        if (options) {
            // @ts-ignore
            optionsApi(this.element, options);
        } else {
            console.log("Alignment Options Undefined");
        }
    }

    /**
     * Add multiple classes to the element.
     * @param {string} classes - Space-separated class names.
     */
    set classes(classes) {
        classes.split(" ").forEach((v) => {
            this.element?.classList.add(v);
            this.elementClasses.push(v);
        });
    }

    /**
     * Remove multiple classes from the element.
     * @param {string} classes - Space-separated class names.
     */
    set removeClasses(classes) {
        classes.split(" ").forEach((v) => {
            this.element?.classList.remove(v);
            const index = this.elementClasses.indexOf(v);
            if (index > -1) {
                this.elementClasses.splice(index, 1);
            }
        });
    }

    /**
     * Allows you to batch set element properties using direct DOM methods.
     * @param {object} props - Properties to set on the element.
     * @returns {this} - Returns the instance of the class for chaining.
     */
    batchProps(props) {
        Object.entries(props).forEach(([key, value]) => {
            requestAnimationFrame(() => {
                if (this.element) {
                    // @ts-ignore
                    this.element[key] = value;
                }
            });
        });
        return this;
    }

    /**
     * Inserts HTML content into the element by processing template literal strings.
     *
     * @param {TemplateStringsArray} strings - The array of strings in the template literal.
     * @param {...any} values - The interpolated values from the template literal.
     */
    html(strings, ...values) {
        const htmlString = strings.reduce(
            (result, str, i) => result + str + (values[i] || ""),
            ""
        );
        if (this.element) {
            this.element.innerHTML = htmlString;
        }
    }

    /**
     * Add a child element to this element.
     * @param {roseComponent} child - The child component to add.
     * @returns {this} - Returns the instance of the class for chaining.
     */
    addChild(child) {
        if (child instanceof roseComponent && this.element) {
            // @ts-ignore
            this.element.appendChild(child.element);
        } else {
            console.error("Mounted Child Is Not A roseComponent");
        }
        return this;
    }

    /**
     * Remove a child element from this element.
     * @param {roseComponent} child - The child component to remove.
     * @returns {this} - Returns the instance of the class for chaining.
     */
    destroyChild(child) {
        if (child instanceof roseComponent) {
            child.eventListeners.forEach(([event, Fn]) => {
                // @ts-ignore
                child.element?.removeEventListener(event, Fn);
            });
            child.element?.remove();
        } else {
            console.error("Child Is Not A roseComponent");
        }
        return this;
    }

    /**
     * Add an event listener to the element.
     * @param {string} event - The event type.
     * @param {Function} handler - The event handler function.
     * @returns {this} - Returns the instance of the class for chaining.
     */
    on(event, handler) {
        // @ts-ignore
        this.element?.addEventListener(event, handler);
        this.eventListeners.push([event, handler]);
        return this;
    }

    /**
     * Sets the visibility of the element.
     * @param {boolean} bool - Visibility state.
     */
    set show(bool) {
        this.style({
            visibility: bool ? "visible" : "hidden",
        });
    }

    /**
     * Sets the display and visibility of the element.
     * @param {boolean} bool - Visibility and space control state.
     */
    set gone(bool) {
        this.style({
            display: bool ? "none !important" : "block",
            visibility: bool ? "hidden" : "visible",
        });
    }

    /**
     * Sets the margins for all child elements.
     * @param {string} params - Comma-separated margin values (left, top, right, bottom).
     */
    set setChildMargins(params) {
        const [left, top, right, bottom] = params
            .split(",")
            .map((val) => val.trim());
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
     * Sets the margins for this element.
     * @param {string} params - Comma-separated margin values (left, top, right, bottom).
     */
    set setMargins(params) {
        const [left, top, right, bottom] = params
            .split(",")
            .map((val) => val.trim());
        this.style({
            marginLeft: left,
            marginRight: right,
            marginTop: top,
            marginBottom: bottom,
        });
    }

    /**
     * Sets the padding for this element.
     * @param {string} params - Comma-separated padding values (left, top, right, bottom).
     */
    set setPadding(params) {
        const [left, top, right, bottom] = params
            .split(",")
            .map((val) => val.trim());
        this.style({
            paddingLeft: left,
            paddingRight: right,
            paddingTop: top,
            paddingBottom: bottom,
        });
    }

    /**
     * Sets the position and offset values for this element.
     * @param {string} params - Comma-separated position values (left, top, right, bottom).
     */
    set setPosition(params) {
        const [leftv, topv, rightv, bottomv] = params
            .split(",")
            .map((val) => val.trim());
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
 * Class representing an HTML element with additional features like properties and rendering.
 * @extends {roseComponent}
 */
export const htmlElement = class extends roseComponent {
    /**
     * Creates an instance of htmlElement.
     * @param {HTMLElement} parent - The parent element to attach this element to.
     * @param {string} tag - The tag name of the element to create.
     * @param {Object} props - The properties to apply to the element.
     */
    constructor(parent, tag, props = {}) {
        super();

        /** @type {HTMLElement} */
        this.element = document.createElement(tag);

        Object.entries(props).forEach(([key, value]) => {
            requestAnimationFrame(() => {
                // @ts-ignore
                this.element[key] = value;
            });
        });

        if (parent instanceof roseComponent) {
            parent.addChild(this);
        } else {
            console.error("No Parent For Component To Attach To.");
            return;
        }
    }
};

// More code below...

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

/**
 * Creates a special div which has options allowing
 * you to define the position of its children.
 * @param {string} type - The type of container (e.g., 'div', 'section').
 * @param {string} options - Alignment options to define the childrens
 * alignment in the container, so as the size of the container.
 * @returns {htmlContainer} - A new htmlContainer instance.
 */
export const htmlLayout = class extends roseComponent {
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
