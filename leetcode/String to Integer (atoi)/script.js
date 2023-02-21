const toNumber = s => {
    s = s.trim();
    s = s.includes(' ') ? s.slice(0, s.indexOf(' ')) : s;
    const multiplier = s.startsWith('-') ? -1 : 1;
    if (s.startsWith('-') || s.startsWith('+')) s = s.slice(1, s.length);
    const numsArray = s.match(/^[0-9]+/);
    const max = Math.pow(2, 31);
    const res = numsArray ? Number(numsArray[0]) * multiplier : 0;
    if (res >= max) return max - 1;
    if (res < max * -1) return - max;
    return res;
}

const str = ' b11228552307';

console.log(toNumber(str));