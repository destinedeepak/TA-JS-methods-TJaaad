// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101))

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9))

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "))

// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentence")

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "))
// - Remove the first word in the array (strings)
console.log([...strings].shift())

// - Find all the words that contain 'is' use string method 'includes'


// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((number)=>{return number % 3 === 0}))

// -  Sort Array from smallest to largest
let sortedNumbers = [...numbers].sort((num1,num2)=>num1-num2)
console.log(sortedNumbers)

// - Remove the last word in strings
console.log([...strings].pop());

// - Find largest number in numbers
console.log(sortedNumbers[sortedNumbers.length-1])

// - Find longest string in strings
let final=" ";
console.log(strings)
strings.forEach(element => {
  if(element.length > final.length) 
  final = element
});
console.log(final)

// - Find all the even numbers
let evenNumbers = numbers.filter((number)=>number % 2 === 0)
console.log(evenNumbers)

// - Find all the odd numbers
let oddNumbers = numbers.filter((number)=>number % 2 !== 0)
console.log(oddNumbers)

// - Place a new word at the start of the array use (unshift)
numbers.unshift(5)

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(4,8))

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2,4))

// - Replace 12 & 18 with 1221 and 1881

console.log(numbers.map(num=>{
  if(num === 12){
    return 1221
  }else if(num === 18){
    return 1881
  }else{
    return num
  }
}))
// numbers[numbers.indexOf(12)] = 1221
// numbers[numbers.indexOf(18)] = 1881

// - Replace words in strings array with the length of the word
stringLengthArray = strings.map((element)=>{
  return element.length
})
console.log(stringLengthArray)

// - Find the sum of the length of words using above question
let sumOfLength=0;
stringLengthArray.forEach(length=> sumOfLength+= length)
console.log(sumOfLength)

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];

// - Find all customers whose firstname starts with 'J'
console.log(customers.filter((customer)=>customer.firstname.startsWith('J')))

// - Create new array with only first name
let newArray=[]
customers.forEach((customer=>{
  newArray.push(customer.firstname)
}))
console.log(newArray)

// - Create new array with all the full names (ex: "Joe Blogs")
let newArray1=[]
customers.forEach((customer=>{
  newArray1.push(`${customer.firstname} ${customer.lastname}`)
}))
console.log(newArray1)
// - Sort the array created above alphabetically
newArray1.sort()

// - Create a new array that contains only user who has at least one vowel in the firstname.
let  newArray3 = customers.filter((customer)=>{
  return customer.firstname.includes("a" || "e" || "i" || "o" || "u" )
}) 
console.log(newArray3)
