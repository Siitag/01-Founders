function sign(n) {
    if (n > 0) {
        return 1
    }
    if (n === 0) {
        return 0
    }
    if (n < 0) {
        return -1
    }
}

function sameSign(n1,n2) {
    if ((sign(n1) > 0 && sign(n2) > 0) || (sign(n1) < 0 && sign(n2) < 0) || (sign(n1) === 0 && sign(n2) === 0)) {
        return true
    } else {
        return false
    }
}