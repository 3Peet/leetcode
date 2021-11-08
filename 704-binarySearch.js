var search = function(nums, target) {
    let left = 0;
    let right = nums.length
    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            // Mid Higher
            right = mid-1;
        }
        else {
            // Mid Lower
            left = mid+1;
        }
    }
    return -1;
};
console.log(search([5],5))
console.log(Math.floor(9/2))