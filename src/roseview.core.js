// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.1.9

"use strict";

const html = {
    /**
     * Creates a special div which has options allowing
     * you to define the position of its children.
     * @param {string} type - The type of container (e.g., 'div', 'section').
     * @param {string} options - Options to define the container's properties (e.g., style, class).
     * @returns {htmlContainer} - A new htmlContainer instance.
     */
    CreateLayout: (type, options) => {
        return new htmlContainer(type, options);
    },

    /***
     * Add an HTMLElement
     * @param {object} parent
     * @param {HTMLElement} tag
     */
    Element: (parent, tag) => {
        return new htmlCreateElement(parent, tag);
    },

    /**
     * Creates a button element.
     * @param {object} parent - The parent element to which the button will be appended.
     * @param {string} text - The text content of the button.
     * @returns {htmlButton} - A new htmlButton instance.
     */
    Button: (parent, text) => {
        return new htmlButton(parent, text);
    },

    /**
     * Creates an image element.
     * @param {object} parent - The parent element to which the image will be appended.
     * @param {string|string[]} sources - The source(s) of the image(s).
     * @returns {htmlImage} - A new htmlImage instance.
     */
    Image: (parent, sources) => {
        // @ts-ignore
        return new htmlImage(parent, sources);
    },

    /**
     * Creates a text element.
     * @param {object} parent - The parent element to which the text will be appended.
     * @param {string} text - The text content.
     * @returns {htmlText} - A new htmlText instance.
     */
    Text: (parent, text) => {
        return new htmlText(parent, text);
    },

    /**
     * Creates a list element.
     * @param {object} parent - The parent element to which the list will be appended.
     * @param {string[]} list - An array of list items.
     * @returns {htmlList} - A new htmlList instance.
     */
    List: (parent, list) => {
        return new htmlList(parent, list);
    },

    /**
     * Creates an input element.
     * @param {object} parent - The parent element to which the input will be appended.
     * @param {string} type - The type of input (e.g., 'text', 'checkbox').
     * @returns {htmlInput} - A new htmlInput instance.
     */
    Input: (parent, type) => {
        return new htmlInput(parent, type);
    },

    /**
     * Creates a progress element.
     * @param {object} parent - The parent element to which the progress element will be appended.
     * @param {number} value - The initial value of the progress element.
     * @returns {htmlProgress} - A new htmlProgress instance.
     */
    Progress: (parent, value) => {
        return new htmlProgress(parent, value);
    },

    /**
     * Creates a div element.
     * @param {object} parent - The parent element to which the div will be appended.
     * @returns {htmlDiv} - A new htmlDiv instance.
     */
    Div: (parent) => {
        return new htmlDiv(parent);
    },

    /**
     * Creates a paragraph element.
     * @param {object} parent - The parent element to which the paragraph will be appended.
     * @param {string} text - The text content of the paragraph.
     * @returns {htmlParagraph} - A new htmlParagraph instance.
     */
    Paragraph: (parent, text) => {
        return new htmlParagraph(parent, text);
    },

    /**
     * Creates a header element.
     * @param {object} parent - The parent element to which the header will be appended.
     * @param {number} level - The level of the header (e.g., 1 for <h1>, 2 for <h2>).
     * @param {string} text - The text content of the header.
     * @returns {htmlHeader} - A new htmlHeader instance.
     */
    Header: (parent, level, text) => {
        return new htmlHeader(parent, level, text);
    },

    /**
     * Creates an anchor (link) element.
     * @param {object} parent - The parent element to which the anchor will be appended.
     * @param {string} href - The URL the anchor points to.
     * @param {string} text - The text content of the anchor.
     * @returns {htmlAnchor} - A new htmlAnchor instance.
     */
    Anchor: (parent, href, text) => {
        return new htmlAnchor(parent, href, text);
    },

    /**
     * Creates a form element.
     * @param {object} parent - The parent element to which the form will be appended.
     * @returns {htmlForm} - A new htmlForm instance.
     */
    Form: (parent) => {
        return new htmlForm(parent);
    },

    /**
     * Creates a table element.
     * @param {object} parent - The parent element to which the table will be appended.
     * @param {string[]} [headers=[]] - An array of table header titles.
     * @param {string[][]} [rows=[]] - A 2D array representing the rows and columns of the table.
     * @returns {htmlTable} - A new htmlTable instance.
     */
    Table: (parent, headers = [], rows = []) => {
        return new htmlTable(parent, headers, rows);
    },

    /**
     * Creates a select (dropdown) element.
     * @param {object} parent - The parent element to which the select will be appended.
     * @param {string[]} [options=[]] - An array of options for the dropdown.
     * @returns {htmlSelect} - A new htmlSelect instance.
     */
    Select: (parent, options = []) => {
        return new htmlSelect(parent, options);
    },

    /**
     * Creates an iframe element.
     * @param {object} parent - The parent element to which the iframe will be appended.
     * @param {string} src - The source URL of the iframe.
     * @returns {htmlIframe} - A new htmlIframe instance.
     */
    Iframe: (parent, src) => {
        return new htmlIframe(parent, src);
    },

    /**
     * Creates a label element.
     * @param {object} parent - The parent element to which the label will be appended.
     * @param {string} text - The text content of the label.
     * @returns {htmlLabel} - A new htmlLabel instance.
     */
    Label: (parent, text) => {
        return new htmlLabel(parent, text);
    },

    /**
     * Creates a video element.
     * @param {object} parent - The parent element to which the video will be appended.
     * @param {Array<String>} sources - The source(s) of the video file(s).
     * @returns {htmlVideo} - A new htmlVideo instance.
     */
    Video: (parent, sources = []) => {
        return new htmlVideo(parent, sources);
    },

    /**
     * Creates an audio element.
     * @param {object} parent - The parent element to which the audio will be appended.
     * @param {Array<String>} sources - The source(s) of the audio file(s).
     * @returns {htmlAudio} - A new htmlAudio instance.
     */
    Audio: (parent, sources = []) => {
        return new htmlAudio(parent, sources);
    },

    /**
     * Creates a textarea element.
     * @param {object} parent - The parent element to which the textarea will be appended.
     * @param {string} [value=""] - The initial text value of the textarea.
     * @returns {htmlTextarea} - A new htmlTextarea instance.
     */
    Textarea: (parent, value = "") => {
        return new htmlTextarea(parent, value);
    },

    /**
     * Creates a fieldset element.
     * @param {object} parent - The parent element to which the fieldset will be appended.
     * @param {string} [legendText=""] - The text for the fieldset's legend.
     * @returns {htmlFieldset} - A new htmlFieldset instance.
     */
    Fieldset: (parent, legendText = "") => {
        return new htmlFieldset(parent, legendText);
    },

    /**
     * Creates a datalist element.
     * @param {object} parent - The parent element to which the datalist will be appended.
     * @param {string[]} [options=[]] - An array of options for the datalist.
     * @returns {htmlDatalist} - A new htmlDatalist instance.
     */
    Datalist: (parent, options = []) => {
        return new htmlDatalist(parent, options);
    },
};

const htmlControl = class {
    constructor() {
        /**
         * @type {HTMLElement}
         */
        this.element;
        this.elementUid = null;

        /**
         * @type {Array<EventListener>}
         */
        this.eventListeners = [];

        /**
         * @type {Array<string>}
         */
        this.elementClasses = [];
    }

    /**
     * Add Element Contained Styles To That Element, refer to docs
     * @param {*} styles
     */
    style(styles) {
        const className = cssParser(styles);
        this.element.classList.add(className);
        this.elementClasses.push(className);
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
     * Add a child to that element
     * @param {Function} child
     */
    addChild(child) {
        if (child instanceof htmlControl) {
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
        if (child instanceof htmlControl) {
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

// Define individual classes for each HTML element that extends htmlControl

const htmlCreateElement = class extends htmlControl {
    /**
     * @param {any} tag
     */
    // @ts-ignore
    constructor(parent, tag) {
        super();
        this.element = document.createElement(tag);

        if (parent) parent.addChild(this);
    }
};

const htmlButton = class extends htmlControl {
    /**
     * @param {string | null} text
     */
    // @ts-ignore
    constructor(parent, text) {
        super();
        this.element = document.createElement("button");
        this.element.textContent = text;

        if (parent) parent.addChild(this);
    }
};

const htmlImage = class extends htmlControl {
    /**
     * @param {any[]} sources
     */
    // @ts-ignore
    constructor(parent, sources) {
        super();
        this.element = document.createElement("img");
        this.element.src = sources[0]; // Assuming sources is an array of image URLs
        if (sources.length > 1) this.element.srcset = sources.join(", ");

        if (parent) parent.addChild(this);
    }
};

const htmlText = class extends htmlControl {
    /**
     * @param {string | null} text
     */
    // @ts-ignore
    constructor(parent, text, props = {}) {
        super();
        this.element = document.createElement("span");
        this.element.textContent = text;

        if (parent) parent.addChild(this);
    }
};

const htmlList = class extends htmlControl {
    /**
     * @param {any[]} list
     */
    // @ts-ignore
    constructor(parent, list, props = {}) {
        super();
        this.element = document.createElement("ul");
        // @ts-ignore
        if (props.type) this.element.type = props.type;
        list.forEach((/** @type {string | null} */ item) => {
            const li = document.createElement("li");
            li.textContent = item;
            this.element.appendChild(li);
        });

        if (parent) parent.addChild(this);
    }
};

const htmlInput = class extends htmlControl {
    /**
     * @param {string} type
     */
    // @ts-ignore
    constructor(parent, type, props = {}) {
        super();
        this.element = document.createElement("input");
        this.element.type = type;

        if (parent) parent.addChild(this);
    }
};

const htmlProgress = class extends htmlControl {
    /**
     * @param {number} value
     */
    // @ts-ignore
    constructor(parent, value, props = {}) {
        super();
        this.element = document.createElement("progress");
        this.element.value = value;

        if (parent) parent.addChild(this);
    }
};

const htmlDiv = class extends htmlControl {
    // @ts-ignore
    constructor(parent, props = {}) {
        super();
        this.element = document.createElement("div");

        if (parent) parent.addChild(this);
    }
};

const htmlParagraph = class extends htmlControl {
    /**
     * @param {string | null} text
     */
    // @ts-ignore
    constructor(parent, text, props = {}) {
        super();
        this.element = document.createElement("p");
        this.element.textContent = text;

        if (parent) parent.addChild(this);
    }
};

const htmlHeader = class extends htmlControl {
    /**
     * @param {any} level
     * @param {string | null} text
     */
    // @ts-ignore
    constructor(parent, level, text, props = {}) {
        super();
        this.element = document.createElement(`h${level}`);
        this.element.textContent = text;

        if (parent) parent.addChild(this);
    }
};

const htmlAnchor = class extends htmlControl {
    /**
     * @param {string} href
     * @param {string | null} text
     */
    // @ts-ignore
    constructor(parent, href, text, props = {}) {
        super();
        this.element = document.createElement("a");
        this.element.href = href;
        this.element.textContent = text;

        if (parent) parent.addChild(this);
    }
};

const htmlForm = class extends htmlControl {
    // @ts-ignore
    constructor(parent, props = {}) {
        super();
        this.element = document.createElement("form");

        if (parent) parent.addChild(this);
    }
};

const htmlTable = class extends htmlControl {
    // @ts-ignore
    constructor(parent, headers = [], rows = [], props = {}) {
        super();
        this.element = document.createElement("table");

        if (headers.length > 0) {
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");
            headers.forEach((headerText) => {
                const th = document.createElement("th");
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            this.element.appendChild(thead);
        }

        if (rows.length > 0) {
            const tbody = document.createElement("tbody");
            rows.forEach((row) => {
                const tr = document.createElement("tr");
                row.forEach((/** @type {string | null} */ cellText) => {
                    const td = document.createElement("td");
                    td.textContent = cellText;
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            this.element.appendChild(tbody);
        }

        if (parent) parent.addChild(this);
    }
};

const htmlSelect = class extends htmlControl {
    // @ts-ignore
    constructor(parent, options = [], props = {}) {
        super();
        this.element = document.createElement("select");

        options.forEach((option) => {
            const opt = document.createElement("option");
            opt.value = option.value || option;
            opt.textContent = option.label || option;
            this.element.appendChild(opt);
        });

        if (parent) parent.addChild(this);
    }
};

const htmlIframe = class extends htmlControl {
    /**
     * @param {string} src
     */
    // @ts-ignore
    constructor(parent, src, props = {}) {
        super();
        this.element = document.createElement("iframe");
        this.element.src = src;

        if (parent) parent.addChild(this);
    }
};

const htmlLabel = class extends htmlControl {
    /**
     * @param {string | null} text
     */
    // @ts-ignore
    constructor(parent, text, props = {}) {
        super();
        this.element = document.createElement("label");
        this.element.textContent = text;

        if (parent) parent.addChild(this);
    }
};

const htmlVideo = class extends htmlControl {
    // @ts-ignore
    constructor(parent, sources = [], props = {}) {
        super();
        this.element = document.createElement("video");
        sources.forEach((src) => {
            const source = document.createElement("source");
            source.src = src;
            this.element.appendChild(source);
        });

        if (parent) parent.addChild(this);
    }
};

const htmlAudio = class extends htmlControl {
    // @ts-ignore
    constructor(parent, sources = [], props = {}) {
        super();
        this.element = document.createElement("audio");
        sources.forEach((src) => {
            const source = document.createElement("source");
            source.src = src;
            this.element.appendChild(source);
        });

        if (parent) parent.addChild(this);
    }
};

const htmlTextarea = class extends htmlControl {
    // @ts-ignore
    constructor(parent, value = "", props = {}) {
        super();
        this.element = document.createElement("textarea");
        this.element.value = value;

        if (parent) parent.addChild(this);
    }
};

const htmlFieldset = class extends htmlControl {
    // @ts-ignore
    constructor(parent, legendText = "", props = {}) {
        super();
        this.element = document.createElement("fieldset");
        if (legendText) {
            const legend = document.createElement("legend");
            legend.textContent = legendText;
            this.element.appendChild(legend);
        }

        if (parent) parent.addChild(this);
    }
};

const htmlDatalist = class extends htmlControl {
    // @ts-ignore
    constructor(parent, options = [], props = {}) {
        super();
        this.element = document.createElement("datalist");
        options.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            this.element.appendChild(optionElement);
        });

        if (parent) parent.addChild(this);
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
 * @param {string} orient
 */

// @ts-ignore
const lockOrientation = async (orient) => {
    try {
        // @ts-ignore
        await screen.orientation.lock(orient);
    } catch (err) {
        console.info(err);
    }
};

const generateClassName = (() => {
    let counter = 0;
    return () => `roseview-class-${counter++}`;
})();

/**
 * Add css properties in form of an object, works like
 * Emotion in React
 * @param {object} styles
 * @returns ClassName
 */
const cssParser = (styles) => {
    const className = generateClassName();
    const styleSheet =
        document.styleSheets[0] ||
        document.head.appendChild(document.createElement("style")).sheet;

    let cssString = "";

    /**
     *  @type{Array<any> | null}
     */
    let nestedCssRules = [];

    /**
     *  @type{Array<any> | null}
     */
    let mediaQueryRules = [];

    // @ts-ignore
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

    cssString = parseStyles(styles, `.${className}`);

    if (cssString) {
        styleSheet.insertRule(
            `.${className} { ${cssString} }`,
            styleSheet.cssRules.length
        );
    }

    nestedCssRules.forEach(({ selector, styles }) => {
        const nestedCssString = parseStyles(styles, selector);
        if (nestedCssString) {
            const rule = `${selector} { ${nestedCssString} }`;
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
        }
    });

    mediaQueryRules.forEach(({ media, selector, styles }) => {
        const nestedCssString = parseStyles(styles, selector);
        if (nestedCssString) {
            const rule = `${media} { ${selector} { ${nestedCssString} } }`;
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
        }
    });

    return className;
};

// @ts-ignore
const transitionApi = {
    fadeIn: cssParser({
        "@keyframes fadeIn": {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
        },
        animation: "fadeIn 1s ease forwards",
    }),

    fadeOut: cssParser({
        "@keyframes fadeOut": {
            "0%": { opacity: "1" },
            "100%": { opacity: "0" },
        },
        animation: "fadeOut 1s ease forwards",
    }),

    slideInLeft: cssParser({
        "@keyframes slideInLeft": {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0)" },
        },
        animation: "slideInLeft 1s ease forwards",
    }),

    slideOutRight: cssParser({
        "@keyframes slideOutRight": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(100%)" },
        },
        animation: "slideOutRight 1s ease forwards",
    }),

    slideInTop: cssParser({
        "@keyframes slideInTop": {
            "0%": { transform: "translateY(-100%)" },
            "100%": { transform: "translateY(0)" },
        },
        animation: "slideInTop 1s ease forwards",
    }),

    slideOutBottom: cssParser({
        "@keyframes slideOutBottom": {
            "0%": { transform: "translateY(0)" },
            "100%": { transform: "translateY(100%)" },
        },
        animation: "slideOutBottom 1s ease forwards",
    }),
};

const htmlContainer = class extends htmlControl {
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
const createApp = function (mainComponent) {
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

export { html, createApp, cssParser };
