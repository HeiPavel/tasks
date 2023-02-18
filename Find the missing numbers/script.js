const missingNos = (array, k) => {
    const fullNum = [];
    const res = [];
    for (let i = 1; i <= array.length + k; i++) {
        fullNum.push(i);
    }
    for (i = 0; i < fullNum.length; i++) {
        if (!array.includes(fullNum[i])) res.push(fullNum[i]);
        if (res.length === k) return res;
    }
    return 0;
}

const arr = [1,2,4,5,7,8,9,10];

console.log(missingNos(arr, 2));

console.log(missingNos([2, 3, 4, 5, 6, 7, 8, 9], 2))
console.log(missingNos([], 2))
console.log(missingNos([], 0))
console.log(missingNos([2, 3, 4, 5, 6, 7, 8, 9], 6))
console.log(missingNos([8, 9], 4))