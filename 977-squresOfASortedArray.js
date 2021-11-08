var sortedSquares = function(nums) {
    nums.forEach((element,index) => {
        nums[index] = Math.pow(element,2)
    });
    return nums.sort(function(a,b) {return(a-b)})

    
};

console.log(sortedSquares([-4,-1,0,3,10]))

// [-4,-1,0,3,10]
// [0,1,9,16,100]