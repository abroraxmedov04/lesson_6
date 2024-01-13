// String methods in js

// Constructor String
// let str = String("Hello world") // returns string object
// console.log( typeof str);

// property
// length
// let str = "hello world"; // return the length of the word not the index!
// console.log(str.length);

// Methods
// at()
// let str = "hello world"; // returns the word at index or character
// console.log(str.charAt(6)); //w

// charAt()
// let str = "hello world"; //takes only position in zero based index and returns a character like at method
// console.log(str.charAt(4));

// charCodeAt()
// let str = ""; //(index: number): number => returns NaN if no value assignet or value from unicode
// console.log(str.charCodeAt());

// codePointAt()
// let str = "hello"; //takes a number and returns number || undefined "" indexed! UNICODE
// console.log(str.codePointAt(0));

// concat
// let str1 = "hello";
// let str2 = " World";
// console.log(str1.concat()); // works like caocatanation with + return a string and or array of string

// endsWith && startWith // returns a boolearn true or false && takes a value str and position from and to index!
// let str = "Abror";
// console.log(str.endsWith("r", 3));

// fromCharCode() && fromCharCodePoint() // takes a number from UNICODE returns string or " " => nth
// let str = String.fromCodePoint()
// console.log(str); // h

// trim(), trimEnd(), trimStart() => removes white spaces!

// valueOF()
// let str = "hello bro"  // Returns the primitive value of the specified object.
// console.log( typeof str.valueOf())

// includes()
// let str = "abror"; // searchString, position return boolean or undefined
// console.log(str.includes("b", 0));

// indexOf(SearchString) && lastIndexOf(SearchString) => return the index of value number || -1 and also it has position too !
// console.log(str.indexOf());


// slice && substring => indexStart and IndexEnd => return a new string 
// let textarea = "dnasdklfjaflk abror sdnafbsdfabsnf shoha dsdfnbdslgf";
// let input1 = textarea.indexOf("abror");
// let input2 = textarea.indexOf("shoha");
// let res = textarea.substring(input1 + "abror".length, input2);

// console.log( res);





