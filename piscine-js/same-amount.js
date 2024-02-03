function sameAmount(str, rexp1, rexp2) {
    rexp1 = new RegExp(rexp1, "g");
    rexp2 = new RegExp(rexp2, "g");
    const matches1 = str.match(rexp1);
    const matches2 = str.match(rexp2);
    return matches1 !== null && matches2 !== null && matches1.length === matches2.length;
}