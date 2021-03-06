var rob = function(nums) {
    
    // base case 
    if(!nums.length) return 0;
    if(nums.length ===1) return nums[0];
    if(nums.length ===2) return Math.max(nums[0],nums[1]);
    
    // dp
    for(let i=2;i<nums.length;i++){
        nums[i] = Math.max((nums[i-2] + nums[i]),(nums[i-3] || 0) + nums[i] )
    }

    return Math.max((nums[nums.length-1]),(nums[nums.length-2]));

};
console.log(rob([1,2,3,1]))

//https://www.youtube.com/watch?v=EZRYtQF2t1k&ab_channel=ThinkFWD
