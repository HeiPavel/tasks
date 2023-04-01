const letterCombinations = (digits) => {
    if (!digits.length) return [];
    let res = [];
    const obj = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    const indexs = {};
    arrayOfLetters = [];
    for (let i = 0; i < digits.length; i++) {
        arrayOfLetters.push([...obj[digits[i]]]);
        indexs[i] = 0;
    }
    arrayOfLetters.forEach(l => console.log(l));
    let lastIndex = arrayOfLetters.length - 1;
    //console.log(indexs);
    let check = true;
    while(check) {
        let currentCombination = '';
        console.log(indexs);
        check = false;
        for (let index in indexs) {
            index = Number(index);
            ((indexs[index] == arrayOfLetters[index].length - 1) && !check) ? check = false : check = true;
            currentCombination += arrayOfLetters[index][indexs[index]];
        }
        res.push(currentCombination);
        for (let i = lastIndex; i >= 0; i--) {
            if (i == lastIndex) {
                if (indexs[i] < arrayOfLetters[i].length - 1) {
                    indexs[i]++;
                } else {
                    if (indexs[i - 1] !== undefined) indexs[i - 1]++;
                    indexs[i] = 0;
                }
            } else {
                if (indexs[i] >= arrayOfLetters[i].length) {
                    if (i !== 0) indexs[i] = 0;
                    if (indexs[i - 1] !== undefined) indexs[i - 1]++;
                }
            }
        }
    }
    return res;
}


console.log(letterCombinations('5678'));