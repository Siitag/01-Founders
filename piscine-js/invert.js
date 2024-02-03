function invert(obj) {
    const invertedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
        invertedObj[obj[key]] = key;
        }
    }
    return invertedObj;
}
