// we declared function inside the function for push the values inside the countOdd array

function countFn(arr) {
  let countOdd = [];

  const helper = (index) => {
    if (arr.length === index) return;

    arr[index] % 2 !== 0 && countOdd.push(arr[index]);

    return helper(index + 1);
  };
  helper(0);

  return { odd: countOdd, length: countOdd.length };
}

const arrayInput = [2, 6, 5, 8, 6, 7, 13, 17, 9];

console.log(countFn(arrayInput));
