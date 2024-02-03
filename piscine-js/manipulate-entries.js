const filterEntries = (obj, filter) => {
    const res = {};
    Object.entries(obj).forEach(([key, value]) => {
        if (filter([key, value])) {
            res[key] = value;
        }
    });
    return res;
}
const mapEntries = (entries, mapper) => {
    const temp = {};
    Object.entries(entries).forEach(([key, value]) => {
        const [newKey, newValue] = mapper([key, value]);
        temp[newKey] = newValue;
    });
    return temp;
}
const reduceEntries = (entries, reducer, initialValue) => {
    return Object.entries(entries).reduce((acc, [key, value]) => {
        return reducer(acc, [key, value]);
    }, initialValue);
}
const lowCarbs = (entries) => {
    return filterEntries(entries, (entry) => {
        const value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];
        return parseInt(value) <= 50;
    });
}
const totalCalories = (entries) => {
    return Number(
        reduceEntries(
            entries,
            (acc, curr) => {
                const value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
                return acc + value;
            },
            0
        ).toFixed(1)
    );
}
const cartTotal = (entries) => {
    const res = {};
    Object.entries(entries).forEach(([key, value]) => {
        res[key] = {};
        Object.entries(nutritionDB[key]).forEach(([dbKey, dbValue]) => {
            res[key][dbKey] = Math.round((value / 100) * dbValue * 1000) / 1000;
        });
    });
    return res;
}