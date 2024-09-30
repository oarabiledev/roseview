// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.1.8

// state Module

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
                console.error(
                    `The subscriber you have given is not a function`
                );
            }
        }
    };
    return [getValue, setValue, setSubscriberFunc];
};

const createReactiveSignal = (obj) => {
    let subscriptions = [];

    const notify = () => {
        subscriptions.forEach((subscriber) => subscriber(obj));
    };

    const proxyHandler = {
        set(target, key, value) {
            target[key] = value;
            notify();
            return true;
        },
        get(target, key) {
            if (typeof target[key] === "object" && target[key] !== null) {
                return new Proxy(target[key], proxyHandler);
            } else {
                return target[key];
            }
        },
    };

    const proxy = new Proxy(obj, proxyHandler);

    const subscribe = (callback) => {
        if (typeof callback === "function") {
            subscriptions.push(callback);
        } else {
            console.error("Subscription must be a function");
        }
    };

    return [proxy, subscribe];
};

const showIF = (restingVal, child, fallback) => {
    if (typeof restingVal === "boolean") {
        if (restingVal) {
            child.show = true;
            fallback.gone = true;
        } else {
            child.gone = true;
            fallback.show = true;
        }
    } else {
        console.error(`showIf bound to a typeof value not boolean`);
    }
};

export { createSignal, createReactiveSignal, showIF };
