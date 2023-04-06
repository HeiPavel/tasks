const fourSum = (nums, target) => {
    nums.sort((a,b) => a - b);
    let res = [];
    let start = 0;
    const changeIndex = (index, string) => {
        let prevIndex = index;
        (string === 'increment') ? index++ : index--;
        while(nums[prevIndex] === nums[index]) {
            (string === 'increment') ? index++ : index--;
        }
        return index;
    }
    while(start + 3 < nums.length) {
        let innerStart = start + 1;
        while(innerStart + 2 < nums.length) {
            let left = innerStart + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[start] + nums[innerStart] + nums[left] + nums[right];
                if (sum < target) left = changeIndex(left, 'increment');
                if (sum > target) right = changeIndex(right, 'decrement');
                if (sum === target) {
                    res.push([nums[start], nums[innerStart], nums[left], nums[right]]);
                    left = changeIndex(left, 'increment');
                    right = changeIndex(right, 'decrement');
                }
            }
            innerStart = changeIndex(innerStart, 'increment');
        }
        start = changeIndex(start, 'increment');
    }
    return res;
};

const nums = [1,0,-1,0,-2,2];  // target = 0
const nums1 = [2,2,2,2,2]; // 8
const nums2 = [-3,-1,0,2,4,5]; // 0
const nums3 = [-2,-1,-1,1,1,2,2]; // 0
const nums4 = [-3,-2,-1,0,0,1,2,3]; // 0

const quad = fourSum(nums4, 0);
quad.forEach(num => console.log(num));