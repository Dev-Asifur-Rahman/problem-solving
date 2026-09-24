function arrayMatchFn(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) return false;
    arr2.splice(currentIndex, 1);
  }
  return true;
}

const array1 = [2, 3, 4, 5];
const array2 = [4, 9, 16, 25];

console.log(arrayMatchFn(array1, array2));
