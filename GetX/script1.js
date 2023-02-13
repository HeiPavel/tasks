const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
      return startArray;
    }
    
    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
  
    return merge(mergeSort(leftArray), mergeSort(rightArray))
  }
  
  const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while(leftArray.length && rightArray.length) {
      leftArray[0] < rightArray[0] ? sortedArray.push(leftArray.shift()) : sortedArray.push(rightArray.shift());
    }
    return sortedArray.concat(leftArray, rightArray);
  }
  
  
  const inputArr = [3, 5, 2, 90, 4, 7];
  
  console.log(mergeSort(inputArr));
  