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
    let lastIndex = arrayOfLetters.length - 1;
    let j = arrayOfLetters.length - 2;
    while(indexs[0] < arrayOfLetters[0].length) {
        let currentCombination = '';
        for (const index in indexs) {
            if (index == lastIndex) {
                arrayOfLetters[lastIndex].forEach(letter => {
                    res.push(currentCombination + letter);
                    if (index == 0) indexs[index]++;
                });
            } else {
                currentCombination += arrayOfLetters[index][indexs[index]];
            }
        }
        if (j >= 0) {
            if (indexs[j] >= arrayOfLetters[j].length - 1) {
                if (j > 0) {
                    for (let i = j - 1; i >= 0; i--) {
                        if ((indexs[i] < arrayOfLetters[i].length)) {
                            if (i === 0 && (indexs[i + 1] >= arrayOfLetters[i + 1].length - 1)) indexs[i]++;
                            (indexs[i + 1] >= arrayOfLetters[i + 1].length - 1) ? indexs[i + 1] = 0 : indexs[i + 1]++;
                        }
                    }
                } else {
                    indexs[j]++;
                }
            } else {
                indexs[j]++;
            }
        }
    }
    return res;
}


console.log(letterCombinations('234'));