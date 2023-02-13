const exampleArray = [4, 5, 2, 3, 1, 7, 3, 9, 0];
const ex1 = [1,2,3,4,5,6,7];
const ex2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const bubleSort = (array) => {
    const sortedArray = [...array];
    while(!sortedArray.every((element, index, array) => index < array.length - 1 ? element <= array[index + 1] : element)) {
        sortedArray.forEach((element, index, array) => {
        if (index < array.length - 1) {
            const prev = element;
            if (prev > array[index + 1]) {
                console.log('hello');
                array[index] = array[index + 1];
                array[index + 1] = prev;
            }
        }
        });
    }
    return sortedArray;
};

const bubleSortFixed = (array) => {
    const sortedArray = [...array];
    let swap = true;
    while(swap) {
        swap = false;
        for (let index = 0; index < sortedArray.length - 1; index++) {
            console.log('hello');
            const prev = sortedArray[index];
            if (prev > sortedArray[index + 1]) {
                //console.log('hello');
                sortedArray[index] = sortedArray[index + 1];
                sortedArray[index + 1] = prev;
                swap = true;
            }
        };
    }
    return sortedArray;
}

console.log(bubleSortFixed(ex2));
//console.log(exampleArray);