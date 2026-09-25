// get the sum using recursion

function sumFn(n) {
  return n === 1 ? 1 : n + sumFn(n - 1);
}


const input = 10
console.log(sumFn(input))
