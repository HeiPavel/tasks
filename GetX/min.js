const findMin = (array) => {
    let min = array[0];
    let count = 0;
    array.forEach((element) => {
        count++;
        if (element < min) min = element;
    });
    return [min, count];
};

const arr = [5, 3, 1, 0, -4, 7];

console.log(findMin(arr));
console.log(Math.min(...arr));