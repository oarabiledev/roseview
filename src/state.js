// roseview web framework for
// declarative ui development.

// @license
// MIT

// @version
// 0.1.7

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

export { createSignal, showIF };