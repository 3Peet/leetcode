/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let ans = [];
    if (nums1.length > nums2.length) {
        for (let i = 0; i < nums2.length; i++) {
            // found a value
            if (nums1.indexOf(nums2[i]) > -1) {

                ans.push(nums2[i])
                nums1.splice(nums1.indexOf(nums2[i]), 1)
            }
        }
    }
    else {
        for (let i = 0; i < nums1.length; i++) {
            // found a value
            if (nums2.indexOf(nums1[i]) > -1) {
                ans.push(nums1[i])
                nums2.splice(nums2.indexOf(nums1[i]), 1)
            }
        }
    }
    console.log(ans)
    return ans
};

intersect([3, 1, 2], [1, 1])