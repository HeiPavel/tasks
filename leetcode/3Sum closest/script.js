const threeSumClosest = (nums, target) => {
    nums.sort((a,b) => a-b);
    let closestSum;
    let currentSum;
    if (nums.length == 3) {
        return nums.reduce((sum, num) => sum + num);
    } else {
        for (let i = 0; i < nums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;
            while(left < right) {
                currentSum = nums[left] + nums[i] + nums[right];
                if (currentSum === target) {
                    return currentSum;
                } else {
                    if (closestSum === undefined) {
                        closestSum = currentSum;
                    } else {
                       if (Math.abs(target - currentSum) <= Math.abs(target - closestSum)) {
                        closestSum = currentSum;
                       }
                    }
                }
                (currentSum < target) ? left++ : right--;
            }
        }
    }
    return closestSum;
}

const arr = [5,-4,3,2,8,-2,7];
const arr1 = [-1,2,1,-4];
const arr2 = [0,0,0];
const arr3 = [4,0,5,-5,3,3,0,-4,-5]; //-2
const arr4 = [1,1,1,0]; //-100
const arr5 = [-43,57,-71,47,3,30,-85,6,60,-59,0,-46,-40,-73,53,68,-82,-54,88,73,20,-89,-22,39,55,-26,95,-87,-57,-86,28,-37,
    43,-27,-24,-88,-35,82,-3,39,-85,-46,37,45,-24,35,-49,-27,-96,89,87,-62,85,-44,64,78,14,59,-55,-10,0,98,50,-75,11,97,-72,85,
    -68,-76,44,-12,76,76,8,-75,-64,-57,29,-24,27,-3,-45,-87,48,10,-13,17,94,-85,11,-42,-98,89,97,-66,66,88,-89,90,-68,-62,-21,2,37,
    -15,-13,-24,-23,3,-58,-9,-71,0,37,-28,22,52,-34,24,-8,-20,29,-98,55,4,36,-3,-9,98,-26,17,82,23,56,54,53,51,-50,0,-15,-50,84,-90,90,72,
    -46,-96,-56,-76,-32,-8,-69,-32,-41,-56,69,-40,-25,-44,49,-62,36,-55,41,36,-60,90,37,13,87,66,-40,40,-35,-11,31,-45,-62,92,96,8,-4,-50,87,
    -17,-64,95,-89,68,-51,-40,-85,15,50,-15,0,-67,-55,45,11,-80,-45,-10,-8,90,-23,-41,80,19,29,7] //255
const arr6 = [-23,-67,32,21,-65,46,73,42,93,9,-61,-79,-51,61,-15,49,92,-34,50,1,26,-12,68,-97,-17,51,
    -55,75,-56,-95,-70,-42,91,-18,-64,20,33,-20,19,61,-89,81,-73,82,-23,-65,51,-88,15,-48,24,34,0,-24,
    37,22,28,-67,-25,-61,-57,-74,65,50,-66,24,99,80,44,85,20,-4,-9,-81,87,-82,-100,51,-83,9,-31,37,23,
    -61,53,-14,-51,88,56,27,42,-52,-97,37,36,-59,-45,95,46,-1,-100,-38,66,44,27,-97,12,-43,84,-53,93,18,
    -40,-38,34,85,53,-50,-14,-6,98,-77,-17,50,-65,52,-46,-94,49,72,-2,-82,45,-39,-58,67,82,63,95,-32,47,15,
    -20,46,5,17,-40,-95,97,-9,11,8,-51,-24,-50,-37,-72,-57,26,26,19,71,-42]  //-87
const arr7 = [0,3,97,102,200]; //300

console.log(threeSumClosest(arr5, 255));