function ionOut(str) {
    let arr = str.split(" ");
    let rexp = /tion/g;
    let res = [];
    arr.forEach((word) => {
        if (word.match(rexp)) {
            let cleanedWord = word.replace(/[.,?!]/g, "");
            let modifiedWord = cleanedWord.slice(0, -3);
            res.push(modifiedWord);
        }
    });
    return res;
}