// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// Declare a function that takes a number as an argument
const divisibleBy3 = (num) => {
  // Check if number % 3 === 0 using if
  if (num % 3 === 0) {
    // Return string "number is divisble by three"
    return `${num} is divisible by three`
  } // Check if number % 3 === 0 using else if
    else if (num % 3 !== 0) {
    // Return string "number is not divisble by three"
    return `${num} is not divisible by three`
  } // Return enter a number if not a number
    else {
    return "Please enter a number"
  }
}

//Check function passing in variables above
console.log(divisibleBy3(num1))
console.log(divisibleBy3(num2))
console.log(divisibleBy3(num3))


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// Declare function takes in an array of strings as an argument
const capitalizeWord = (arr) => {
  // Map through the array
  return capitalizedArray = arr.map(word => {
    // Return the substring of 0 index letter and apply toUpperCase then add indexes 1-on after
    return word.substring(0,1).toUpperCase() + word.substring(1)
  })
}

//Check function passing in variable above
console.log(capitalizeWord(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

// Declare a function that takes in an array with different data types
const orderedNumbers = (arr) => {
  // Filter through array and only return values with a typeof = "number"
  let numberArray = arr.filter( value => typeof(value) === "number")
  // Return the number array sorted numerically using the sort method
  return numberArray.sort((a,b)=>a-b)
}

//Check function passing in variable above
console.log(orderedNumbers(mixedDataArray))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

// Declare a function that takes in a string as an arg
const firstVowelIndex = (str) => {
  // Convert string to an array using split
  let strArray = str.split("")
  // Declare local variable of all the vowels in an array
  let vowels = ["a", "e", "i", "o", "u"]
  // Filter through array
  let vowelArray = strArray.filter(letter => {
    // Return only vowels into a new array
    return vowels.includes(letter)
  })
  // Return the index of the first value from the vowelArray only if the index is >= 0
  if (strArray.indexOf(vowelArray[0]) >= 0) return strArray.indexOf(vowelArray[0])
  // Return statement if the string contained no vowels
  else return `${str} doesn't contain a vowel`
}

//Check function passing in variables above
console.log(firstVowelIndex(vowelTester1))
console.log(firstVowelIndex(vowelTester2))


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

// Declare a function that takes in three arguments (two nums and one math operation)
const calculator = (num1, operation, num2) => {
  let operators = ["+", "-", "*", "/"]
  // Check if the first arg isn't a num, second isn't an operator, and/or third isn't a num
  if (!operators.includes(operation) || typeof(num1) !== "number" || typeof(num2) !== "number") {
    // Return message to enter values correctly
    return "Please enter number, mathematical operation, then number"
  } // Check if the operator is divide AND second number is 0
    else if (operation === "/" && num2 === 0) {
    return "Can't divide by 0!"
  } // If operator is + add the numbers together
    else if (operation === "+") {
    return num1 + num2
  } // If operator is - subtract the numbers together
    else if (operation === "-") {
    return num1 - num2
  } // If operator is * multiply the numbers together
    else if (operation === "*") {
    return num1 * num2
  } // If operator is / divide the numbers together
    else if (operation === "/") {
    return num1 / num2
  } else "Error"
 }

// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
