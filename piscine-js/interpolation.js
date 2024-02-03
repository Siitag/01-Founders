function interpolation({
    step = 0,
    start = 0,
    end = 0,
    callback = () => {},
    duration = 0,
} = {}) {
    // Calculate the change in value at each step
    const delta = (end - start) / step;
    let current = start;
    let i = 0;
    // Set an interval to call the callback at each step
    const timer = setInterval(() => {
        // If we haven't reached the end of the steps
        if (i < step) {
            // Call the callback with the current value and elapsed time
            callback([current, (duration / step) * (i + 1)]);
            // Increase the current value by the change per step
            current += delta;
            // Increase the step counter
            i++;
        } else {
            // If we've reached the end of the steps, clear the interval
            clearInterval(timer);
        }
    }, duration / step);
}