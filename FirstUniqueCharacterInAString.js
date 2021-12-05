/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map1 = new Map();
    for (let i = 0; i < s.length; i++) {
        (map1.has(s[i])) ? map1.set(s[i], -1) : map1.set(s[i], i)
    }
    for ([val, index] of map1) {
        if (index !== -1) return index;
    }

    return -1


};

console.log(firstUniqChar("dacca"))