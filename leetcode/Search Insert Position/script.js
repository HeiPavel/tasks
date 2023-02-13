const searchInsert = (nums, target) => {
    let left = 0;
    let right = nums.length;
    let mid = 0
    while(right > left) {
        mid = Math.floor((left + right)/2);
        if (target === nums[mid]) return mid;
        target < nums[mid] ? right = mid: left = mid + 1;
    }
    if (target !== nums[mid] && right === left) return left;
    return searchInsert(nums, target + 1);
};

const arr = [1, 3, 4, 6, 7, 17];

console.log(searchInsert(arr, 14));