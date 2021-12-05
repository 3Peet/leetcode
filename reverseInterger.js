/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    x >= 0 ?
        x = Number(String(x).split('').reverse().join(''))
        :
        x = Number(String(x).split('-')[1].split('').reverse().join('')) * -1

    if (x > 2147483647 || x < -2147483648) return 0;
    return x
};

reverse(1534236469)