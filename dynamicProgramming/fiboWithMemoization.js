//Create a fibonacci function that uses memoization
//Time complexity O(n)
//Space complexity O(n)

let fibonacci = (n, memo = {}) => {
  if (n <= 1) return n;

  if (memo[n]) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}


console.log(fibonacci(3));
