function oddNumbers(start, end) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0
  ) {
    return "Invalid parameters";
  }

  let result = "";
  let separator = "";

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result += separator + i;
      separator = ",";
    }
  }

  return result;
}
console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

function charCount(word, character) {
  if (typeof character !== "string" || character.length !== 1) {
    return "Invalid character parameter";
  }

  const lowercaseWord = word.toLowerCase();
  const lowercaseChar = character.toLowerCase();
  let count = 0;

  for (let i = 0; i < lowercaseWord.length; i++) {
    if (lowercaseWord[i] === lowercaseChar) {
      count++;
    }
  }

  return count;
}
console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
