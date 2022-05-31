// //1  print odd numbers in array

let odd = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i])
        }
    }
}
odd([1, 2, 3, 4, 5])

// //2 convert all the strings to title caps in string array
let uppercase = function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
}
uppercase("i am subashan raj")

//3 sum of all numbers in array

let addition = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(sum)
}
addition([1, 2, 3, 4, 5])

//4 Return all prime numbers in a array

let prime = function(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {

            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
}
prime([1, 2, 3, 4, 5])

//5   Return all the palindromes in an array

let palimdrome = function(arr, n) {
    let flag = 0;

    for (let i = 0; i <= n / 2 && n != 0; i++) {
        if (arr[i] != arr[n - i - 1]) {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        console.log("Not Palindrome");
    else
        console.log("Palindrome");
}
palimdrome([1, 2, 3, 2, 1], 5)

//6  Remove duplicates from an array

let duplicate = function(array) {
    let dup = [...new Set(array)];
    console.log(dup);
}
duplicate([1, 1, 1, 2, 3, 4, 4, 5])


//7  Rotate an array by k times

let rotate = function(arr, k) {
    for (let i = 0; i < k; i++) {
        let temp = arr[0];
        for (let j = 0; j < arr.length; j++) {
            arr[j] = arr[j + 1]
        }
        arr[arr.length - 1] = temp
    }
    console.log(arr);
}
rotate([1, 2, 3, 4, 5], 3)