// //Task 2: Simple Programs todo for Operators

// //1 Square of a number

// let a = Math.pow(2, 2);
// console.log(a)

// //2 Swapping 2 numbers

// let b = 2;
// let c = 3;
// [b, c] = [c, b]
// console.log(b, c)

// //3 Addition of 3 numbers

// let arr = [20, 30, 40]
// console.log(arr[0] + arr[1] + arr[2])

// //4 Celsius to Fahrenheit conversion

// let celcius = 32;
// let fahrenheit = (celcius * 1.8) + 32;
// console.log(fahrenheit.toFixed(2));

// //5 Meter to miles

// var meter = 100;
// console.log("miles:",
//     meter / 1609.344);


// //6 Pounds to kg
// var pounds = 100;
// console.log("miles:",
//     pounds / 2.2);

// //7 Calculate Batting Average

// function averageRuns(runs, matches, notout) {
//     let out1;
//     out1 = matches - notout;
//     if (out1 == 0)
//         return -1;
//     let avg = parseInt((runs) / out1, 10);
//     return avg;
// }
// let runs = 10000;
// let matches = 250;
// let notout = 50;
// let avg = averageRuns(runs, matches, notout);
// if (avg == -1)
//     console.log("NA");
// else
//     console.log(avg);

// //8 Calculate five test scores and print their average

// let scores = [350, 200, 370, 400, 200]

// console.log(scores[0] + scores[1] + scores[2] + scores[3] + scores[4] / scores.length)

// //9 Power of any number x ^ y

// let x = 2
// let y = 3
// console.log(Math.pow(x, y))


// //10  Calculate Simple Interest

// let Simpleinterest = [2000, 2, 15];
// let p = Simpleinterest[0]
// let t = Simpleinterest[1];
// let r = Simpleinterest[2];
// let SI = +(p * r * t) / 100;
// console.log(SI.toFixed(2));

// //11 Calculate area of an equilateral triangle

// var eqtri = 12;

// var dd = Math.sqrt(3);
// var ll = ((dd * eqtri * eqtri) / 4).toFixed(2);
// console.log(ll);

// //12 Area Of Isosceles Triangle

// var base = 12;
// var height = 20
// var isotri = ((base * height) / 2);
// console.log(isotri);

// //13 Volume Of Sphere

// let radius = 8;
// let volume = ((Math.PI * 4 * (Math.pow(radius, 3))) / 3)
// console.log(volume.toFixed(1))

// //14 Volume Of rectangular prism
// let lenth = 20
// let breath = 10
// let height1 = 5
// let prism = (lenth * breath * height1)
// console.log(prism)

// //16 Give the Actual cost and Sold cost, Calculate Discount Of Product

// let cp = 200
// let sp = 150
// let Dis = (((cp - sp) * 100) / cp)
// console.log(Dis)

// //17  Given their radius of a circle and find its diameter, circumference and area.
// let radius2 = 7;
// let diameter = radius2 * 2;
// let circumference = (2 * Math.PI * radius2).toFixed(2);
// let area = (Math.PI * (Math.pow(radius2, 2))).toFixed(2);
// console.log("diameter:", diameter, "circumference:", circumference, "area:", area)

// //18 Given two numbers and perform all arithmetic operations.

// let num1 = 15;
// let num2 = 10;
// let add = num1 + num2
// let sub = num1 - num2
// let div = num1 / num2
// let mul = num1 * num2
// let mod = num1 % num2

// console.log(add)
// console.log(sub)
// console.log(div)
// console.log(mul)
// console.log(mod)

// //19 Display the asterisk pattern as shown below(No loop needed)

// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         string += "*"
//     }

//     string += "\n"
// }
// console.log(string);

// // 20 Calculate electricity bill?

// let watt = 100
// let unit = ((100 * 24 * 30) / 1000)
// let price = unit * 10
// console.log(price)

// //21 Program To Calculate CGPA

let score = [85, 80, 60, 75]
let points = []
for (i = 0; i < score.length; i++) {
    if ((score[i] <= 100 && score[i] >= 91)) {
        points.push(10)
    } else if ((score[i] <= 90 && score[i] >= 81)) {
        points.push(9)
    } else if ((score[i] <= 80 && score[i] >= 71)) {
        points.push(8)
    } else if ((score[i] <= 70 && score[i] >= 61)) {
        points.push(7)
    } else if ((score[i] <= 60 && score[i] >= 51)) {
        points.push(6)
    }
}
let cgpa = (points[0] + points[1] + points[2] + points[3]) / score.length
console.log(cgpa)