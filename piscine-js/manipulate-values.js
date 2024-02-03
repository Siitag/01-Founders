// This function takes an object and a callback function as parameters.
// It filters the values of the object based on the result of the callback function.
// It returns a new object with only the key-value pairs that pass the filter.
function filterValues(obj, callback) {
    const res = {}; // Create an empty object to store the filtered key-value pairs.
    Object.keys(obj).forEach(key => { // Iterate over each key in the object.
        if (callback(obj[key])) { // Call the callback function with the value of the current key.
            res[key] = obj[key]; // If the callback returns true, add the key-value pair to the result object.
        }
    });
    return res; // Return the filtered object.
}
// This function takes an object and a callback function as parameters.
// It applies the callback function to each value in the object.
// It returns a new object with the same keys, but with the values transformed by the callback.
function mapValues(obj, callback) {
    const res = {}; // Create an empty object to store the transformed key-value pairs.
    Object.keys(obj).forEach(key => { // Iterate over each key in the object.
        res[key] = callback(obj[key]); // Apply the callback function to the value of the current key and store the result in the result object.
    });
    return res; // Return the transformed object.
}
// This function takes an object, a callback function, and an optional initial accumulator value as parameters.
// It reduces the values of the object to a single value using the callback function and the optional accumulator.
// It returns the final reduced value.
function reduceValues(obj, callback, acc = 0) {
    return Object.values(obj).reduce(callback, acc); // Convert the object values to an array and use the reduce method to apply the callback function to each value.
}