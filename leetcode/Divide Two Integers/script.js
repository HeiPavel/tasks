const divide = (dividend, divisor) => {
    if (dividend === 0) return 0;
    let positive = false;
    if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) positive = true;
    dividend = dividend < 0 ? -1 * dividend : dividend;
    divisor = divisor < 0 ? -1 * divisor : divisor;
    if (dividend < divisor) return 0;
    let res = positive ? '' : '-';
    let devidendStr = `${dividend}`;
    let divisorStr = `${divisor}`;
    const minIntg = Math.pow(-2, 31);
    const maxIng = minIntg * -1 - 1;
    const divisorLength = divisorStr.length;
    let i = divisorLength - 1;
    let num = devidendStr.slice(0, divisorLength);
    if (num < divisor) {
        i++;
        num += devidendStr[i];
    }
    while (i < devidendStr.length) {
        if (num == 0 && devidendStr[i] !== '0') {
            num = devidendStr[i];
        } else {
            if (num < divisor && num !== 0) num += devidendStr[i];
        }
        let sum = 0;
        let counter = 0;
        while (num - sum >= divisor) {
            sum += divisor;
            counter++;
        }
        num = num - sum;
        res += counter;
        i++;
    }
    if (res >= maxIng) return maxIng;
    if (res <= minIntg) return minIntg;
    return Number(res);
};

console.log(divide(24798, 129));