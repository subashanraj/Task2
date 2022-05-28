//Task 1: Simple Programs todo for variables

//1.Decaleing variables 
let a;
console.log(a)

//2 To get value as outpu

var myvar = 1;
console.log(myvar)

//3 Declare variables to store your first name, last name, marital status, country and age in multiple lines

var arr = ["subashan", "raj", "unmarried", "India", 27]

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i])

}

//4 Declare variables to store your first name, last name, marital status, country and age in a single line


var arr1 = ["subashan", "raj", "unmarried", "India", 27]
var result = " "
for (let i = 0; i < arr.length; i++) {

    result = result + " " + arr[i]
}
console.log(result)

//5. Declare variables and assign string, boolean, undefined and null data types

let num = 9
let str = "raj"
let bool = "true"
let b;
let c = null
console.log(num, str, bool, b, c)

//6. Convert the string to integer
var str1 = parseInt("I am 25 years old.")
var str2 = Number("You are 30 years old.")
var str3 = +"You are 30 years old."
console.log(typeof(str1), typeof(str2), typeof(str3))

//7. Write 6 statement which provide truthy & falsey values.

//var boolean = "true"
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(null));

//  Task 2







// for (let i = "******"; i.length > 0; i = i.slice(1)) {
//     console.log(i)
// }