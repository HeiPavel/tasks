const getX = (x, nums) => {
    const sortedArray = [];
    if (x > 0 && x <= nums.length) {
        while (sortedArray.length < x) {
            const min = Math.min(...nums);
            sortedArray.push(min);
            nums.splice(nums.indexOf(min), 1);
       }
       return sortedArray[x - 1];
    } else {
        return 0;
    }
}

const getXv2 = (x, nums) => {
    const sortedArray = [];
    let min = nums[0];
    let index = 0;
    if (x > 0 && x <= nums.length) {
        while (sortedArray.length < x) {
            for (let i = 0; i < nums.length; i++) {
                if (min > nums[i + 1]) {
                    min = nums[i + 1];
                    index = i + 1;
                }
            }
            sortedArray.push(min);
            nums.splice(index, 1);
            index = 0;
            min = nums[0];
        }
        return sortedArray[x - 1];
    } else {
        return 0;
    }
}

const arr = [5, 7, -2, 8, 14, 2];

console.log(getX(3, arr));
console.log(getX(6, [5, 10, -3, -3, 7, 9]));
console.log(getXv2(2, [5, 10, -3, -3, 7, 9]));