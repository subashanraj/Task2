//1 Fix the code to get the largest of three.

aa = (f, s, t) => {
    if (f > s && f > t) {
        console.log(f)
    } else if (s > f && s > t) {
        console.log(s)
    } else {
        console.log(t)
    }
}
aa(1, 2, 3);

// output : 3

// 2 Fix the code to Sum of the digits present in the number

let n = 123;
var digits = n.toString().split('');
console.log(add(digits));

function add(digits) {

    let sum = 0;
    for (var i = 0; i < digits.length; i++) {
        sum += +digits[i]
    }
    return sum;
}

// output : 6

//3 Fix the code to Sum of all numbers using IIFE function
var n = [9, 8, 5, 6, 4, 3, 2, 1];

(function(n) {
    let sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += n[i];
    }
    console.log(sum);

})(n);

// output : 38

// 4 Fix the code to gen Title caps.

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arr) {

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
}
ano(arr);

// output 
// Guvi
// Geek
// Zen
// Fullstack

// 5 Fix the code to return the Prime numbers

const numArray = [1, 3, 2, 5, 10];
let prime = (numArray) => {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {

            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
}
prime(numArray)

// output [ 1, 3, 2, 5 ]

// 6 Fix the code to sum the number in that array

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
var sum = (a, b) =>
    a + b
var sum = num.reduce(sum)
console.log(sum);

// output : 550

// 7 Fix the code to rotate an array by k times and return rotated array using IIFE function

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function(arr, k) {
    for (let i = 0; i < k; i++) {
        let temp = arr[0];
        for (let j = 0; j < arr.length; j++) {
            arr[j] = arr[j + 1]
        }
        arr[arr.length - 1] = temp
    }
    console.log(arr);
})(arr, k);

//output  
// [
//   3,  6,  8,  6, 1,
//   9, 10, 12, 13, 1,
//   2
// ]


// 8 print all odd numbers in an array using IIFE function


var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i]
        }
    }
    console.log(sum);
})(arr);

//output : 111

// 9 Fix the code to reverse.

(function(str) {
    var str1 = str.split("").reverse().join("")
    console.log(str1);
})("abcd")

// output : dcba

// 10 Fix the code to remove duplicates.

var res = function(arr) {
    let newArr = [...new Set(arr)];
    console.log(newArr)
}
res(["guvi", "geek", "guvi", "duplicate", "geeK"])

// output : [ 'guvi', 'geek', 'duplicate', 'geeK' ]

// 11 Fix the code to give the below output:

var array = [
    [
        ["firstname", "vasanth"],
        ["lastname", "Raje"],
        ["age", 24],
        ["role", "JSWizard"]
    ],
    [
        ["firstname", "Sri"],
        ["lastname", "Devi"],
        ["age", 28],
        ["role", "Coder"]
    ]
];
var final = []
while (array.length != 0) {
    var outer_remove = array.shift();

    while (outer_remove.length != 0) {
        var inner_remove = outer_remove.shift()
        var key = inner_remove[0]
        var value = inner_remove[1]
        final[key] = value

    }
    console.log(final)
}
// output:
// [ firstname: 'vasanth', lastname: 'Raje', age: 24, role: 'JSWizard' ]
// [ firstname: 'Sri', lastname: 'Devi', age: 28, role: 'Coder' ]

//12  Sum of odd numbers in an array

var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function(a, c) {
    if (c % 2 == 1) {
        return a + c;
    }
    return a;
}, 0);
console.log(s);

//output: 6

// 13 Swap the odd and even digits

aa = data => {
    var a = data;
    for (i = 0; i < a.length - 1; i++) {
        var l = '';
        var s = a[i + 1]
        var b = a[i]
            //console.log(b)
            //console.log(s)
        l += s
        l += b
        i = i + 1
        console.log(l)
    }

}
aa("1234");

// output : 2143