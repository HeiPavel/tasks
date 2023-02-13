const search = (number, array) => {
    let left = 0;
    let right = array.length;
    while (right > left) {
        let mid = Math.floor((left + right)/2);
        while (number === array[mid] && number === array[mid - 1]) {
            mid -= 1;
        }
        if (number === array[mid]) return mid;
        number < array[mid] ? right = mid : left = mid + 1;
    }
    return null;
};

const arr = [1,2,2,2,3,4,5,5,5,5,5,5,5,6,7,8,9,10,11,12];

console.log(search(5, arr));