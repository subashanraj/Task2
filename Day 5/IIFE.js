//1.Print odd numbers
(function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i])
        }
    }
})([1, 2, 3, 4, 5, 7, 8, 9])

//2)Convert all the strings to title caps in a string array

(function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})("i am subashan raj");



//3. sum of numbers
(function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(sum);
})([1, 2, 3, 4])


//4.Return all prime numbers
(function(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {

            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
})([1, 2, 3, 4])

//5 Return all the palindromes in an array
(function(arr, n) {
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
})([1, 2, 3, 2, 1], 5)

// let arr = [1, 2, 3, 2, 2];
// let n = arr.length;

// palindrome(arr, n);

//6  Remove duplicates from an array

(function(array) {
    let dup = [...new Set(array)];
    console.log(dup);
})([1, 1, 2, 3, 3, 4])

// //7

// (function(array, k) {
//     k = k % a.length;
//     if (k < 0) {
//         k += a.length;
//     }

//     reverse(a, 0, a.length - k - 1);
//     reverse(a, a.length - k, a.length - 1);
//     reverse(a, 0, a.length - 1);
// })([1, 2, 3, 4], 2)

//8  Rotate an array by k times

(function Rotate(arr, k) {

    for (let i = 0; i < k; i++) {
        let temp = arr[0];
        for (let j = 0; j < arr.length; j++) {
            arr[j] = arr[j + 1]
        }
        arr[arr.length - 1] = temp
    }
    console.log(arr);
})([1, 2, 3, 4, 5], 2)