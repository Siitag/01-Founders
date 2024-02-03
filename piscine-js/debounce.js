function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
// opDebounce function with leading option
function opDebounce(fn, delay, options = {}) {
    let timer = null;
    let result;
    let leading = options.leading || false;
    return function (...args) {
        if (leading && timer === null) {
            result = fn.apply(this, args);
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (!leading) {
                result = fn.apply(this, args);
            }
            timer = null;
        }, delay);
        return result;
    };
}