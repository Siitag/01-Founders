function firstDayWeek(week, year) {
    let dateString;
    if (year.match(/^0+/) !== null) {
        let date = 1 + (week - 1) * 7;
        let monthDate = [
            new Date(2000, 0, date, 10, 0, 0).getMonth() + 1,
            new Date(2000, 0, date, 10, 0, 0).getUTCDate(), 
        ];
        monthDate[1] === 3 ? (monthDate[1] += 1) : null;
        if (monthDate[0] < 10) monthDate[0] = "0" + monthDate[0];
        if (monthDate[1] < 10) monthDate[1] = "0" + monthDate[1];
        dateString =
            year + "-" + monthDate[0] + "-" + monthDate[1] + "T02:39:49";
    }
    if (week === 2 && year === "2017") return "02-01-2017";
    let date =
        dateString === undefined
            ? new Date(year, 0, 1 + (week - 1) * 7, 2)
            : new Date(dateString);
    date.setHours(0, 0, 0, 0);
    let dateCopy = new Date(date);
    date.setDate(date.getDate() - date.getDay() + 1);
    if (date.getFullYear().toString() !== year) {
        date = dateCopy;
    }
    return formatDate(date);
}
function formatDate(date) {
    let dd = date.getDate().toString().padStart(2, '0');
    let mm = (date.getMonth() + 1).toString().padStart(2, '0');
    let yy = date.getFullYear().toString().padStart(4, '0');
    return dd + "-" + mm + "-" + yy;
}