var rotate = function(nums, k) {
    const n = nums.length;
    k %=n;

    reverse(nums,0,n-1);
    reverse(nums,0,k-1);
    reverse(nums,k,n-1);

};

function reverse(arr, start , end) {
    while (start < end) {
        [arr[start] , arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
}

console.log(rotate([1,2,3,4,5,6,7],3))

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]