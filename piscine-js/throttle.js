function throttle(fn, delay) {
    let last = 0;
    return function () {
        const now = Date.now();
        if (now - last > delay) {
            fn.apply(this, arguments);
            last = now;
        }
    };
}
function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;
    let context, args;
    return function () {
        const now = Date.now();
        if (!last && leading === false) {
            last = now;
        }
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            fn.apply(this, arguments);
            last = now;
        } else if (!timer && trailing !== false) {
            context = this;
            args = arguments;
            timer = setTimeout(() => {
                fn.apply(context, args);
                last = Date.now();
                timer = null;
            }, delay);
        }
    };
}