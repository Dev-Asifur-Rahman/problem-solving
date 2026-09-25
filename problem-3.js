// normal version
function arrayMatchFn(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) return false;
    arr2.splice(currentIndex, 1);
  }
  return true;
}

// optimized
function arrayMatchFn2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const sequenceCounter = {};

  for (let i of arr1) {
    sequenceCounter[i ** 2] = (sequenceCounter[i ** 2] || 0) + 1;
  }

  for (let i of arr2) {
    if (!(i in sequenceCounter) || sequenceCounter[i] !== 1) return false;
  }
  return true;
}

const array1 = [2, 3, 4, 5];
const array2 = [4, 9, 16, 25];

// console.log(arrayMatchFn2(array1, array2));
// console.log(arrayMatchFn(array1, array2));
