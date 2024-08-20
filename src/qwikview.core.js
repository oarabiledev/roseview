// qwikView web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.0.2

const html = {
	/**
	 * Creates a special div which has options allowing
	 * you to define the position of its children.
	 * @param {string} type - The type of container (e.g., 'div', 'section').
	 * @param {object} options - Options to define the container's properties (e.g., style, class).
	 * @param {html} parent - The parent element to which the container will be appended.
	 * @returns {htmlContainer} - A new htmlContainer instance.
	 */
	CreateLayout: (type, options, parent) => {
		return new htmlContainer(type, options, parent);
	},

	/**
	 * Creates a button element.
	 * @param {html} parent - The parent element to which the button will be appended.
	 * @param {string} text - The text content of the button.
	 * @param {object} [props={}] - Additional properties to set on the button (e.g., id, class).
	 * @returns {htmlButton} - A new htmlButton instance.
	 */
	Button: (parent, text, props = {}) => {
		return new htmlButton(parent, text, props);
	},

	/**
	 * Creates an image element.
	 * @param {html} parent - The parent element to which the image will be appended.
	 * @param {string|string[]} sources - The source(s) of the image(s).
	 * @param {object} [props={}] - Additional properties to set on the image (e.g., alt, class).
	 * @returns {htmlImage} - A new htmlImage instance.
	 */
	Image: (parent, sources, props = {}) => {
		return new htmlImage(parent, sources, props);
	},

	/**
	 * Creates a text element.
	 * @param {html} parent - The parent element to which the text will be appended.
	 * @param {string} text - The text content.
	 * @param {object} [props={}] - Additional properties to set on the text element (e.g., id, class).
	 * @returns {htmlText} - A new htmlText instance.
	 */
	Text: (parent, text, props = {}) => {
		return new htmlText(parent, text, props);
	},

	/**
	 * Creates a list element.
	 * @param {html} parent - The parent element to which the list will be appended.
	 * @param {string[]} list - An array of list items.
	 * @param {object} [props={}] - Additional properties to set on the list element (e.g., type, class).
	 * @returns {htmlList} - A new htmlList instance.
	 */
	List: (parent, list, props = {}) => {
		return new htmlList(parent, list, props);
	},

	/**
	 * Creates an input element.
	 * @param {html} parent - The parent element to which the input will be appended.
	 * @param {string} type - The type of input (e.g., 'text', 'checkbox').
	 * @param {object} [props={}] - Additional properties to set on the input (e.g., id, value).
	 * @returns {htmlInput} - A new htmlInput instance.
	 */
	Input: (parent, type, props = {}) => {
		return new htmlInput(parent, type, props);
	},

	/**
	 * Creates a progress element.
	 * @param {html} parent - The parent element to which the progress element will be appended.
	 * @param {number} value - The initial value of the progress element.
	 * @param {object} [props={}] - Additional properties to set on the progress element (e.g., max, class).
	 * @returns {htmlProgress} - A new htmlProgress instance.
	 */
	Progress: (parent, value, props = {}) => {
		return new htmlProgress(parent, value, props);
	},

	/**
	 * Creates a div element.
	 * @param {html} parent - The parent element to which the div will be appended.
	 * @param {object} [props={}] - Additional properties to set on the div (e.g., id, class).
	 * @returns {htmlDiv} - A new htmlDiv instance.
	 */
	Div: (parent, props = {}) => {
		return new htmlDiv(parent, props);
	},

	/**
	 * Creates a paragraph element.
	 * @param {html} parent - The parent element to which the paragraph will be appended.
	 * @param {string} text - The text content of the paragraph.
	 * @param {object} [props={}] - Additional properties to set on the paragraph (e.g., id, class).
	 * @returns {htmlParagraph} - A new htmlParagraph instance.
	 */
	Paragraph: (parent, text, props = {}) => {
		return new htmlParagraph(parent, text, props);
	},

	/**
	 * Creates a header element.
	 * @param {html} parent - The parent element to which the header will be appended.
	 * @param {number} level - The level of the header (e.g., 1 for <h1>, 2 for <h2>).
	 * @param {string} text - The text content of the header.
	 * @param {object} [props={}] - Additional properties to set on the header (e.g., id, class).
	 * @returns {htmlHeader} - A new htmlHeader instance.
	 */
	Header: (parent, level, text, props = {}) => {
		return new htmlHeader(parent, level, text, props);
	},

	/**
	 * Creates an anchor (link) element.
	 * @param {html} parent - The parent element to which the anchor will be appended.
	 * @param {string} href - The URL the anchor points to.
	 * @param {string} text - The text content of the anchor.
	 * @param {object} [props={}] - Additional properties to set on the anchor (e.g., target, class).
	 * @returns {htmlAnchor} - A new htmlAnchor instance.
	 */
	Anchor: (parent, href, text, props = {}) => {
		return new htmlAnchor(parent, href, text, props);
	},

	/**
	 * Creates a form element.
	 * @param {html} parent - The parent element to which the form will be appended.
	 * @param {object} [props={}] - Additional properties to set on the form (e.g., action, method).
	 * @returns {htmlForm} - A new htmlForm instance.
	 */
	Form: (parent, props = {}) => {
		return new htmlForm(parent, props);
	},

	/**
	 * Creates a table element.
	 * @param {html} parent - The parent element to which the table will be appended.
	 * @param {string[]} [headers=[]] - An array of table header titles.
	 * @param {string[][]} [rows=[]] - A 2D array representing the rows and columns of the table.
	 * @param {object} [props={}] - Additional properties to set on the table (e.g., id, class).
	 * @returns {htmlTable} - A new htmlTable instance.
	 */
	Table: (parent, headers = [], rows = [], props = {}) => {
		return new htmlTable(parent, headers, rows, props);
	},

	/**
	 * Creates a select (dropdown) element.
	 * @param {html} parent - The parent element to which the select will be appended.
	 * @param {string[]} [options=[]] - An array of options for the dropdown.
	 * @param {object} [props={}] - Additional properties to set on the select (e.g., id, class).
	 * @returns {htmlSelect} - A new htmlSelect instance.
	 */
	Select: (parent, options = [], props = {}) => {
		return new htmlSelect(parent, options, props);
	},

	/**
	 * Creates an iframe element.
	 * @param {html} parent - The parent element to which the iframe will be appended.
	 * @param {string} src - The source URL of the iframe.
	 * @param {object} [props={}] - Additional properties to set on the iframe (e.g., width, height).
	 * @returns {htmlIframe} - A new htmlIframe instance.
	 */
	Iframe: (parent, src, props = {}) => {
		return new htmlIframe(parent, src, props);
	},

	/**
	 * Creates a label element.
	 * @param {html} parent - The parent element to which the label will be appended.
	 * @param {string} text - The text content of the label.
	 * @param {object} [props={}] - Additional properties to set on the label (e.g., for, class).
	 * @returns {htmlLabel} - A new htmlLabel instance.
	 */
	Label: (parent, text, props = {}) => {
		return new htmlLabel(parent, text, props);
	},

	/**
	 * Creates a video element.
	 * @param {html} parent - The parent element to which the video will be appended.
	 * @param {string|string[]} [sources=[]] - The source(s) of the video file(s).
	 * @param {object} [props={}] - Additional properties to set on the video element (e.g., controls, autoplay).
	 * @returns {htmlVideo} - A new htmlVideo instance.
	 */
	Video: (parent, sources = [], props = {}) => {
		return new htmlVideo(parent, sources, props);
	},

	/**
	 * Creates an audio element.
	 * @param {html} parent - The parent element to which the audio will be appended.
	 * @param {string|string[]} [sources=[]] - The source(s) of the audio file(s).
	 * @param {object} [props={}] - Additional properties to set on the audio element (e.g., controls, autoplay).
	 * @returns {htmlAudio} - A new htmlAudio instance.
	 */
	Audio: (parent, sources = [], props = {}) => {
		return new htmlAudio(parent, sources, props);
	},

	/**
	 * Creates a textarea element.
	 * @param {html} parent - The parent element to which the textarea will be appended.
	 * @param {string} [value=""] - The initial text value of the textarea.
	 * @param {object} [props={}] - Additional properties to set on the textarea (e.g., rows, cols).
	 * @returns {htmlTextarea} - A new htmlTextarea instance.
	 */
	Textarea: (parent, value = "", props = {}) => {
		return new htmlTextarea(parent, value, props);
	},

	/**
	 * Creates a fieldset element.
	 * @param {html} parent - The parent element to which the fieldset will be appended.
	 * @param {string} [legendText=""] - The text for the fieldset's legend.
	 * @param {object} [props={}] - Additional properties to set on the fieldset (e.g., class, id).
	 * @returns {htmlFieldset} - A new htmlFieldset instance.
	 */
	Fieldset: (parent, legendText = "", props = {}) => {
		return new htmlFieldset(parent, legendText, props);
	},

	/**
	 * Creates a datalist element.
	 * @param {html} parent - The parent element to which the datalist will be appended.
	 * @param {string[]} [options=[]] - An array of options for the datalist.
	 * @param {object} [props={}] - Additional properties to set on the datalist (e.g., id, class).
	 * @returns {htmlDatalist} - A new htmlDatalist instance.
	 */
	Datalist: (parent, options = [], props = {}) => {
		return new htmlDatalist(parent, options, props);
	}
};

const html_widget = class {
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
		const className = cssObjectParser(styles);
		this.element.classList.add(className);
		this.elementClasses.push(className);
	}

	/**
	 * Adds an on-enter event listener to that
	 * element
	 */
	set onEnter(Fn) {
		this.element.addEventListener("keypress", (event) => {
			if (event.key == "Enter") {
				console.log("D");
				Fn();
			} else {
			}
		});
	}
	/**
	 * Add multiple classes
	 */
	set addClasses(classes) {
		classes.split(" ").map((v) => {
			this.element.classList.add(v);
			this.elementClasses.push(v);
		});
	}

	/**
	 * Remove Classes
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
	props(props) {
		Object.entries(props).forEach(([key, value]) => {
			requestAnimationFrame(() => {
				this.element[key] = value;
			});
		});
	}

	/**
	 * Add a child to that element
	 * @param {InstanceType<html_widget>} child
	 */
	addChild(child) {
		if (child instanceof html_widget) {
			this.element.appendChild(child.element);
		} else {
			console.error("Mounted Child Is Not A htmlComponent");
		}
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
	}

	set onContextMenu(Fn) {
		this.element.addEventListener("contextmenu", (event) => {
			this.eventListeners.push(["contextmenu", Fn]);
			event.preventDefault();
			Fn();
		});
	}

	set onTouch(Fn) {
		this.element.addEventListener("click", Fn);
		this.eventListeners.push(["click", Fn]);
	}

	set onLongTouch(Fn) {
		let touchTimeout;
		this.element.addEventListener("touchstart", (event) => {
			if (event.touches.length === 1) {
				touchTimeout = setTimeout(() => Fn(event), 600);
			}
		});

		this.element.addEventListener("touchend", () => {
			clearTimeout(touchTimeout);
		});

		this.eventListeners.push(["touchstart", Fn]);
		this.eventListeners.push(["touchend", Fn]);
	}

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
	}

	set gone(bool) {
		if (bool) {
			this.style({
				display: "none"
			});
		} else {
			this.style({
				display: "block"
			});
		}
	}

	set focus(bool) {}

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
	}
};

// Extend html_widget Class & Define Animation Sequence Methods

html_widget.prototype.animationSequence = function () {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.alpha = function (alpha, duration, delay = 0) {
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
html_widget.prototype.end = function () {
	this._isAnimating = false;
	this.element.style.transition = "";
	this._animationQueue = [];
	this._currentAnimation = null;
};

/**
 * Checks if the animation is currently running.
 * @returns {boolean} - Returns true if the animation is running, otherwise false.
 */
html_widget.prototype.isAnimSequenceRunning = function () {
	return this._isAnimating;
};

/**
 * Moves the element to a new position.
 * @param {number} left - The new left position.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.position = function (left, top, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.positionX = function (left, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.positionY = function (top, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.rotate = function (angle, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.rotateX = function (angle, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.rotateY = function (angle, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.scale = function (x, y, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.scaleX = function (x, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.scaleY = function (y, duration, delay = 0) {
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
html_widget.prototype.setOnStart = function (callback) {
	this._onStart = callback;
};

/**
 * Sets the callback function to be called when the animation ends.
 * @param {Function} callback - The callback function to be called when the animation ends.
 */
html_widget.prototype.setOnCompleted = function (callback) {
	this._onCompleted = callback;
};

/**
 * Starts the animation queue.
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.start = function () {
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
html_widget.prototype._executeNextAnimation = function () {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.then = function () {
	this._animationQueue.push(() => Promise.resolve());
	return this;
};

/**
 * Translates the element to a new position.
 * @param {number} left - The new left position.
 * @param {number} top - The new top position.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {number} [delay=0] - The delay before the animation starts in milliseconds.
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.translate = function (left, top, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.translateX = function (left, duration, delay = 0) {
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
 * @returns {html_widget} - The instance for chaining.
 */
html_widget.prototype.translateY = function (top, duration, delay = 0) {
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
html_widget.prototype._onAnimationEnd = function () {
	this._isAnimating = false;
	if (this._animationQueue.length > 0) {
		this._executeNextAnimation();
	} else if (this._onCompleted) {
		this._onCompleted();
	}
};

// Define individual classes for each HTML element that extends html_widget

const htmlButton = class extends html_widget {
	constructor(parent, text, props = {}) {
		super();
		this.element = document.createElement("button");
		this.element.textContent = text;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlImage = class extends html_widget {
	constructor(parent, sources, props = {}) {
		super();
		this.element = document.createElement("img");
		this.element.src = sources[0]; // Assuming sources is an array of image URLs
		if (sources.length > 1) this.element.srcset = sources.join(", ");
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlText = class extends html_widget {
	constructor(parent, text, props = {}) {
		super();
		this.element = document.createElement("span");
		this.element.textContent = text;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlList = class extends html_widget {
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

const htmlInput = class extends html_widget {
	constructor(parent, type, props = {}) {
		super();
		this.element = document.createElement("input");
		this.element.type = type;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlProgress = class extends html_widget {
	constructor(parent, value, props = {}) {
		super();
		this.element = document.createElement("progress");
		this.element.value = value;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlDiv = class extends html_widget {
	constructor(parent, props = {}) {
		super();
		this.element = document.createElement("div");
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlParagraph = class extends html_widget {
	constructor(parent, text, props = {}) {
		super();
		this.element = document.createElement("p");
		this.element.textContent = text;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlHeader = class extends html_widget {
	constructor(parent, level, text, props = {}) {
		super();
		this.element = document.createElement(`h${level}`);
		this.element.textContent = text;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlAnchor = class extends html_widget {
	constructor(parent, href, text, props = {}) {
		super();
		this.element = document.createElement("a");
		this.element.href = href;
		this.element.textContent = text;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlForm = class extends html_widget {
	constructor(parent, props = {}) {
		super();
		this.element = document.createElement("form");
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlTable = class extends html_widget {
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

		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlSelect = class extends html_widget {
	constructor(parent, options = [], props = {}) {
		super();
		this.element = document.createElement("select");

		options.forEach((option) => {
			const opt = document.createElement("option");
			opt.value = option.value || option;
			opt.textContent = option.label || option;
			this.element.appendChild(opt);
		});

		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlIframe = class extends html_widget {
	constructor(parent, src, props = {}) {
		super();
		this.element = document.createElement("iframe");
		this.element.src = src;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlLabel = class extends html_widget {
	constructor(parent, text, props = {}) {
		super();
		this.element = document.createElement("label");
		this.element.textContent = text;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlVideo = class extends html_widget {
	constructor(parent, sources = [], props = {}) {
		super();
		this.element = document.createElement("video");
		sources.forEach((src) => {
			const source = document.createElement("source");
			source.src = src;
			this.element.appendChild(source);
		});
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlAudio = class extends html_widget {
	constructor(parent, sources = [], props = {}) {
		super();
		this.element = document.createElement("audio");
		sources.forEach((src) => {
			const source = document.createElement("source");
			source.src = src;
			this.element.appendChild(source);
		});
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlTextarea = class extends html_widget {
	constructor(parent, value = "", props = {}) {
		super();
		this.element = document.createElement("textarea");
		this.element.value = value;
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlFieldset = class extends html_widget {
	constructor(parent, legendText = "", props = {}) {
		super();
		this.element = document.createElement("fieldset");
		if (legendText) {
			const legend = document.createElement("legend");
			legend.textContent = legendText;
			this.element.appendChild(legend);
		}
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlDatalist = class extends html_widget {
	constructor(parent, options = [], props = {}) {
		super();
		this.element = document.createElement("datalist");
		options.forEach((option) => {
			const optionElement = document.createElement("option");
			optionElement.value = option;
			this.element.appendChild(optionElement);
		});
		props.options ? optionsApi(this.element, props.options) : null;

		if (parent) parent.addChild(this);
	}
};

const htmlContainer = class extends html_widget {
	constructor(type = "linear", options = "fillxy,vcenter", parent) {
		super();
		this.element = document.createElement("div");

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
	"center"
];

const optionsApi = (element, options) => {
	const functions = {
		noscrollbar: () => {
			element.classList.add("noscrollbar");
		},
		scrollxy: () => {
			let className = cssObjectParser({
				overflow: "auto"
			});
			element.classList.add(className);
		},
		scrollx: () => {
			let className = cssObjectParser({
				overflowX: "auto"
			});
			element.classList.add(className);
		},
		scrolly: () => {
			let className = cssObjectParser({
				overflowY: "auto"
			});
			element.classList.add(className);
		},
		left: () => {
			let className = cssObjectParser({
				display: "flex",
				justifyContent: "flex-start"
			});
			element.classList.add(className);
		},
		right: () => {
			let className = cssObjectParser({
				display: "flex",
				justifyContent: "flex-end"
			});
			element.classList.add(className);
		},
		center: () => {
			let className = cssObjectParser({
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			});
			element.classList.add(className);
		},
		vcenter: () => {
			let className = cssObjectParser({
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			});
			element.classList.add(className);
		},
		bottom: () => {
			let className = cssObjectParser({
				display: "flex",
				alignItems: "flex-end"
			});
			element.classList.add(className);
		},
		top: () => {
			let className = cssObjectParser({
				display: "flex",
				alignItems: "flex-start"
			});
			element.classList.add(className);
		},
		horizontal: () => {
			let className = cssObjectParser({
				display: "flex",
				flexDirection: "row !important"
			});
			element.classList.add(className);
		},
		vertical: () => {
			let className = cssObjectParser({
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
		let className = cssObjectParser({
			display: "inline-flex",
			position: "relative !important",
			flexDirection: "column !important"
		});
		layout.classList.add(className);
	} else if (layoutTYPE == "absolute") {
		let className = cssObjectParser({
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

const htmlPage = {
	Build(mainContiner, routes) {
		window.pathHistory = [];
		document.addEventListener("DOMContentLoaded", () => {
			mainContiner.style({
				width: "100%",
				height: window.innerHeight + "px"
			});
			document.body.style.margin = 0;
			document.body.style.width = "100%";
			let fragment = document.createDocumentFragment();
			fragment.appendChild(mainContiner.element);
			document.body.appendChild(fragment);
		});
	},

	OpenPage(path) {
		const script = document.html("script");
		script.src = `./routes/${path}.js`;
		script.type = "module";

		document.body.replaceChildren();
		document.body.appendChild(script);
	},

	get Theme() {
		const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
		if (darkThemeMq.matches) {
			return "dark";
		} else return "light";
	},

	async SwitchLang(lang) {
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
	return () => `vinescript-class-${counter++}`;
})();

const cssObjectParser = (styles) => {
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

// Export or expose the functions/objects
(function (global, factory) {
	if (typeof module !== "undefined" && module.exports) {
		// Node.js or CommonJS environment
		module.exports = factory();
	} else if (typeof define === "function" && define.amd) {
		// AMD environment
		define(factory);
	} else {
		// Browser and ES module environments
		const exported = factory();
		if (typeof exports === "object" && typeof module !== "undefined") {
			module.exports = exported;
		} else if (typeof global !== "undefined") {
			Object.assign(global, exported);
		} else if (typeof window !== "undefined") {
			Object.assign(window, exported);
		}
	}
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
	return {
		createSignal,
		showIf,
		html,
		htmlPage
	};
});
