/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) >= 0) {
            return [map.get(nums[i]), i];
        }
        map.set(target - nums[i], i);
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
