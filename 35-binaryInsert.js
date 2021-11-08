var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left < right) {
        let mid = Math.floor((left+right)/2);
        console.log(left + ' - ' + right + ' - ' + mid);
        if(nums[mid] === target) return mid
        else if(nums[mid] > target) {
            right = mid
        }
        else {
            left = mid + 1
        }
    }
    return left
};

// 1x 3x 5x 6

console.log(searchInsert([1,3,5,6],9))