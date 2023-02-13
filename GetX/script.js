function getX(x, nums) {
    // Write your code here
    /*const res = [...nums].sort((a, b) => a - b)[x - 1];
    return res ? res : 0;*/
    /*const merge = (leftArray, rightArray) => {
      const sortedArray = [];
      while(leftArray.length && rightArray.length) {
        leftArray[0] < rightArray[0] ? sortedArray.push(leftArray.shift()) : sortedArray.push(rightArray.shift());
      }
      return sortedArray.concat(leftArray, rightArray);
    };
    const sort = (array) => {
      const length = array.length;
      if (length === 1) return array;
      const midIndex = Math.floor(length/2);
      const left = array.slice(0, midIndex);
      const right = array.slice(midIndex, length);
      return merge(sort(left), sort(right));
    };
    const result = sort(nums)[x - 1];
    if (x > nums.length || x < 1){
        return 0;
    }
    return result;*/
    const array = [...nums];
    let swapping = true;
    let counter = 0;
    while(swapping) {
      swapping = false;
      for (let i = 0; i < array.length - 1; i++) {
        counter++;
        const temp = array[i];
        if (array[i] > array[i + 1]) {
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapping = true;
        }
      }
    }
    console.log(counter);
    return array[x - 1];
  }
  
  /*function sort(array) {
    const length = array.length;
    if (length === 1) return array;
    const midIndex = Math.floor(length/2);
    const left = array.slice(0, midIndex);
    const right = array.slice(midIndex, length);
    return merge(sort(left), sort(right));
  }
  
  function merge(leftArray, rightArray) {
    const sortedArray = [];
    while(leftArray.length && rightArray.length) {
      leftArray[0] < rightArray[0] ? sortedArray.push(leftArray.shift()) : sortedArray.push(rightArray.shift());
    }
    return sortedArray.concat(leftArray, rightArray);
  }*/
  
  console.log(getX(2, [5, 10, -3, -3, 7, 9]));