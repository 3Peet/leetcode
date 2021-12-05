/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    // s = s.replace(/\./g, '')
    // console.log(s)
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome("`l;`` 1o1 ??;l`"))

// EZ way -  s === s.split('').reverse().join('');