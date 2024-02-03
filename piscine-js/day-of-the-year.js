function dayOfTheYear(date) {
    let days = 0;
    let tempDate = new Date(date.getTime());
    while (!isFirstofFirst(tempDate)) {
        tempDate.setDate(tempDate.getDate() - 1);
        days++;
    }
    return days + 1;
}
function isFirstofFirst(date) {
    return date.getDate() === 1 && date.getMonth() === 0;
}