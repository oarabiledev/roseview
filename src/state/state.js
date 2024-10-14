// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.2.2

// state Module

/**
 * creates a signal and returns an array of functions
 * that are destructured to achieve reactivity
 * @param {any} defaultValue
 */
const createSignal = function (defaultValue = null) {
    let internalValue = defaultValue;
    /**
     * @type Array<Function>
     */
    let subscription = [];

    const notify = () => {
        subscription.forEach((subscriber) => subscriber(internalValue));
    };

    const getValue = () => {
        return internalValue;
    };

    /**
     * @param {any} setterValue
     */
    const setValue = (setterValue) => {
        internalValue = setterValue;
        notify();
    };

    /**
     * @param {Function} subscriberFunc
     */
    const setSubscriberFunc = (subscriberFunc) => {
        if (!subscriberFunc) {
            console.error(`You have not specified a subscriber function`);
        } else {
            if (typeof subscriberFunc === "function") {
                subscription.push(subscriberFunc);
            } else {
                console.error(
                    `The subscriber you have given is not a function`
                );
            }
        }
    };
    return [getValue, setValue, setSubscriberFunc];
};

/**
 * Creates a signal that takes in an object, allowing
 * for more fine-grained reactivity
 * @param {Object} obj
 * @returns
 */
const createReactiveSignal = (obj) => {
    /**
     * @type Array<Function>
     */
    let subscriptions = [];

    const notify = () => {
        subscriptions.forEach((subscriber) => subscriber(obj));
    };

    const proxyHandler = {
        /**
         *
         * @param {any} target
         * @param {any} key
         * @param {any} value
         * @returns true
         */
        set(target, key, value) {
            target[key] = value;
            notify();
            return true;
        },

        /**
         * @param {any} target
         * @param {any} key
         * @returns proxy | target with key
         */
        get(target, key) {
            if (typeof target[key] === "object" && target[key] !== null) {
                return new Proxy(target[key], proxyHandler);
            } else {
                return target[key];
            }
        },
    };

    const proxy = new Proxy(obj, proxyHandler);

    /**
     * @param {Function} callback
     */
    const subscribe = (callback) => {
        if (typeof callback === "function") {
            subscriptions.push(callback);
        } else {
            console.error("Subscription must be a function");
        }
    };

    return [proxy, subscribe];
};

/**
 * When The condition is true an element is shown
 * @param {boolean} restingVal
 * @param {Function} child
 * @param {Function} fallback
 */
const showIF = (restingVal, child, fallback) => {
    if (typeof restingVal === "boolean") {
        if (restingVal) {
            // @ts-expect-error
            child.show = true;
            // @ts-expect-error
            fallback.gone = true;
        } else {
            // @ts-expect-error
            child.gone = true;
            // @ts-expect-error
            fallback.show = true;
        }
    } else {
        console.error(`showIf bound to a typeof value not boolean`);
    }
};

export { createSignal, createReactiveSignal, showIF };
