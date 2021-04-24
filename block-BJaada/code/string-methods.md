   - 

   - syntax :
   - Parameter: accepts a function
   - Return: undefined
   - example:

   ```js
     let colors =['red','blue','green','aqua','yellow','blue']
     let allColors = ""

   ```
   -  does not mutate original array
Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `concat`
   - `concat` accepts n number of arrays and concat them 

   - syntax : concat(value0, value1, ... , valueN)
   - Parameter: n number of arrays
   - Return: A new array
     ```js
     let colors =['red','blue','green','aqua','yellow']
     let colors1=['black','tomato']
     let cars = ["Saab", "Volvo", "BMW"];

      let newArray = colors.concat(colors1); // ["red", "blue", "green", "aqua", "yellow", "black", "tomato"]
      let newArray2 = colors.concat(colors1 , cars)// ["red", "blue", "green", "aqua", "yellow", "black", "tomato", "Saab", "Volvo", "BMW"]
      let newArray3 = colors.concat() //["red", "blue", "green", "aqua", "yellow"] return same array

     ```
   - it does not mutate the original array

2. `join`
   - join() accepts a seperator and join all the elements with seperator in between them. Comma(",") will became a seperator if we ommit the seperator and in case of ("") empty string elements will join without seperator.

   - syntax: join(seperator[optional])
   - Parameter: accepts a string or it can be ommited
   - Return: A string with all array elements joined

   - example:
   ```js
     let colors =['red','blue','green','aqua','yellow']
     let colors1=['black','tomato']
     let cars=['Saab','Volvo','BMW'];

     colors.join(); //"red,blue,green,aqua,yellow"
     colors.join(""); //"redbluegreenaquayellow"
     colors.join("red ") //"redred bluered greenred aquared yellow"
   ```
   - it does not mutate the original array

 3. `flat`
   -  concat all the sub-array into a new array recursively up to the specified depth 

   - syntax: flat( depth[optional])
   - Parameter: accepts a number which is defaults to 1, In case you dont know the depth pass infinity
   - Return: a new array
   - example:

   ```js
   let arr1 = [1, 2, [3, 4]];
   let arr2 = [1, 2, [3, 4,[1,2,4]]];
   
   arr1.flat();// [1, 2, 3, 4]
   arr2.flat();// [1, 2, 3, 4, [1,2,4]]
   arr2.flat(2); // [1, 2, 3, 4, 1, 2, 4]
   arr2.flat(infinity); // [1, 2, 3, 4, 1, 2, 4]
   ```
   - it does not mutate the original array

 4. `push`
   - add one or more element to the last index of array and returns the new length of array

   - syntax: push(element0, element1, ... , elementN)
   - Parameter: accepts one or more elements can be of any data type
   - Return: length of new array in number
   - example:

   ```js
     let colors =['red','blue','green','aqua','yellow']
     let colors1=['black','tomato']

     colors.push("white"); //  ["red", "blue", "green", "aqua", "yellow", "white"]
     //returns 6 
   ```
   - mutate the original array

  5. `indexOf`
    - returns the index of first occurance of specified element and if elements does not occur it return -1

   - syntax: indexOf(searchElement, fromIndex[optional])
   - Parameter: number, string, boolean, array, null, undefined, object and function etc
   - Return: index in number
   - example:

   ```js
    let colors =['red','blue','green','aqua','yellow','blue']
    let colors1=['black','tomato']
    
    colors.indexOf("blue") //1
    colors.indexOf("aafa") //-1
    colors.indexOf("blue",4) //5
   ```
   - does not mutate original array

   6.`lastIndexOf()`
   -  return the index of last occurance of specified element and if elements does not occur it return -1

   - syntax: lastIndexOf(searchElement, fromIndex[optional])
   - Parameter: number, string, boolean, array, null, undefined, object and function etc
   - Return: number
   - example:

   ```js
   let colors =['red','blue','green','aqua','yellow','blue']
    let colors1=['black','tomato']
    
    colors.lastIndexOf("blue") //5
    colors.lastIndexOf("aafa") //-1
    colors.lastIndexOf("blue",4) //1

   ```
   - does not mutate original array

   7. `includes`
   - checks if an arrays contains a specified value and return true or false
   
   - syntax: includes(valueToFind, fromIndex[optional])
   - Parameter: number, string, boolean, array, null, undefined, object and function etc for valueToFInd and a fromIndex.
   - Return: bolean data type
   - example: 

   ```js
    let colors =['red','blue','green','aqua','yellow','blue']
    let colors1=['black','tomato']

    colors.includes("red")// true
    colors.includes("blue", 4) // true
    colors.includes("white", 4) // false
   ```
   - does not mutate orginal value

   8. `reverse`
    - reverse an array, the first element becomes last and last becomes first

   - syntax: reverse()
   - Parameter: nothing
   - Return: an array, an object data type
   - example:

   ```js
    let colors =['red','blue','green','aqua','yellow','blue']
    let colors1=['black','tomato']

    colors.reverse() // ["blue", "yellow", "aqua", "green", "blue", "red"]
    colors1.reverse() //["tomato", "black"]

   ```
   - mutate original array

   9. `forEach`
   
   - accepts a callback function and executes the function once for each array elemnet 

   - syntax: array.forEach(callback function)
   - Parameter: accepts a function
   - Return: undefined
   - example:

   ```js
     let colors =['red','blue','green','aqua','yellow','blue']
     let allColors = ""
     colors.forEach((color)=> allColors += color) // undefined
     allColors; //"redbluegreenaquayellowblue"

   ```
   -  does not mutate original array

   10. `map`

   - accept a callback function and calls the function for each elements and returns whatever get return from the function in a new array
    
   - syntax : array.forEach(callback function)
   - Parameter: accepts a function
   - Return: a new array
   - example:

   ```js
     let colors =['red','blue','green','aqua','yellow','blue']
     colors.map((colors)=>{
       return colors+"test"
       })//["redtest", "bluetest", "greentest", "aquatest", "yellowtest", "bluetest"]

   ```
   -  does not mutate original array

   11. `filter`
   -  accepts a callback function for each elements, if the callback function return true the value will passed and stored to the newly created array

   - syntax : filter(callbackFn)
   - Parameter: accepts a function
   - Return: a new array
   - example:

   ```js
     let number = [1,2,3,4,5,6,7,8,9,10]
     number.filter((num) => num % 2 ===0 ) //  [2, 4, 6, 8, 10]

     number.filter((num) => num % 2 !== 0 ) //[1, 3, 5, 7, 9]

   ```
   -  does not mutate original array   

   12. `find`


