let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((person)=>person.name)

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((person)=>person.grade)

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((person)=>person.sex)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
persons.forEach((person)=>{
  if(person.name.startsWith('J') ||
  person.name.startsWith('P')){
    console.log(person.name)
  }
}) 

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
persons.forEach((person)=> person.name.startsWith('A') || person.name.startsWith('C') ? console.log(person.name) : false)

// Log all the filtered male ('M') in persons array
console.log(persons.filter((person)=>person.sex === 'M' ? person : false))

// Log all the filtered female ('F') in persons array
console.log(persons.filter((person)=>person.sex === 'F' ? person : false))

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person)=>
person.sex === 'F' && person.name.startsWith('C') || person.sex === 'F' && person.name.startsWith('J') ? person : false))

// Log all the even numbers from peopleGrade array
console.log(`all the even no:`)
peopleGrade.forEach((grade)=>{
  grade % 2 === 0 ? console.log(grade) : false
})

// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((person)=>{
  if(person.name.startsWith('J')){
    return person.name
  }
}))

// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((person)=>{
  if(person.name.startsWith('P')){
    return person.name
  }
}))

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find((person)=>{
  if(person.name.startsWith('P') && person.grade > 10){
    return person.name
  }
}))

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person)=>person.sex === 'F')

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person)=>person.sex === 'M')

// Find the sum of all grades and store in gradeTotal
let gradeTotal =peopleGrade.reduce((acc, cv)=> acc + cv ,0)

// Find the average grade
gradeTotal/peopleGrade.length

// Find the average grade of male
let averageGradeMale = malePersons.reduce((acc, cv)=>{
  return acc + cv.grade
},0)/malePersons.length


// Find the average grade of female
let averageGradefemale = femalePersons.reduce((acc, cv)=>{
  return acc + cv.grade
},0)/femalePersons.length

// Find the highest grade
let highestGrade=0;
peopleGrade.forEach((grade)=>{
  if(highestGrade<grade)
    highestGrade = grade
}) 

// Find the highest grade in male
let lowestFemaleGrade=Infinity;
malePersons.forEach((person)=>{
  if(lowestFemaleGrade > person.grade)
  lowestFemaleGrade = person.grade
}) 

// Find the highest grade in female
let highestMaleGrade = 0;
malePersons.forEach((person)=>{
  if(highestMaleGrade < person.grade)
  highestMaleGrade = person.grade
}) 

// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGrade1 = 0;
persons.forEach((person)=>{
  if(highestGrade1 < person.grade && person.name.startsWith('J') || person.name.startsWith('P'))
  highestGrade1 = person.grade
}) 

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b)=>a-b)

// Sort the peopleGrade in descending order
peopleGrade.sort((a,b)=>b-a)

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a,b)=>a-b)) 

// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log(peopleName.sort())
