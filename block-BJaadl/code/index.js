let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arrayOfWords){
  let temp = [...arrayOfWords].sort((a,b)=>{
    return a.length - b.length
  })
return temp[temp.length - 1]
}
console.log(findLongestWord(words))

// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map((word)=>word.length))

// - Create a new array that only contains word with atleast one vowel.
newArray = words.filter((word)=>{
  if(word.includes('a') ||
  word.includes('e') ||
  word.includes('i') ||
  word.includes('o') ||
  word.includes('u')){
 return true
  }else{
    return false
  }
})
console.log(newArray)

// - Find the index of the word "rhythm"
words.indexOf("rhythm")

// - Create a new array that contians words not starting with vowel.
newArray1 =  words.filter((word)=>{
  if(word.startsWith("a") ||
  word.startsWith("e") ||
  word.startsWith("i") ||
  word.startsWith("o") ||
  word.startsWith("u")){
    return false
  }else{
    return true
  }
})
console.log(newArray1)

// - Create a new array that contianse words not ending with vowel
newArray2 =  words.filter((word)=>{
  if(word.endsWith("a") ||
  word.endsWith("e") ||
  word.endsWith("i") ||
  word.endsWith("o") ||
  word.endsWith("u")){
    return false
  }else{
    return true
  }
})
console.log(newArray2)

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = (array)=>{
  let temp = array.reduce((acc , cv)=>{
    return acc + cv
  },0)
  return temp;
}
console.log(sumArray(numbers))

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipleOf3 = numbers.filter((number)=>{
  return number % 3 === 0
})
console.log(multipleOf3)

// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter((number)=> number % 2 === 0)
console.log(evenNumbers)

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter((number)=> number % 2 !== 0)
console.log(oddNumbers)

// - Create a new array that should have true for even number and false for odd numbers.
let oddEvenArray = numbers.map((num)=>{
  if (num % 2 === 0)
  return true
  else
  return false
})
console.log(oddEvenArray)

// - Sort the above number in assending order.
numbers.sort((a,b)=>a-b)

// - Does sort mutate the original array?
// Yes

// - Find the sum of the numbers in the array.
let sum = numbers.reduce((acc, cv) => acc + cv ,0)
console.log(sum)

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array){
  let sum = array.reduce((acc, cv) => acc + cv ,0)
  return sum/array.length
}
console.log(averageNumbers(numbers))

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(array){
  let sumOfLength = array.reduce((acc, cv) => acc + cv.length,0)
  return sumOfLength/array.length
}
console.log(averageWordLength(strings))
