const mergeSort = (array) => {
    const length = array.length;
    if (length === 1) return array;
    const mid = Math.floor(length/2);
    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid, length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
    console.log(`leftArray is ${leftArray}, rightArray is ${rightArray}`);
    const sortedArray = [];
    while(leftArray.length && rightArray.length) {
        leftArray[0] < rightArray[0] ? sortedArray.push(leftArray.shift()) : sortedArray.push(rightArray.shift());
    }
    //console.log(sortedArray.concat(leftArray, rightArray));
    return sortedArray.concat(leftArray, rightArray);
};

const arr = [7, 3, 5, 9, 11, 2, 4, 1, 17, 24];
const arr1 = [3, 7, 2, 4, 1];

console.log(mergeSort(arr1));