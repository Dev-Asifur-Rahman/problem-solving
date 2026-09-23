const temperature = [32, 35, "Hot", 30, 33, "Cold", 31, 36, 27, 34];

const temperatureFn = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let sub = 0;
  let invalidArr = [];

  for (let i of arr) {
    if (typeof i != "number") {
      invalidArr.push(i);
      continue;
    }

    min > i && (min = i);
    max < i && (max = i);
  }

  sub = max - min;

  return { min: min, max: max, sub: sub, invalidInputs: invalidArr };
};

console.log(temperatureFn(temperature));
