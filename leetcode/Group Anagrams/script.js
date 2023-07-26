const groupAnagrams = (strs) => {
    const res = new Map();
    const hash = (str) => {
        const codeArray = [];
        for (let i = 0; i < str.length; i++) {
            codeArray.push(str.charCodeAt(i));
        }
        codeArray.sort((a, b) => a - b);
        return codeArray.join('');
    }
    for (const str of strs) {
        const hashCode = hash(str);
        res.has(hashCode) ? res.get(hashCode).push(str) : res.set(hashCode, [str]);
    }
    return [...res.values()];
};

const arr = ["eat","tea","tan","ate","nat","bat"];
const arr1 = [""];
const arr2 = ["a"];
const arr3 = ["","b",""];
const arr4 = ["ac","c"];
const arr5 = ["ddddddddddg","dgggggggggg"];

console.log(groupAnagrams(arr));