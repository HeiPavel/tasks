const lengthOfLongestSubstring = s => {
    let string = s;
    let res = '';
    let check = true;
    let i = 0;
    let current = '';
    while (check && i < string.length) {
        check = false;
        console.log(`cur: ${current}`, `char: ${s[i]}`);
        if (!current.includes(string[i])) {
            current += string[i];
            i++;
            check = true;
        } else {
            if (current.length > res.length) {
                res = current;
                current = '';
                check = true;
                i = string.indexOf(string[i]) ? string.indexOf(string[i]) : 1;
                string = string.slice(i, s.length);
            } else {
                current = '';
                i++;
                check = true;
            }
        }
    }
    if (current.length > res.length) res = current;
    return res;
};

const string = 'anviaj';

console.log(lengthOfLongestSubstring(string));