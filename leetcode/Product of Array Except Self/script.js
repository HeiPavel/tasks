const productExceptSelf = (nums) => {
    let total = 1, isZero = false;
    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) {
            if (isZero) total = 0;
            isZero = true;
            continue;
        }
        total *= nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = total ? isZero ? nums[i] ? 0 : total : total * (nums[i] ** -1) : 0;
    }
    return nums;
};