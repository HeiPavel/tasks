const fullJustify = (words, maxWidth) => {
    const res = [];
    let nextRow = [], currentLength = 0;

    const addNewRow = (row, maxWidth, rowLength) => {
        const {length} = row;
        let extraSpaces = maxWidth - rowLength;
        let res = '', space = 0;
        if (extraSpaces > length - 1) {
            space = length > 1 ? Math.floor(extraSpaces / (length - 1)) : extraSpaces;
            extraSpaces = length > 1 ? extraSpaces % (length - 1) : 0;
        }
        for (const word of row) {
            res += (res.length + word.length) < maxWidth ? word.padEnd(word.length + space + (extraSpaces-- > 0 ? 1 : 0)) : word;
        }
        return res;
    }

    for (let i = 0; i < words.length; i++) {
        currentLength += words[i].length;
        if ((currentLength + nextRow.length) > maxWidth) {
            res.push(addNewRow(nextRow, maxWidth, currentLength - words[i].length));
            nextRow = [];
            currentLength = words[i].length;
        }
        nextRow.push(words[i]);
    }

    if (nextRow.length) res.push(nextRow.join(' ').padEnd(maxWidth));

    return res;
};