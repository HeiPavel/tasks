const lengthOfLongestSubstring = s => {
    let res = '';
    let i = 0;
    let j = 0;
    let current = '';
    while (i < s.length) {
        if (!current.includes(s[i])) {
            current += s[i];
            i++;
        } else {
            if (current.length > res.length) res = current;
            current = '';
            j = s.indexOf(s[i]);
            s = j ? s.slice(j, s.length) : s.slice(j + 1, s.length);
            i = 0;
        }
    }
    if (current.length > res.length) res = current;
    return res;
};

const string = 'dvdf';

console.log(lengthOfLongestSubstring(string));