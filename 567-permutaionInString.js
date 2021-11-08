// MY VERSIONS
// var checkInclusion = function (s1, s2) {
//     let i = 0;
//     let j = 0;
//     let arr = [];
//     let obj1 = new Map();
    
//     for(let k=0;k<s1.length;k++){
//         if(s1[k].charCodeAt(0) in obj1){
//             obj1[s1[k].charCodeAt(0)]++;
//         } else {
//             obj1[s1[k].charCodeAt(0)] = 1;
//         }
//     }
//     while (i < s2.length) {
//         count = 0;
//         let obj2 = new Map();
//         // slide window
//         if (i - j >= s1.length) {
//             //remove
//             arr.shift();
//             j++;
//         }
//         arr.push(s2[i])
//         i++;
//         for(let k=0;k<arr.length;k++){
//             if(arr[k].charCodeAt(0) in obj2){
//                 obj2[arr[k].charCodeAt(0)]++;
//             } else {
//                 obj2[arr[k].charCodeAt(0)] = 1;
//             }
//         }
//         // console.log(obj2)
//         let allGood = 0;

//         for(prop in obj1) {
//             if (obj1[prop] !== obj2[prop]) {
//                 break
//             }
//             allGood += obj1[prop]
//         }
//         // console.log(allGood)
//         if (allGood === s1.length) {
//             return true
//         }
//     }
//     return false;
// }
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false
    }
    
    const s1map = {}
    for (let i = 0; i < s1.length; i++) {
        let c = s1.charCodeAt(i)
        s1map[c] = s1map[c] ? s1map[c] + 1 : 1
    }
    
    for (let i = 0; i <= s2.length - s1.length; i++) {
        const s2map = {}

        for (let j = 0; j < s1.length; j++) {
            let c = s2.charCodeAt(i + j)
            s2map[c] = s2map[c] ? s2map[c] + 1 : 1
        }
        
        let allGood = 0
        for (prop in s1map) {
            if (s1map[prop] !== s2map[prop]) {
                break
            }
            allGood += s1map[prop]
        }
        
        if (allGood === s1.length) {
            return true
        }
    }
    
    return false
};
console.log(checkInclusion('ab','ergfegab'))
