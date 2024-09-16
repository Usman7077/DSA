// 1-power
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow().
// Do not worry about negative bases and exponents.

function power(base, exp) {
  if (exp === 1) return base;
  return base * power(base, exp - 1);
}

// 2-factorial
// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
// factorial zero (0!) is always 1.

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// 3-productOfArray
// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + productOfArray(arr.slice(1));
}

// 4-recursiveRange
// Write a function called recursiveRange which accepts a number
// and adds up all the numbers from 0 to the number passed to the function.

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

// 5-fib
// Write a recursive function called fib which accepts a number
// and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, 13, 21...
// which starts with 1 and 1, and where every number thereafter
// is equal to the sum of the previous two numbers.

// function fib(n) {
//   // let sum = 1;
//   // let prevVal = 1;
//   // let curVal = 1;
//   // for (let index = 1; index < n - 1; index++) {
//   //   sum = prevVal + curVal;
//   //   prevVal = curVal;
//   //   curVal = sum;
//   // }
//   // return sum;

//   let count = 2;
//   let prevVal = 1;
//   let currVal = 1;
//   let sum = 0;
//   function helper(currVal) {
//     count++;
//     sum = currVal + prevVal;
//     prevVal = currVal;
//     currVal = sum;
//     console.log(count, currVal, prevVal);

//     if (n == count) return currVal;
//     return helper(currVal);
//   }
//   return helper(currVal);
// }

function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}

/*************** Bonus Challenging  **************/

// 1-reverse
// Write a recursive function called reverse
// which accepts a string and returns a new string in reverse.

function reverseString(str) {
  if (str.length == 0) return "";
  return (
    str.slice(str.length - 1) + reverseString(str.slice(0, str.length - 1))
  );
}

//Reverse Solution
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// 2-isPalindrome
// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str) {
  // let upto = Math.round((str.length - 1) / 2);
  // console.log(upto);
  // for (let index = 0; index < upto; index++) {
  //   if (str.charAt(index) !== str.charAt(str.length - 1 - index)) return false;
  // }
  // return true;

  if (str.length < 2) return true;
  return (
    str.charAt(0) === str.charAt(str.length - 1) &&
    isPalindrome(str.slice(1, str.length - 1))
  );
}

//isPalindrome Solution
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// 3-someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true
// when passed to the callback. Otherwise it returns false.

function someRecursive(arr, checkTrue) {
  return checkTrue(arr);
}

function checkTrue(arr) {
  console.log(arr, arr.length);
  if (arr.length === 0) return false;
  return !!arr[0] || checkTrue(arr.slice(1));
}

//someRecursive Solution
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

// 4-flatten
// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.
const flattenarr = [];

function flatten(arrs) {
  console.log(flattenarr);
  function helper(arrs) {
    if (arrs.length === 0) return flattenarr;
    arrs[0].forEach(function (element) {
      flattenarr.push(element);
    });
    return helper(arrs.slice(1));
  }

  return helper(arrs);
}

//flatten Solution
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// 5-capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

let caparr = [];
function capitalizeFirst(arr) {
  if (arr.length === 0) return caparr;
  caparr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
  // console.log(arr[0].charAt(0).toUpperCase(), caparr);
  return capitalizeFirst(arr.slice(1));
}

//capitalizeFirst Solution
function capitalizeFirstSol(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirstSol(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

// 6-nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let sum = 0;
  for (let n in obj) {
    console.log(obj[n], typeof obj[n], obj[n] % 2 === 0);
    if (typeof obj[n] === "number" && obj[n] % 2 === 0) {
      sum += obj[n];
    }
    if (typeof obj[n] === "object") {
      sum += nestedEvenSum(obj[n]);
    }
  }
  return sum;
}

//nestedEvenSum Solution
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// 7-capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

let arrCap = [];
function capitalizeWords(arr) {
  arrCap.push(arr[0].toUpperCase());
  if (arr.length === 1) return arrCap;
  return capitalizeWords(arr.slice(1));
}

// capitalizeWords Solution
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

// 8-stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
  for (let n in obj) {
    console.log(obj[n], typeof obj[n], obj[n] % 2 === 0);
    if (typeof obj[n] === "number") {
      obj[n] = obj[n].toString();
    }
    if (typeof obj[n] === "object") {
      stringifyNumbers(obj[n]);
    }
  }
  return obj;
}

//stringifyNumbers Solution
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// 9-collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

function collectStrings(obj) {
  let arr = [];
  for (let n in obj) {
    if (typeof obj[n] === "string") {
      arr.push(obj[n]);
    }
    if (typeof obj[n] === "object") {
      arr = [...arr, ...collectStrings(obj[n])];
    }
  }
  return arr;
}
