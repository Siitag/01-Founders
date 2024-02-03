function retry(count = 3, callback = async () => {}) {
    return async function (...args) {
        try {
            return await callback(...args);
        } catch (e) {
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    };
}
function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
        const timeoutPromise = new Promise((resolve) =>
            setTimeout(resolve, delay, Error('timeout'))
        );
        const functionCallPromise = Promise.resolve(callback(...args));
        const res = await Promise.race([timeoutPromise, functionCallPromise]);
        if (res instanceof Error) {
            throw res;
        }
        return res;
    };
}
