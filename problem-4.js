// we declared the helper function inside the function for push the values inside the countOdd array

function countFn(arr) {
  let countOdd = [];

  const helper = (input) => {
    if (input.length === 0) return;

    (input[0] % 2 !== 0) && countOdd.push(input[0]);

    return helper(input.slice(1));
  };
  helper(arr);

  return { odd: countOdd, length: countOdd.length };
}

const arrayInput = [2, 6, 5, 8, 6, 7, 13, 17, 9];

console.log(countFn(arrayInput));
