
var moveZeroes = function (nums) {
    let count = 0;
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            count++;
            nums.splice(i, 1);
            i--;
        }
    }
    while (count > 0) {
        nums.push(0);
        count--;
    }
    return nums;
};


console.log(moveZeroes([0,0,1]))