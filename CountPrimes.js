/**
 * @param {number} n
 * @return {number}
 */

const isPrime = (num) => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++)
		if (num % i === 0) return false;
	return num > 1;
};
var countPrimes = function (n) {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		if (isPrime(i)) count++;
	}
};
console.log(countPrimes(5000000));
