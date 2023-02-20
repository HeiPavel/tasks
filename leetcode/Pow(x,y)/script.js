const myPow = (x, n) => {
    if (n == 0 || x == 1) return 1;
    if (x == 0) return 0;
    if (x == -1) {
        if (n % 2 == 0) return 1;
        return -1;
    }
    const rec = (x, n) => {
        if (n == 1) return x;
        const res = rec(x, Math.floor(n/2));
        if (n % 2 == 0) return res * res;
        return x * res * res;
    }
    if (n > 0) return rec(x, n);
    return 1/rec(x, Math.abs(n));
}

console.log(myPow(2, 11));