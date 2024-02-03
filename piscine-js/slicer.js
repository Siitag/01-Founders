function slice(input, start, end) {
    if (end === undefined) {
        end = input.length;
    }
    let result;
    if (start < 0) {
        start = input.length + start;
    }
    if (end < 0) {
        end = input.length + end;
    }
    if (typeof input === "string") {
        result = "";
        for (let i = start; i < end; i++) {
            result += input[i];
        }
    }
    if (Array.isArray(input)) {
        result = [];
        for (let i = start; i < end; i++) {
            result.push(input[i]);
        }
    }
    return result;
}