const twoSum = function (nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        console.log(comp)
        console.log('comp[nums[i]] -> ' + comp[nums[i]])
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]] + 1, i + 1]
        }
        comp[target - nums[i]] = i
    }
};


// console.log(twoSum([2,7,11,15,16],31))
