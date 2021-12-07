// idea
// 1. create 2 arrays to compare character in substring
// 2. fill 2 arrays with s1 value (cuz s1 is checker)
// 3. sliding window with s1.length is window range
// 4. compare every step of sliding 


var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length || s2.length === 0) return false;
    if (s1.length === 0) return true;

    let baseCharCode = 'a'.charCodeAt(0);
    let s1map = Array(26).fill(0);
    let s2map = Array(26).fill(0);

    // start window at same value;
    for (let i = 0; i < s1.length; i++) {
        s1map[s1.charCodeAt(i) - baseCharCode] += 1;
        s2map[s2.charCodeAt(i) - baseCharCode] += 1;
    }

    // sliding window process
    for (let i = 0; i < s2.length; i++) {
        if (isEquals(s1map, s2map)) return true;

        // sliding window here (2 steps)
        // add next value
        s2map[s2.charCodeAt(i + s1.length) - baseCharCode] += 1;
        // remove old value
        s2map[s2.charCodeAt(i) - baseCharCode] -= 1;
    }
    return isEquals(s1map, s2map)


    function isEquals(array1, array2) {
        for (let i = 0; i < 26; i++) {
            if (array1[i] !== array2[i]) {
                return false
            }
        }
        return true;
    }

}
console.log(checkInclusion('ab', 'saabd'))
