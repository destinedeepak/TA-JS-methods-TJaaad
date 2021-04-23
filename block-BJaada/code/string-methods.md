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

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
  - Parameter: empty
  - Return: convert the value of string to uppercase and return (string data type)
  ```js
  let name = 'Arya Stark';
  name.toUppercase();//"ARYA STARK"
  ```
  - `toUpperCase` - convert the value of string to lowercase

3. `toLowerCase`
  - Parameter: empty
  - Return: convert the value of string to lowercase and return
  ```js
  let name = 'Arya Stark';
  name.toLowercase();//"arya stark"
  ```
  - `toLowerCase` - convert the value of string to uppercase
4. `trim`
  - Parameter: empty
  - Return: return a trimmed string (strin data type)
  ```js
  let name = 'Arya Stark   ';
  let user="   deepak"
  let bio="     learning full stack development   "
  name.trim();//"Arya Stark"
  bio.trim();// "learning full stack development"
  user.trim();// "deepak"
  ```
  - `trim` - removes whitespace from both ends of a string

5. `trimEnd`
  - Parameter: empty
  - Return: return a trimmed string (strin data type)
  ```js
  let name = 'Arya Stark   ';
  let user="   deepak"
  let bio="     learning full stack development   "
  name.trimEnd();//"Arya Stark"
  bio.trimEnd();// "   learning full stack development"
  user.trimEnd();// "   deepak"
  ```
  - `trimEnd` - removes whitespace from end of the a string

  
6. `trimStart`

  - Parameter: empty
  - Return: return a trimmed string (strin data type)

  ```js
  let name = 'Arya Stark   ';
  let user="   deepak"
  let bio="     learning full stack development   "
  name.trimStart();//"Arya Stark   "
  user.trimStart();// "deepak"
  bio.trimStart();// "learning full stack development   "
  ```

  - `trimStart` - removes whitespace from start of the a string
  
7. `concat`
  - Parameter: One or more strings to concatenate to str

  - Return: return a strinig

  ```js
  let name = 'Arya';
  let user="Deepak"
  let bio="learning full stack development"

  name.concat("Stark"); // "Arya Stark"
  user.concat("Kumar","Singh");// "Deepak Kumar Singh"
  bio.concat(", ","is cool");// "learning full stack development, is cool"
  ```

  - `concat` - concatenates the string arguments to the calling string


8. `endsWith`
  - Parameter: string to check if its exists on end or not and a optional length 

  - Return: true or false (boolean data type)

  ```js
  let name = 'Arya Stark';
  let user="Deepak"
  let bio="learning full stack development"

  name.endsWith("Stark",10); // true
  user.endsWith("Sing");// false
  bio.endsWith("cool");// true
  ```
  - `endsWith` - determines whether a string ends with the characters of a specified string


9. `includes`

  - syntax:  `includes(searchString[, position])`

  - Parameter: A string to be searched for within str and The position within the string at which to begin searching for searchString. (Defaults to 0.)

  - Return: true or false (boolean data type)

  ```js
  let name = 'Arya Stark';
  let user="Deepak"
  let bio="learning full stack development"

  name.includes("Stark"); // true
  bio.includes("stack"); //false
  bio.includes("stack",14) //true
  bio.includes("stack",15) //true
  ```
  - includes : determine whether one string may be found within another string


10. `indexOf`
  - syntax:  `indexOf(searchString, position)`

  - Parameter: a string and position in number

  - Return: return a number

  ```js
  let name = 'Arya Stark';
  let user="Deepak"
  let bio="learning full stack development"

  name.indexOf("A"); // 0
  bio.indexOf("Stack"); //14
  bio.indexOf("adaf",14) //-1
  ```
  - indexOf :  returns the index of the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found

11. `lastIndexOf`
  - syntax:  `lastIndexOf(searchString, )`

  - Parameter: a string and position

  - Return: return a number

  ```js
  let name = 'Arya Stark';
  let user="Deepak"
  let bio="learning full stack development"

  bio.lastIndexOf(`a`); // 16
  bio.lastIndexOf(`a`, 15) // 2
  bio.indexOf("adaf",14) //-1
  ```
  - lastIndexOf :  returns the index of the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

12. `padEnd`
  - syntax:  `padEnd(targetLength, padString)`

  - Parameter: a target length in number data type and a string to pad

  - Return: return the padded string

  ```js
  let name = 'Arya Stark';
  let user="Deepak"
  let bio="learning full stack development"

  name.padEnd(30," stark ") //"Arya Stark stark  stark  stark"
  user.padEnd(10)// "Deepak    "
  user.padEnd(10," ") // "Deepak    "
  ```
  - padEnd: pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13. `padStart`
- syntax:  `padStart(targetLength, padString)`

  - Parameter: a target length in number data type and a string to pad

  - Return: return the padded string

  ```js
  let name = 'Arya Stark';
  let user="Deepak"
  let bio="learning full stack development"

  name.padStart(30," stark ") //"Arya Stark stark  stark  stark"
  user.padStart(10)// "    Deepak"
  user.padStart(10," ") // "    Deepak"
  ```
  - padStart: pads the current string with  given string (rmultiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

14. `repeat`
  - syntax:  `str.repeat(count)`

  - Parameter: a count as number

  - Return: return the repeated string

  ```js
  let user="Deepak"

  user.repeat(2); //"DeepakDeepak"
  user.repeat(2.5); //"DeepakDeepak"
  user.repeat(1/2);//error
  ```
  - repeat: method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`
  - syntax:  `str.repeat(count)`

  - Parameter: a count as number

  - Return: return the repeated string

  ```js
  let user="Deepak"

  user.repeat(2); //"DeepakDeepak"
  user.repeat(2.5); //"DeepakDeepak"
  user.repeat(1/2);//error
  ```
  - repeat: method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
16. `slice`
17. `split`
18. `substring`
