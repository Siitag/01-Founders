const deepCopy = (input) => {
    if (Array.isArray(input)) {
        let output = [];
        for (let i = 0; i < input.length; i++) {
            output[i] = deepCopy(input[i]);
        }
        return output;
    } else if (isDefinitelyAnObject(input)) {
        let output = {};
        for (let key in input) {
            output[key] = deepCopy(input[key]);
        }
        return output;
    } else {
        return input;
    }
}
const isDefinitelyAnObject = (input) => {
    return (
        typeof input === "object" &&
        !Array.isArray(input) &&
        input !== null &&
        !(input instanceof RegExp)
    );
}