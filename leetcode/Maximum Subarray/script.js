const maxSubArray = (nums) => {
    let sum = -Infinity;
    let cSum = 0;
    for (let i = 0; i < nums.length; i++) {
        cSum += nums[i];
        if (cSum < nums[i]) cSum = nums[i];
        if (cSum > sum) sum = cSum;
    }
    return sum;
};

const arr = [-2,1,-3,4,-1,2,1,-5,4]; //6
const arr1 = [1]; //1
const arr2 = [5,4,-1,7,8]; //23
const arr3 = [-2,1]; //1
const arr4 = [-2,-1]; //-1
const arr5 = [-1,-2]; //-1

console.log(maxSubArray(arr2));