const convert = (s, numRows) => {
    let res = '';
    let counter = 0;
    let countBack = numRows - 1;
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (counter < numRows) obj[counter] ? obj[counter] += s[i] : obj[counter] = s[i];
        if (counter >= numRows) {
            if (countBack) countBack--;
            obj[countBack] += s[i];
        }
        counter++;
        if (!countBack) {
            countBack = numRows - 1;
            counter = 1;
        }
    }
    console.log(obj);
    for (const substring in obj) {
        res += obj[substring];
    }
    return res;
};

const str = 'PAYPALISHIRING';

console.log(convert(str, 3));