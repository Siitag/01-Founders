// Define a helper object "is" with various type-checking functions
var is = {};
is.arr = (n) => Array.isArray(n);
is.obj = (n) =>
    typeof n === 'object' &&
    !is.fun(n) &&
    !is.arr(n) &&
    n !== null &&
    !(n instanceof RegExp);
is.fun = (n) => typeof n === 'function';
// Define the replica function that copies properties from sources to the target object
function replica(target, ...sources) {
    sources.forEach((source) => {
        Object.keys(source).forEach((key) => {
            if (is.obj(source[key])) {
                // If the source property is an object and the target property is either missing or not an object,
                // create an empty object as the target property
                if (!target.hasOwnProperty(key) || !is.obj(target[key])) {
                    target[key] = {};
                }
                // Recursively call replica to copy properties from the nested source object to the nested target object
                replica(target[key], source[key]);
            } else {
                // If the source property is not an object, simply assign it to the target property
                target[key] = source[key];
            }
        });
    });
    return target;
}