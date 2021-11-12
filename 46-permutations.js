var permute = function(nums) {
    // global result
    const result = [];

    // dfs recursive helper
    const dfs = (i, nums) => {
        console.log(nums + " i-> " + i)
        
        // base case
        if(i === nums.length) {
            result.push([...nums]);
            console.log('---- push ---- ' + result)
            return ;
        }
        
        // dfs recursive case
        for(let j=i;j< nums.length;j++){
            [nums[i] , nums[j]] = [nums[j], nums[i]];
            console.log(i+ ' - ' + j);
            dfs(i+1, nums);
            [nums[i] , nums[j]] = [nums[j], nums[i]];
        }
        
    }

    dfs(0,nums);
    return result;

};

permute([1,2,3])