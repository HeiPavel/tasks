const checkNumberRecursevly = (n) => {
    /*if (n <= 0) return false;
    if (n === 1) return true;
    if (n % 3 !== 0) return false;*/
    return n === 1 ? true : (n <= 0 || n % 3 !== 0) ? false : checkNumberRecursevly(n/3);
};

const checkNumber = (n) => {
    if (n <= 0) return false;
    for (let i = 0; i < n; i++) {
        if (Math.pow(3, i) > n) return false;
        if (Math.pow(3, i) === n) return true;
    }
}

console.log(checkNumber(3));
console.log(checkNumberRecursevly(1));