function zipStrings(str1, str2) {
  const minLength = Math.min(str1.length, str2.length);
  let result = "";

  for (let i = 0; i < minLength; i++) {
    result += str1[i] + str2[i];
  }

  // Add the remaining characters from the longer string (if any)
  if (str1.length > minLength) {
    result += str1.slice(minLength);
  } else if (str2.length > minLength) {
    result += str2.slice(minLength);
  }

  return result;
}

// Test Examples
console.log(zipStrings("abc", "123")); // "a1b2c3"
console.log(zipStrings("abc", "1")); // "a1bc"
console.log(zipStrings("a", "123")); // "a123"
console.log(zipStrings("", "123")); // "123"
console.log(zipStrings("abc", "")); // "abc"
