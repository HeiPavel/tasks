const search = (number, array) => {
    let left = 0;
    let right = array.length;
    while (right > left) {
        const mid = Math.floor((left + right)/2);
        if (number === array[mid]) return mid;
        number < array[mid] ? right = mid : left = mid + 1;
    }
    return null;
};

const arr = [1,2,3,4,5,6,7];

console.log(search(3, arr));