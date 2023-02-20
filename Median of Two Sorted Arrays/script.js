const findMedianSortedArrays = (nums1, nums2) => {
    const res = [];
    let i = 0;
    let j = 0;
    const sumLength = nums1.length + nums2.length;
    const index = Math.floor(sumLength/2);
    const binate = sumLength % 2 == 0 ? true : false;
    while (res.length < sumLength) {
        if (nums1[i] !== undefined) {
            if (nums2[j] !== undefined) {
                if (nums1[i] < nums2[j]) {
                    res.push(nums1[i]);
                    i++;
                } else {
                    res.push(nums2[j]);
                    j++;
                }
            } else {
                res.push(nums1[i]);
                i++;
            }
        } else {
            if (nums2[j] !== undefined) {
                res.push(nums2[j]);
                j++;
            }
        }
        if (index == res.length - 1) return binate ? (res[index] + res[index - 1])/2 : res[index];
    }
}

const nums1 = [1,2], nums2 = [3,4];

console.log(findMedianSortedArrays(nums1, nums2));