// this is an in-line comment.

/*This is a multi-line comment*/

var myName;
// sorting value with assignment oprator
var a;
a = 7;
//assigning the variable value with one another 
var a;
a = 7;
var b;
b=a;

//assigning variable with the assignment operator
var a = 9;
//declare string variable
var myFirstName ="abhishek";
var myLastName="singh";

// declare string variable
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// understanding case sensitivity in variable
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// explore difference btw let and var

let catName = "Oliver";
let catSound = "Meow!";

//declare a read only variable with const keyword
const FCC = "freeCodeCamp";
let fact = "is cool!"; 
const FACT  = "is awesome!";
console.log(FCC, fact); 

//add two number with js 
const sum = 10 + 10;
// subtract one number with another 
const difference = 45 - 33;
// multiply the number
const product = 8 * 10;
// divide one number with another number
const quotient = 66 / 33;

// increment the variable
let myVar = 87;
myVar++;
// decrement the number in js 
let myVar = 11;
myVar--;

// creatimg decimal value in js 
const ourDecimal = 5.7;
const myDecimal = 5.7;
// multiply two decimal in js
const product = 2.0 * 2.5;
// divide decimal number with decimal number
const quotient = 4.4 / 2.0;

// find remainder in js
var remainder =0;
remainder = 11%3;

//compound assignment with argumented addition
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9 ;
c += 7;

//compound assignment with argumented subtraction

let a = 11;
let b = 9;
let c = 3;

a -=  6;
b -=  15;
c -=  1;

//compound assignment with argument multiplication

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;


// compound assignment with argument division 
let a = 48;
let b = 108;
let c = 33;

a /=  12;
b /=  4;
c /=  11;

// Escapting literal qoutes 
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line


// qouting string with single qoutes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape sequence in string 
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

//concatination string with + operator 
const myStr = "This is the start." + " This is the end.";

// concation sting with += operator 
let myStr = "This is the first sentence. ";
myStr +="This is the second sentence.";


// constructing string with variable 
const myName = "abhishek singh";
const myStr = "My name is "+ myName +"I am well";

// appending variable to string
const someAdjective = "awesome!";
let myStr = "Learning to code is ";
myStr += someAdjective;

//finding the length of string
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;


// using bracket notation to find the first letter of string
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; 

// understanding string immutibility 
let myStr = "Jello World";
myStr = "Hello World"; 

// finding nth character in the string 
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; 

// using brackets to find last letter in string
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length -1]; 

// usimg brackets to find nth to last letter in string
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length -2]; 

// word blanks 
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = " The "+myNoun +" " +myAdjective+" "+myVerb+" "+myAdverb ; 

//Store Multiple Values in one Variable using JavaScript Array
const myArray = ["jelly", 43];
//Nest one Array within Another Array
const myArray = [["Blue", 23],["White sox", 45]];

//Access Array Data with Indexes
const myArray = [50, 60, 70];

const myData = myArray[0];

//Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0]= 45;

//Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];


//Manipulate Arrays With push()
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);

//Manipulate Arrays With pop()
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

//Manipulate Arrays With shift()
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

//Manipulate Arrays With unshift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//Shopping List
const myList = [["we",5],["are",6],["one",6],["for",6],["all",4]];

// Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World");
  }
  
  reusableFunction();


//Passing Values to Functions with Arguments
 
function functionWithArgs(a,b){
    console.log(a+b);
  
  }
  
  functionWithArgs(1,2);
  functionWithArgs(7,9);

  //Return a Value from a Function with Return
  function timesFive(num){
    return num*5;
  }

//Global Scope and Functions
const myGlobal= 10;

function fun1() {
oopsGlobal=5;
}


function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//Local Scope and Functions
function myLocalScope() {
  
   var myVar;
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);

//Global vs. Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = "sweater";
  return outerWear;
}

myOutfit();

//Understanding Undefined Value returned from a Function

let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive(){
  sum = sum + 5;
}
addThree();
addFive();


//Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);


//Stand in Line
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
  
  }
  
  const testArr = [1, 2, 3, 4, 5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

//Understanding Boolean Values

function welcomeToBooleans() {
  
    return true; 
  
  }

//Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
  if(wasThatTrue){
    return "Yes, that was true";
  }
  return "No, that was false";
  
    
  }
  

  //Comparison with the Equality Operator

function testEqual(val) {
    if (val==12) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);


//   Comparison with the Strict Equality Operator

function testStrict(val) {
    if (val===7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);


//  Practice comparing different values

function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

  //  Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val!=99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  //Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val!==17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);


//Comparison with the Greater Than Operator

  function testGreaterThan(val) {
    if (val>100) {  
      return "Over 100";
    }
  
    if (val>10) {  
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

  //Comparison with the Greater Than Or Equal To Operator

  function testGreaterOrEqual(val) {
    if (val>=20) {  
      return "20 or Over";
    }
  
    if (val>=10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

//  Comparison with the Less Than Operator
function testLessThan(val) {
    if (val<25) {  
      return "Under 25";
    }
  
    if (val<55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);


//  Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
    if (val<=12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);



  // Comparisons with the Logical And Operator

  function testLogicalAnd(val) {
  
    if (val<=50 && val>=25) {
      
        return "Yes";
  
    }
  
    return "No";
  }
  
  testLogicalAnd(10);


  
  











