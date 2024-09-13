// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.0.3.3

"use strict";
const html = {
	/**
	 * Creates a special div which has options allowing
	 * you to define the position of its children.
	 * @param {string} type - The type of container (e.g., 'div', 'section').
	 * @param {object} options - Options to define the container's properties (e.g., style, class).
	 * @param {object} parent - The parent element to which the container will be appended.
	 * @returns {htmlContainer} - A new htmlContainer instance.
	 */
	CreateLayout: (route, type, options, parent) => {
		return new htmlContainer(route, type, options, parent);
	},

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
	 * @param {string|string[]} [sources=[]] - The source(s) of the video file(s).
	 * @returns {htmlVideo} - A new htmlVideo instance.
	 */
	Video: (parent, sources = []) => {
		return new htmlVideo(parent, sources);
	},

	/**
	 * Creates an audio element.
	 * @param {object} parent - The parent element to which the audio will be appended.
	 * @param {string|string[]} [sources=[]] - The source(s) of the audio file(s).
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
	}
};

const htmlControl = class {
	constructor() {
		this.element = null;
		this.elementUid = null;
		this.eventListeners = [];
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

	bindInput(signal) {
		const [getValue, setValue, subscribe] = signal;

		// Set the initial value of the input field from the signal
		this.element.value = getValue();

		this.element.addEventListener("input", (e) => {
			setValue(e.target.value);
		});

		subscribe((newValue) => {
			this.element.value = newValue;
		});

		return this;
	}

	/**
	 * Add multiple classes
	 */
	set classes(classes) {
		classes.split(" ").map((v) => {
			this.element.classList.add(v);
			this.elementClasses.push(v);
		});
		return this;
	}

	/**
	 * Remove Classes
	 */
	set removeClasses(classes) {
		classes.split(" ").map((v) => {
			this.element.classList.remove(v);
			this.elementClasses.indexOf(v);
		});
		return this;
	}

	/**
	 * Allows you to use direct DOM methods on elements,
	 * In the context provided as an object.
	 * @param {object} props
	 */
	batchProps(props) {
		Object.entries(props).forEach(([key, value]) => {
			requestAnimationFrame(() => {
				this.element[key] = value;
			});
		});
		return this;
	}

	/**
	 * Add a child to that element
	 * @param {InstanceType<htmlControl>} child
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
	 * @param {Object<htmlComponent>} child
	 */
	destroyChild(child) {
		if (child instanceof htmlComponent) {
			child.eventListeners.forEach((el) => {
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
		this.element.addEventListener(event, handler);
		this.eventListeners.push(["click", handler]);
		return this;
	}

	/**
	 * Setter method to switch element visibility
	 */
	set show(bool) {
		if (bool) {
			this.style({
				visibility: "visible"
			});
		} else {
			this.style({
				visibility: "hidden"
			});
		}
		return this;
	}

	/**
	 * Setter method, allows switching element visibility
	 * in a way that the element does not take space
	 */
	set gone(bool) {
		if (bool) {
			this.style({
				display: "none !important",
				visibility: "hidden"
			});
		} else {
			this.style({
				display: "block",
				visibility: "visible"
			});
		}
		return this;
	}

	/**
	 * Switch on element visibility
	 */
	set focus(bool) {}

	/**
	 *
	 * @param {*} type
	 * @param {*} callback
	 * @param {*} time
	 */
	animate(type, callback, time = 1000) {
		if (type === true && time === true) {
		}
	}

	set setChildMargins(params) {
		let [left, top, right, bottom] = params.split(",").map((val) => {
			return val.trim();
		});

		this.style({
			" *": {
				marginLeft: left,
				marginTop: top,
				marginRight: right,
				marginBottom: bottom
			}
		});
		return this;
	}

	set setMargins(params) {
		let [left, top, right, bottom] = params.split(",").map((val) => {
			return val.trim();
		});

		this.style({
			marginLeft: left,
			marginRight: right,
			marginTop: top,
			marginBottom: bottom
		});
	}

	set setPadding(params) {
		let [left, top, right, bottom] = params.split(",").map((val) => {
			return val.trim();
		});

		this.style({
			paddingLeft: left,
			paddingRight: right,
			paddingTop: top,
			paddingBottom: bottom
		});
	}

	set setPosition(params) {
		let [leftv, topv, rightv, bottomv] = params.split(",").map((val) => {
			return val.trim();
		});

		this.style({
			position: "relative",
			left: leftv,
			right: rightv,
			top: topv,
			bottom: bottomv
		});
		return this;
	}
};

// Extend htmlControl Class & Define Animation Sequence Methods

htmlControl.prototype.animationSequence = function () {
	this._onStart = null;
	this._onCompleted = null;
	this._isAnimating = false;
	this._animationQueue = [];
	this._currentAnimation = null;
	this._computedAnimation = null;
	return this;
};

/**
 * Set the opacity of the element.
 * @param {number} alpha - The opacity value (0 to 1).
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.alpha = function (alpha, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.opacity = alpha;
				this.element.style.transition = `opacity ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Ends the current animation.
 */
htmlControl.prototype.end = function () {
	this._isAnimating = false;
	this.element.style.transition = "";
	this._animationQueue = [];
	this._currentAnimation = null;
};

/**
 * Checks if the animation is currently running.
 * @returns {boolean} - Returns true if the animation is running, otherwise false.
 */
htmlControl.prototype.isAnimSequenceRunning = function () {
	return this._isAnimating;
};

/**
 * Moves the element to a new position.
 * @param {number} left - The new left position.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.position = function (left, top, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `translate(${left}px, ${top}px)`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Moves the element horizontally.
 * @param {number} left - The new left position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.positionX = function (left, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `translateX(${left}px)`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Moves the element vertically.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.positionY = function (top, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `translateY(${top}px)`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Rotates the element.
 * @param {number} angle - The rotation angle in degrees.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.rotate = function (angle, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `rotate(${angle}deg)`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Rotates the element around the X axis.
 * @param {number} angle - The rotation angle in degrees.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.rotateX = function (angle, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `rotateX(${angle}deg)`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Rotates the element around the Y axis.
 * @param {number} angle - The rotation angle in degrees.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.rotateY = function (angle, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `rotateY(${angle}deg)`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Scales the element in both X and Y directions.
 * @param {number} x - The scale factor in the X direction.
 * @param {number} y - The scale factor in the Y direction.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.scale = function (x, y, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `scale(${x}, ${y})`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Scales the element in the X direction.
 * @param {number} x - The scale factor in the X direction.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.scaleX = function (x, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `scaleX(${x})`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Scales the element in the Y direction.
 * @param {number} y - The scale factor in the Y direction.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.scaleY = function (y, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `scaleY(${y})`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Sets the callback function to be called when the animation starts.
 * @param {Function} callback - The callback function to be called when the animation starts.
 */
htmlControl.prototype.setOnStart = function (callback) {
	this._onStart = callback;
};

/**
 * Sets the callback function to be called when the animation ends.
 * @param {Function} callback - The callback function to be called when the animation ends.
 */
htmlControl.prototype.setOnCompleted = function (callback) {
	this._onCompleted = callback;
};

/**
 * Starts the animation queue.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.start = function () {
	if (this._onStart) {
		this._onStart();
	}
	this._isAnimating = true;
	this._executeNextAnimation();
	return this;
};

/**
 * Executes the next animation in the queue.
 * @private
 */
htmlControl.prototype._executeNextAnimation = function () {
	if (this._animationQueue.length > 0) {
		this._currentAnimation = this._animationQueue.shift();
		this._currentAnimation().then(() => {
			this._executeNextAnimation();
		});
	} else {
		this.end();
	}
};

/**
 * Executes a function after the current animation finishes.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.then = function () {
	this._animationQueue.push(() => Promise.resolve());
	return this;
};

/**
 * Translates the element to a new position.
 * @param {number} left - The new left position.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.translate = function (left, top, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `translate(${left}px, ${top}px)`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Translates the element horizontally.
 * @param {number} left - The new left position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.translateX = function (left, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `translateX(${left}px)`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Translates the element vertically.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {htmlControl} - The instance for chaining.
 */
htmlControl.prototype.translateY = function (top, duration, delay = 0) {
	this._animationQueue.push(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.element.style.transform = `translateY(${top}px)`;
				this.element.style.transition = `transform ${duration}ms`;
				this.element.addEventListener("transitionend", () => resolve(), { once: true });
			}, delay);
		});
	});
	return this;
};

/**
 * Handles the end of an animation.
 * @private
 */
htmlControl.prototype._onAnimationEnd = function () {
	this._isAnimating = false;
	if (this._animationQueue.length > 0) {
		this._executeNextAnimation();
	} else if (this._onCompleted) {
		this._onCompleted();
	}
};

// Define individual classes for each HTML element that extends htmlControl

const htmlCreateElement = class extends htmlControl {
	constructor(parent, tag) {
		super();
		this.element = document.createElement(tag);

		if (parent) parent.addChild(this);
	}
};

const htmlButton = class extends htmlControl {
	constructor(parent, text) {
		super();
		this.element = document.createElement("button");
		this.element.textContent = text;

		if (parent) parent.addChild(this);
	}
};

const htmlImage = class extends htmlControl {
	constructor(parent, sources) {
		super();
		this.element = document.createElement("img");
		this.element.src = sources[0]; // Assuming sources is an array of image URLs
		if (sources.length > 1) this.element.srcset = sources.join(", ");

		if (parent) parent.addChild(this);
	}
};

const htmlText = class extends htmlControl {
	constructor(parent, text, props = {}) {
		super();
		this.element = document.createElement("span");
		this.element.textContent = text;

		if (parent) parent.addChild(this);
	}
};

const htmlList = class extends htmlControl {
	constructor(parent, list, props = {}) {
		super();
		this.element = document.createElement("ul");
		if (props.type) this.element.type = props.type;
		list.forEach((item) => {
			const li = document.createElement("li");
			li.textContent = item;
			this.element.appendChild(li);
		});

		if (parent) parent.addChild(this);
	}
};

const htmlInput = class extends htmlControl {
	constructor(parent, type, props = {}) {
		super();
		this.element = document.createElement("input");
		this.element.type = type;

		if (parent) parent.addChild(this);
	}
};

const htmlProgress = class extends htmlControl {
	constructor(parent, value, props = {}) {
		super();
		this.element = document.createElement("progress");
		this.element.value = value;

		if (parent) parent.addChild(this);
	}
};

const htmlDiv = class extends htmlControl {
	constructor(parent, props = {}) {
		super();
		this.element = document.createElement("div");

		if (parent) parent.addChild(this);
	}
};

const htmlParagraph = class extends htmlControl {
	constructor(parent, text, props = {}) {
		super();
		this.element = document.createElement("p");
		this.element.textContent = text;

		if (parent) parent.addChild(this);
	}
};

const htmlHeader = class extends htmlControl {
	constructor(parent, level, text, props = {}) {
		super();
		this.element = document.createElement(`h${level}`);
		this.element.textContent = text;

		if (parent) parent.addChild(this);
	}
};

const htmlAnchor = class extends htmlControl {
	constructor(parent, href, text, props = {}) {
		super();
		this.element = document.createElement("a");
		this.element.href = href;
		this.element.textContent = text;

		if (parent) parent.addChild(this);
	}
};

const htmlForm = class extends htmlControl {
	constructor(parent, props = {}) {
		super();
		this.element = document.createElement("form");

		if (parent) parent.addChild(this);
	}
};

const htmlTable = class extends htmlControl {
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
				row.forEach((cellText) => {
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
	constructor(parent, src, props = {}) {
		super();
		this.element = document.createElement("iframe");
		this.element.src = src;

		if (parent) parent.addChild(this);
	}
};

const htmlLabel = class extends htmlControl {
	constructor(parent, text, props = {}) {
		super();
		this.element = document.createElement("label");
		this.element.textContent = text;

		if (parent) parent.addChild(this);
	}
};

const htmlVideo = class extends htmlControl {
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
	constructor(parent, value = "", props = {}) {
		super();
		this.element = document.createElement("textarea");
		this.element.value = value;

		if (parent) parent.addChild(this);
	}
};

const htmlFieldset = class extends htmlControl {
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

const htmlContainer = class extends htmlControl {
	constructor(route, type = "linear", options = "fillxy,vcenter", parent) {
		super();
		this.element = document.createElement("div");

		htmlPage.Init();
		route ? htmlPage.Build(route, this) : Error("Null Route Provided On Layout");
		type ? layoutFitApi(this.element, type, options) : null;
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
	"filly"
];

const optionsApi = (element, options) => {
	const functions = {
		noscrollbar: () => {
			element.classList.add("noscrollbar");
		},

		fillxy: () => {
			let className = cssParser({
				width: "100%",
				height: window.innerHeight + "px"
			});
			element.classList.add(className);
		},

		fillx: () => {
			let className = cssParser({
				width: "100%"
			});
			element.classList.add(className);
		},

		filly: () => {
			let className = cssParser({
				height: window.innerHeight + "px"
			});
			element.classList.add(className);
		},

		scrollxy: () => {
			let className = cssParser({
				overflow: "auto"
			});
			element.classList.add(className);
		},
		scrollx: () => {
			let className = cssParser({
				overflowX: "auto"
			});
			element.classList.add(className);
		},
		scrolly: () => {
			let className = cssParser({
				overflowY: "auto"
			});
			element.classList.add(className);
		},
		left: () => {
			let className = cssParser({
				display: "flex",
				justifyContent: "flex-start"
			});
			element.classList.add(className);
		},
		right: () => {
			let className = cssParser({
				display: "flex",
				justifyContent: "flex-end"
			});
			element.classList.add(className);
		},
		center: () => {
			let className = cssParser({
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			});
			element.classList.add(className);
		},
		vcenter: () => {
			let className = cssParser({
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			});
			element.classList.add(className);
		},
		bottom: () => {
			let className = cssParser({
				display: "flex",
				alignItems: "flex-end"
			});
			element.classList.add(className);
		},
		top: () => {
			let className = cssParser({
				display: "flex",
				alignItems: "flex-start"
			});
			element.classList.add(className);
		},
		horizontal: () => {
			let className = cssParser({
				display: "flex",
				flexDirection: "row !important"
			});
			element.classList.add(className);
		},
		vertical: () => {
			let className = cssParser({
				display: "flex",
				flexDirection: "column"
			});
			element.classList.add(className);
		}
	};

	options
		.toLowerCase()
		.replace(/\s/g, "")
		.split(",")
		.forEach((el) => {
			if (viewOptions.includes(el)) {
				functions[el]();
			} else {
				console.error(`Unknown option: ${el}`);
			}
		});
};

function layoutFitApi(layout, type, options) {
	options ? optionsApi(layout, options) : null;

	let layoutTYPE = type.toLowerCase();

	if (layoutTYPE == "linear") {
		let className = cssParser({
			display: "inline-flex",
			position: "relative !important",
			flexDirection: "column !important"
		});
		layout.classList.add(className);
	} else if (layoutTYPE == "absolute") {
		let className = cssParser({
			display: "flex"
		});
		layout.classList.add(className);
	} else console.error("Unknown Layout ", layout);
}

let languageFilePromise = null;
let currentLang = null;

const $T = async (id, lang) => {
	if (window.languageFile) {
		return window.languageFile.translations[id][lang];
	} else if (languageFilePromise) {
		await languageFilePromise;
		return window.languageFile.translations[id][lang];
	} else {
		languageFilePromise = fetch("./lang.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Cannot Load Translation Utility: " + response.status);
				}
				return response.json();
			})
			.then((json) => {
				window.languageFile = json;
				currentLang = window.languageFile.default;
				return json.translations[id][lang];
			})
			.catch((error) => {
				console.error("Error fetching the language file:", error);
				throw error;
			});

		return languageFilePromise;
	}
};

const lockOrientation = async (orient) => {
	try {
		await screen.orientation.lock(orient);
	} catch (err) {
		console.info(err);
	}
};

/**
 * creates a signal and returns an array of functions
 * that are destructured to achieve reactivity
 * @param {any} defaultValue
 */
const createSignal = function (defaultValue = null) {
	let internalValue = defaultValue;
	let subscription = [];

	const notify = () => {
		subscription.forEach((subscriber) => subscriber(internalValue));
	};

	const getValue = () => {
		return internalValue;
	};

	const setValue = (setterValue) => {
		internalValue = setterValue;
		notify();
	};

	const setSubscriberFunc = (subscriberFunc) => {
		if (!subscriberFunc) {
			console.error(`You have not specified a subscriber function`);
		} else {
			if (typeof subscriberFunc === "function") {
				subscription.push(subscriberFunc);
			} else {
				console.error(`The subscriber you have given is not a function`);
			}
		}
	};
	return [getValue, setValue, setSubscriberFunc];
};

const showIF = (restingVal, child, fallback) => {
	if (typeof restingVal === "boolean") {
		if (restingVal) {
			child.show();
			fallback.gone();
		} else {
			child.gone();
			fallback.show();
		}
	} else {
		console.error(`showIf bound to a typeof value not boolean`);
	}
};

const generateClassName = (() => {
	let counter = 0;
	return () => `roseview-class-${counter++}`;
})();

const generateContainerId = (() => {
	let counter = 0;
	return () => `roseview-container-${counter++}`;
})();

const cssParser = (styles) => {
	const className = generateClassName();
	const styleSheet = document.styleSheets[0] || document.head.appendChild(document.createElement("style")).sheet;

	let cssString = "";
	let nestedCssRules = [];
	let mediaQueryRules = [];

	const parseStyles = (styles, selector) => {
		let baseStyles = "";
		Object.entries(styles).forEach(([key, value]) => {
			if (typeof value === "object") {
				if (key.startsWith("@")) {
					mediaQueryRules.push({ media: key, selector, styles: value });
				} else if (key.startsWith("&:")) {
					// Handle pseudo-classes prefixed with "&:"
					const pseudoClass = key.replace("&", selector);
					nestedCssRules.push({ selector: pseudoClass, styles: value });
				} else {
					// Handle other nested selectors
					nestedCssRules.push({ selector: `${selector} ${key}`, styles: value });
				}
			} else {
				baseStyles += `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value}; `;
			}
		});
		return baseStyles;
	};

	cssString = parseStyles(styles, `.${className}`);

	if (cssString) {
		styleSheet.insertRule(`.${className} { ${cssString} }`, styleSheet.cssRules.length);
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

window.htmlPage = {
	routeIndex: new Map(),
	historyIndex: [],
	viewAnimations: [],
	originalUrl: window.location.pathname,

	hiddenContainer: cssParser({
		display: "none !important",
		visibility: "hidden"
	}),

	set Animations(viewAnimations) {
		viewAnimations ? (this.viewAnimations = viewAnimations) : [];
	},

	get Animations() {
		return this.viewAnimations;
	},

	Build(route, container) {
		// Listen for popstate events to handle browser navigation
		window.addEventListener("popstate", this.handleRouting);

		if (route === "index") {
			document.addEventListener("DOMContentLoaded", () => {
				let fragment = document.createDocumentFragment();
				fragment.appendChild(container.element);
				document.body.appendChild(fragment);

				this.historyIndex.push(route);
				container.element.id = generateContainerId();
				this.routeIndex.set(route, container.element.id);
			});
		} else {
			let fragment = document.createDocumentFragment();
			fragment.appendChild(container.element);
			document.body.appendChild(fragment);

			container.classes = this.hiddenContainer;
			container.element.id = generateContainerId();
			this.routeIndex.set(route, container.element.id);
		}
	},

	Open(route, viewAnimations) {
		if (!this.routeIndex.get(route)) return false;
		viewAnimations ? (this.viewAnimations = viewAnimations) : false;

		let path = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "");

		if (window.location.pathname === "/" || window.location.pathname === "") path = "index";
		let route_to_show = document.getElementById(this.routeIndex.get(route));

		let route_to_hide = document.getElementById(this.routeIndex.get(path));

		if (path === route) return false;

		console.log(`hiiden : ${this.hiddenContainer}`);
		if (viewAnimations || this.viewAnimations) {
			let [animationIn] = viewAnimations || this.viewAnimations;

			route_to_show.classList.remove(this.hiddenContainer);
			route_to_show.classList.add("animate__animated", `animate__${animationIn}`);

			// Listen for the animation end on the last route container
			route_to_show.addEventListener("animationend", function handleAnimationEnd() {
				route_to_hide.classList.add(this.hiddenContainer);
			});
		} else {
			// If no animation, simply hide the last container and show the new one
			route_to_hide.classList.add(this.hiddenContainer);
			route_to_show.classList.remove(this.hiddenContainer);
		}

		this.historyIndex.push(route);

		if (route === "index") {
			history.pushState(null, "", window.location.origin);
		} else history.pushState(null, "", `/${route}`);
	},

	handleRouting() {
		const path = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "");

		if (window.location.pathname === "/" || window.location.pathname === "") {
			htmlPage.Open("index");
		} else htmlPage.Open(path);
	},

	Back() {
		let lastRoute = this.historyIndex.slice(-2)[0];

		let path = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "");

		if (window.location.pathname === "/" || window.location.pathname === "") path = "index";
		let [animationIn, animationOut] = this.viewAnimations || [];

		if (!lastRoute) return false;
		let route_to_show = document.getElementById(this.routeIndex.get(lastRoute));
		let route_to_hide = document.getElementById(this.routeIndex.get(path));

		console.log(`hiiden : ${this.hiddenContainer}`);
		if (this.viewAnimations) {
			route_to_hide.classList.add("animate__animated", `animate__${animationOut}`);

			route_to_hide.addEventListener("animationend", function handleAnimationEnd() {
				route_to_hide.classList.remove("animate__animated", `animate__${animationOut}`);

				route_to_show.classList.remove(this.hiddenContainer);
				route_to_hide.removeEventListener("animationend", handleAnimationEnd);
			});
			route_to_hide.classList.add(this.hiddenContainer);
		} else {
			route_to_hide.classList.add(this.hiddenContainer);
			route_to_show.classList.remove(this.hiddenContainer);
		}

		this.historyIndex.push(lastRoute);

		if (lastRoute === "index") {
			history.pushState(null, "", this.originalUrl);
		} else {
			history.pushState(null, "", `/${lastRoute}`);
			this.historyIndex.push(lastRoute);
		}
	},

	Forward() {
		let lastRoute = this.historyIndex.slice(-2)[0];
		let currentRoute = this.historyIndex.slice(-1)[0];
		let [animationIn, animationOut] = this.viewAnimations || [];

		if (lastRoute === currentRoute) return false;
		let route_to_hide = document.getElementById(this.routeIndex.get(lastRoute));
		let route_to_show = document.getElementById(this.routeIndex.get(currentRoute));

		if (this.viewAnimations) {
			route_to_hide.classList.remove(this.hiddenContainer);
			route_to_hide.classList.add("animate__animated", `animate__${animationIn}`);

			route_to_hide.addEventListener("animationend", () => {
				route_to_hide.classList.remove("animate__animated", `animate__${animationIn}`);
				route_to_show.classList.add(this.hiddenContainer);
			});
		} else {
			route_to_hide.classList.add(this.hiddenContainer);
			route_to_show.classList.remove(this.hiddenContainer);
		}
		this.historyIndex.push(lastRoute);
		history.pushState(null, "", `/${lastRoute}`);
	},

	Init() {
		document.body.style.margin = 0;
		document.body.style.width = "100%";
	},

	LoadStyle(dir) {
		const link = document.createElement("link");
		link.href = dir;
		link.type = "text/css";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	},

	get Theme() {
		const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
		if (darkThemeMq.matches) {
			return "dark";
		} else return "light";
	},

	/**
	 * @param {any} lang
	 */
	set Lang(lang) {
		currentLang = lang;
		const elements = document.querySelectorAll("[data-translate-id]");
		for (let element of elements) {
			const id = element.getAttribute("data-translate-id");
			$T(id, lang)
				.then((translation) => {
					element.textContent = translation;
				})
				.catch((error) => {
					element.textContent = "Error loading translation";
				});
		}
	},

	get Landscape() {
		lockOrientation("landscape");
		return "landscape";
	},
	get Portrait() {
		lockOrientation("portrait");
		return "portrait";
	},

	/**
	 * @param {string} title
	 */
	set Title(title) {
		document.title = title;
	},

	/**
	 * @param {any} path
	 */
	set Icon(path) {
		const link = document.querySelector("link[rel*='icon']") || document.html("link");
		link.type = "image/x-icon";
		link.rel = "shortcut icon";
		link.href = path;
		document.getElementsByTagName("head")[0].appendChild(link);
	}
};
