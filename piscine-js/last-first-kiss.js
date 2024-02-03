function first(info) {
    return info[0];
}

function last(info) {
    return info[info.length - 1];
}

function kiss(info) {
    const kiss = [last(info),first(info)];
    return kiss;
}