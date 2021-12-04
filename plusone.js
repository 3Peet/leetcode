/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let curr = digits.length - 1;
    console.log(curr)
    while (digits[curr] === 9) {
        digits[curr] = 0;
        if (curr === 0) {
            let res = new Array(digits.length + 1).fill(0);
            res[0] = 1;
            console.log(res);
            return res
        }
        curr--;
    }


    digits[curr] = digits[curr] + 1;

    console.log(digits)
    return digits
};

plusOne([9])