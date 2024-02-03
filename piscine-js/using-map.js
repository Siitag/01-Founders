function citiesOnly(objectArray) {
    return objectArray.map(obj => obj.city.trim());
}

function capitalize(str) {
    return str.split(' ')
              .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

function upperCasingStates(strArray) {
    return strArray.map(capitalize);
}

function fahrenheitToCelsius(strArray) {
    return strArray.map(temp => {
        const fahrenheit = parseInt(temp);
        const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        return celsius + '°C';
    });
}

function trimTemp(objectArray) {
    return objectArray.map(obj => {
        const trimmedTemp = obj.temperature.trim().replace(/\s/g, '');
        return { ...obj, temperature: trimmedTemp };
    });
}


function tempForecasts(objectArray) {
    return objectArray.map(obj => {
        const celsius = Math.floor((parseInt(obj.temperature.trim()) - 32) * 5 / 9) + '°Celsius';
        return `${celsius} in ${capitalize(obj.city)}, ${capitalize(obj.state)}`;
    });
}


