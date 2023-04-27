const removeDuplicates = (nums) => {
    const set = new Set(nums);
    nums.unshift(...set);
    const difLength = nums.length - set.size;
    nums.splice(difLength, difLength);
    return set.size;
};