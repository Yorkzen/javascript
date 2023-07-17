const userName = "Brad";

function getUserNameLength(name) {
  const result = name.length;
  return result;
}

console.log(getUserNameLength(userName) >= 4);
// ^______________ Should log true

const isString = function (data) {
  return typeof data === "string";
};

console.log(isString("Hello")); // true
console.log(isString(3)); // false
console.log(isString(undefined)); // false
console.log(isString("")); // true
console.log(isString("John" + "Doe")); // true
