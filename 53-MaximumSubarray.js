/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let MaxSum = nums[0];
    let curSum = 0;
    nums.forEach(element => {
        if (curSum < 0) curSum = 0;
        curSum += element;
        MaxSum = Math.max(MaxSum, curSum);
    });
    return MaxSum
};

maxSubArray([5, 4, -1, 7, 8])