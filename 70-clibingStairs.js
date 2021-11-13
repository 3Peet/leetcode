var climbStairs = function(n) {

    // base case 
    let dp = [1,1,2];

    // button down dynamic programing
    for(let i=3;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
};

console.log(climbStairs(3))