// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//     let range = needle.length;
//     if (range === 0) return 0;
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack.slice(i, i + range) === needle) {
//             return i
//         }
//         // console.log(haystack.slice(i, i + range))
//     }
//     return -1;

// };

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr('aaaaa', 'bba'))
