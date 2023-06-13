/*
// Var  - keyword used to create varaible in javascript, value of variable using var keyword can change the value

// cont - keyword used to create varaible in javascript, but the value of varaible created using cont can't change the value upon declaration

// after ES6 we generally use "let" and "const"

code - 
var my_name = "MAX"
console.log(my_name)
*/


/* ARROW FUNCTIONS
 syntax -  const myFun = () => {
    //code inside the function
 }

 note - if we are receiving only one argumnets then we can ommit the parenthesis around the argument, if no argumnent passed pass empty parenthsis.
 if we are having only return statement inside the function body then we can write the function body in a single line and can ommit curly bracket and the return keyword.
*/

/* arrow function example
const printMyName = (name) =>{
    console.log(name)
}

printMyName("rohan")

*/


// UNDERSTAND CLASSES IN JS
/* 
blue prints for the objects
can have property(variable) and method(funtion inside the class)
support inheritance
*/

// CLASS EXAMPLE - 
/*
class Human{
    constructor(){
        this.gender = "male"
    }

    printGender(){
        console.log(this.gender)
    }
}
class Person extends Human{
    constructor(){
        super() // used to call the constructor of its parent class to access the parents property and method, always called in the derived class.
        this.name = "max"
    }

    printMyName(){
        console.log(this.name)
    }
}

const person = new Person();  // creating the object for person class.
person.printMyName();
person.printGender();

*/

// CLASSES, PROPERTY, METHOD

/*
// classes are like the variable attached to the classes or the objects

// methods are like the function attached to the classes or the objects

// using the ES7 format to create the classes having the method and the property


// if we are using the ES7 format we need to eliminate the constructor and replace the property with arrow function
class Human{
    gender ="male"

    printGender = () =>{
        console.log(this.gender)
    }
}

class Person extends Human{
    name = "Max"

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

*/


// SPREAD AND THE REST OPERATOR - spread and rest are the same operator represented by three dots,  they are called as rest and spread upon the use.

// spread operator - used to split up array elements or objects properties
/*  example of spread operator - 
const newArray = [...oldArray, 1, 2]
*/

// rest operator - used to merge a list of functions arguments into an array
/* example of rest operator - 
function sortAgr(...args){
    return args.sort()
}
*/

// DESTRUCTURING - easily extract single array elements or objects properties and store them in a variable

/* array destructuring - 
[a, b] = ["Hello", "Max"]
console.log(a)
console.log(b)
*/

// REFERENCE TYPE- object and array

// PRIMITIVE TYPE - numbers, string boolean