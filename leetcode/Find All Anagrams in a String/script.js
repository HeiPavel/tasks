const findAnagrams = (s, p) => {
    const {length} = p, res = [], letterCodes = {};

    for (let i = 1; i < 27; i++) {
        const charCode = i + 96;
        letterCodes[String.fromCharCode(charCode)] = i + Math.floor(charCode ** 2 / (i * 2));
    }
    
    p = [...p].map(char => letterCodes[char]).reduce((sum, n) => sum + n, 0);
    s = [...s].map(char => letterCodes[char]);

    let head = 1, tail = length, prevCode = s[0], nextCode = s[tail];
    s[0] = s.slice(0, length).reduce((sum, n) => sum + n, 0);
    if (s[0] === p) res.push(0);

    while(tail < s.length) {
        const nextSum = s[head - 1] + nextCode - prevCode;
        if (nextSum === p) res.push(head);
        prevCode = s[head];
        s[head] = nextSum;
        head++;
        tail++;
        nextCode = s[tail];
    }

    return res;
}