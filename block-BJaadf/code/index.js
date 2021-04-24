let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push("Papaya")

// Remove the last element from fruits array
fruits.pop();

// Log the current length of fruits array
console.log(fruits.length)

// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
console.log(fruits)

// Log the element on index 0 and 1
console.log(fruits[0])

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift()

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift('Guava')

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift('Dragon Fruit')

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
let isTrue = fruits.indexOf('Dragon Fruit') === 0 && fruits.indexOf('Guava') === 1
console.log(isTrue)

// Update the value of index 1 to `Pears`
fruits.splice(0,1,"Pears")

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0,"Kiwi","Lemon")

// Remove (slice) all the element from index 5
fruits.splice(5)

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits =  ['Berries', 'Melons']

// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits = fruits.concat(moreFruits)

// Log the name of all fruit in console
fruits.forEach((element)=>console.log(element))

// Convert each fruit name to lowercase and log it
fruits.map((element)=>element.toLowerCase())

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowerFruits = fruits.map((element)=>element.toLowerCase())

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = fruits.map((element)=>element.toUpperCase())

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
let temp = numbers.flat(Infinity);

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

// Use forEach to log all the elements of numberThree array

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

// Find the index of 10 in numbersThree array

// Reverse the values of numbersThree array

// Reverse the values of numbersTwo array

// Join all fruits with '-', convert to uppercase and log it

// Join all fruits with '&', convert to lowercase and log it
