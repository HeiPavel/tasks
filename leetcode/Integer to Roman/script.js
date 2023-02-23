const intToRoman = (num) => {
    const symbolObj = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    if (symbolObj[num]) return symbolObj[num];
    const lowerThan50 = num => {
        let result = '';
        let romeDigit = 0;
        if (num < 50) {
            if (num == 40) return 'XL';
            romeDigit = num % 10;
            let rest = num - romeDigit;
            if (num > 40) return 'XL' + symbolObj[romeDigit];
            while (rest) {
                rest = rest - 10;
                result += 'X';
            }
        }
        return romeDigit ? result + symbolObj[romeDigit] : result;
    }
    const lowerThan100 = num => {
        let result = 'L';
        let romeDigit = 0;
        if (num < 50) return lowerThan50(num);
        if (num < 100) {
            if (num == 90) return 'XC';
            romeDigit = num % 10;
            if (num > 90) return 'XC' + symbolObj[romeDigit];
            let rest = num - romeDigit;
            while (rest > 50) {
                rest = rest - 10;
                result += 'X';
            }
        }
        return romeDigit ? result + symbolObj[romeDigit] : result;
    }
    const lowerThan500 = num => {
        let result = '';
        let decDigit = 0;
        if (num < 100) return lowerThan100(num);
        if (num < 500) {
            if (num == 400) return 'CD';
            decDigit = num % 100;
            if (num > 400) return 'CD' + lowerThan100(decDigit);
            let rest = num - decDigit;
            while (rest > 0) {
                rest = rest - 100;
                result += 'C';
            }
        }
        return decDigit ? result + lowerThan100(decDigit) : result;
    }
    const lowerThan1000 = num => {
        let result = 'D';
        let decDigit = 0;
        if (num < 500) return lowerThan500(num);
        if (num < 1000) {
            if (num == 900) return 'CM';
            decDigit = num % 100;
            if (num > 900) return 'CM' + lowerThan100(decDigit);
            let rest = num - decDigit;
            while (rest > 500) {
                rest = rest - 100;
                result += 'C';
            }
        }
        return decDigit ? result + lowerThan100(decDigit) : result;
    }
    const lowerThan4000 = num => {
        let result = '';
        let hunDigit = 0
        if (num < 1000) return lowerThan1000(num);
        if (num < 4000) {
            hunDigit = num % 1000;
            let rest = num - hunDigit;
            while (rest > 0) {
                rest = rest - 1000;
                result += 'M';
            }
        }
        return hunDigit ? result + lowerThan1000(hunDigit) : result;
    }
    return lowerThan4000(num);
};

console.log(intToRoman(994));

/*const ver2 = num => {
    const res = '';
    let rest = num;
    const symbolObj = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    if (symbolObj[num]) return symbolObj[num];
    let decDigit = 0;
    if (num < 50) {
        decDigit = num % 10;
        while (rest > 0)
    }
}*/