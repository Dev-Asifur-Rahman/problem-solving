function countChFn(str) {
  const charList = {};
  for (let ch of str) {
    ch = ch.toLowerCase();
    Object.hasOwn(charList, ch) ? charList[ch] + 1 : (charList[ch] = 1);

    // shortcut
    // charList[ch] = (charList[ch] || 0) + 1;
  }
  return charList;
}

const string = "Hello ! This is a Problem Solving String";

console.log(countChFn(string));
