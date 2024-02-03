function pronoun(str) {
    var obj = {}; // Create an empty object to store the pronouns and their corresponding words
    var arr = str.split("\n").join(" ").split(" "); // Split the string into an array of words
    // Loop through the array of words
    for (var i = 0; i < arr.length; i++) {
        // Check if the word is a personal pronoun
        if (/^i$/i.test(arr[i])) {
            // If the pronoun is "i", create a sub object for it if it doesn't exist
            obj["i"] === undefined ? (obj["i"] = {}) : null;
            // Increment the count property of the sub object or set it to 1 if it doesn't exist
            obj["i"]["count"] === undefined
                ? (obj["i"]["count"] = 1)
                : obj["i"]["count"]++;
            // Create an array property to store the words after the pronoun
            obj["i"]["word"] === undefined ? (obj["i"]["word"] = []) : null;
            // Push the next word after the pronoun to the array
            obj["i"]["word"].push(findNextWord(arr.slice(i)));
        } else if (/^you$/i.test(arr[i])) {
            // Repeat the same process for other pronouns
            obj["you"] === undefined ? (obj["you"] = {}) : null;
            obj["you"]["count"] === undefined
                ? (obj["you"]["count"] = 1)
                : obj["you"]["count"]++;
            obj["you"]["word"] === undefined ? (obj["you"]["word"] = []) : null;
            obj["you"]["word"].push(findNextWord(arr.slice(i)));
        } else if (/^he$/i.test(arr[i])) {
            obj["he"] === undefined ? (obj["he"] = {}) : null;
            obj["he"]["count"] === undefined
                ? (obj["he"]["count"] = 1)
                : obj["he"]["count"]++;
            obj["he"]["word"] === undefined ? (obj["he"]["word"] = []) : null;
            obj["he"]["word"].push(findNextWord(arr.slice(i)));
        } else if (/^she$/i.test(arr[i])) {
            obj["she"] === undefined ? (obj["she"] = {}) : null;
            obj["she"]["count"] === undefined
                ? (obj["she"]["count"] = 1)
                : obj["she"]["count"]++;
            obj["she"]["word"] === undefined ? (obj["she"]["word"] = []) : null;
            obj["she"]["word"].push(findNextWord(arr.slice(i)));
        } else if (/^it$/i.test(arr[i])) {
            obj["it"] === undefined ? (obj["it"] = {}) : null;
            obj["it"]["count"] === undefined
                ? (obj["it"]["count"] = 1)
                : obj["it"]["count"]++;
            obj["it"]["word"] === undefined ? (obj["it"]["word"] = []) : null;
            obj["it"]["word"].push(findNextWord(arr.slice(i)));
        } else if (/^they$/i.test(arr[i])) {
            obj["they"] === undefined ? (obj["they"] = {}) : null;
            obj["they"]["count"] === undefined
                ? (obj["they"]["count"] = 1)
                : obj["they"]["count"]++;
            obj["they"]["word"] === undefined
                ? (obj["they"]["word"] = [])
                : null;
            obj["they"]["word"].push(findNextWord(arr.slice(i)));
        } else if (/^we$/i.test(arr[i])) {
            obj["we"] === undefined ? (obj["we"] = {}) : null;
            obj["we"]["count"] === undefined
                ? (obj["we"]["count"] = 1)
                : obj["we"]["count"]++;
            obj["we"]["word"] === undefined ? (obj["we"]["word"] = []) : null;
            obj["we"]["word"].push(findNextWord(arr.slice(i)));
        }
    }
    // Remove any undefined values from the word arrays
    for (var key in obj) {
        obj[key]["word"] = obj[key]["word"].filter((x) => x !== undefined);
    }
    return obj; // Return the object with the pronouns and their corresponding words
}
function findNextWord(arr) {
    var pronouns = /^(i|you|he|she|it|they|we)$/i; // Regular expression to match personal pronouns
    for (var i = 1; i < arr.length; i++) {
        if (pronouns.test(arr[i])) {
            return; // If the next word is also a pronoun, return undefined
        } else {
            return arr[i].replace(/,/, ""); // Otherwise, return the next word after the pronoun
        }
    }
}
