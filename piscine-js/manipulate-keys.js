// Description: This file contains functions that manipulate the keys of an object.
function filterKeys(obj, callback) {
    const res = {};
    Object.keys(obj).forEach(key => {
        if (callback(key)) {
            res[key] = obj[key];
        }
    });
    return res;
}
// This function takes an object and a callback function as parameters.
function mapKeys(obj, callback) {
    const res = {};
    Object.keys(obj).forEach(key => {
        const newKey = callback(key);
        res[newKey] = obj[key];
    });
    return res;
}
function reduceKeys(obj, callback, initialValue) {
    let undef = false;
    if (initialValue === undefined) {
        initialValue = "";
        undef = true;
    }
    let res = Object.keys(obj).reduce((acc, curr) => {
        return callback(acc, curr, initialValue);
    }, initialValue);
    // If the result is not a number, remove the leading comma and space.
    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2);
        if (undef && res[0] === ":") res = res.slice(1);
    }
    return res;
}