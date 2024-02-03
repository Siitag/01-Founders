/**
 * Returns a new object containing only the keys that appear in the string or array of strings.
 * @param {object} obj - The object to pick keys from.
 * @param {string|string[]} keys - The string or array of strings representing the keys to pick.
 * @returns {object} - The new object with the picked keys.
 */
function pick(obj, keys) {
    const picked = {};
    for (let key in obj) {
        let regexp = new RegExp(`^${key}$`);
        if (typeof keys === "string") {
            if (keys.match(regexp)) {
                picked[key] = obj[key];
            }
        } else {
            if (keys.includes(key)) {
                picked[key] = obj[key];
            }
        }
    }
    return picked;
}
/**
 * Returns a new object containing only the keys that do not match the string or do not appear in the array of strings.
 * @param {object} obj - The object to omit keys from.
 * @param {string|string[]} keys - The string or array of strings representing the keys to omit.
 * @returns {object} - The new object with the omitted keys.
 */
function omit(obj, keys) {
    const omitted = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) === false) continue;
        let regexp = new RegExp(`^${key}$`);
        if (typeof keys === "string") {
            if (!keys.match(regexp)) {
                omitted[key] = obj[key];
            }
        } else {
            if (!keys.includes(key)) {
                omitted[key] = obj[key];
            }
        }
    }
    return omitted;
}
