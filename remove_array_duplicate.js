/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] === nums[i+1]) {
            nums.splice(i,1);
            i--;
        }
    }
    // console.log(nums)
    // console.log(nums.length)
    return nums.length;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])