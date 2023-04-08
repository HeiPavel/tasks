const isValid = (s) => {
    const arr = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]] && s[i + 1]) {
            arr.push(s[i]);
        } else {
            if (brackets[arr[arr.length - 1]] !== s[i]) return false;
            arr.pop();
        }
    }
    return !arr.length;
};

const s1 = "()"; 
const s2 = "()[]{}";
const s3 = "(]";
const s4 = "{[]}"
const s5 = "(){}}{";
const s6 = ")(){}"
const s7 = "(()(";
const s8 = "(([]){})";

console.log(isValid(s2));