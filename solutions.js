

/**
 * Two sums solution
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 *     Input: nums = [2,7,11,15], target = 9
 *     Output: [0,1]
 *     Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

const twoSumNums = [2,7,11,15];
const twoSumTarget = 9;

var twoSum = function(nums, target) {
  const cache = new Map();

  for (let i = 0;i < nums.length; i++){
      let difference = target - nums[i];        
      if (cache.has(difference)){            
          return [cache.get(difference),i];
      }
      cache.set(nums[i],i);
  }
};

let twoSumSolution = twoSum(twoSumNums,twoSumTarget);
console.log(twoSumSolution);


/**
 * 9. Palindrome Number
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Example 1:
 *  Input: x = 121
 *  Output: true
 *  Explanation: 121 reads as 121 from left to right and from right to left.
 * 
 * Example 2:
 *  Input: x = -121
 *  Output: false
 *  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 *  Input: x = 10
 *  Output: false
 *  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 * 
 */

const isPalidromeNumber = 123421;
const isNumberPalidrome = (x) => {
  console.log(`Is ${x} a palidrome number?`);  
  if (x < 0 || ((x !== 0) && (x % 10) === 0)) return false;
  let mid = 0;
  while (x > mid) {
    mid = (mid * 10) + (x % 10);
    x = Math.floor(x / 10);
  }
  if ((x === mid) || x === Math.floor(mid / 10)) return true;    
  return false;
}
let isPalidromeSolution = isNumberPalidrome(isPalidromeNumber);
console.log(`${isPalidromeSolution ? "The number " + isPalidromeNumber  + " is a palidrome" : "The number " + isPalidromeNumber  + " is not a palidrome"}`);


/**
 *  13. Roman numberal to integer
 *  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
    For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

    Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
    Given a roman numeral, convert it to an integer.

    Example 1:
      Input: s = "III"
      Output: 3
      Explanation: III = 3.

    Example 2:
      Input: s = "LVIII"
      Output: 58
      Explanation: L = 50, V= 5, III = 3.

    Example 3:
      Input: s = "MCMXCIV"
      Output: 1994
      Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
    

    Constraints:
      1 <= s.length <= 15
      s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
      It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * 
 */

const romanNumeral = "MCMXIV";

// Solution 1
const romanNumeralToInteger1 = (s) => {
  const numeralValues = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  debugger;
  let total = 0;
  for (let i = 0;i < s.length -1; i++){
    if (numeralValues[s[i]] < numeralValues[s[i+1]]){
      total = total - numeralValues[s[i]];
    }else{
      total = total + numeralValues[s[i]]
    }    
  }
  return total + numeralValues[s[s.length-1]];
}

// Solution 2
const romanNumeralToInteger2 = (s) => {
  const numeralValues = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  let total = 0;
  s = s.replace("IV","IIII");
  s = s.replace("IX","VIIII");
  s = s.replace("XL","XXXX");
  s = s.replace("XC","LXXXX");
  s = s.replace("CD","CCCC");
  s = s.replace("CM","DCCCC");
  
  for (let i = 0; i < s.length; i++) {
    total = total + numeralValues[s[i]];    
  }
  return total;
}

let romanNumeralToIntegerSolution1 = romanNumeralToInteger1(romanNumeral);
let romanNumeralToIntegerSolution2 = romanNumeralToInteger2(romanNumeral);
console.log(`Solution 1: Roman numeral ${romanNumeral} is equal to ${romanNumeralToIntegerSolution1}`)
console.log(`Solution 2: Roman numeral ${romanNumeral} is equal to ${romanNumeralToIntegerSolution2}`)