//Task 3: Simple Programs todo for Condition , Looping and Arrays

//1 Write a loop that makes seven calls to console.log to output the following triangle:

for (let i = "#"; i.length < 8; i += "#") {
    console.log(i)
}

//2 Iterate through the string array and print it contents

var strArray = ["Jazz", "Blues", "New Age", "Classical", "Opera"]
let b = ""
for (i = 0; i < strArray.length; i++) {
    b += " " + strArray[i]
}
console.log(b)

// write a code to count the elements in the array . Don’t use length property
//method 1
var a = [11, 22, 33, 44, 55]

function arrlength() {
    var length = 0;
    while (a[length] !== undefined)
        length++;
    return length
}
console.log(arrlength(a))
    //method 2
function len(arr, value) {
    return arr.push(value)
}
console.log(len([11, 22, 33, 44], 55))

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let food = ["parora", "biriyani", "idli", "dosa", "fried rice",
    "noodles", "chappati", "idiyappam", "podi dosa", "ghee dosa",
    "naan", "rice", "shawarma", "BBQ", "grill"
]
console.log(food[5])
console.log(food.length)

//change the element that is currently “Mari” to “Munnabai”.

let friends = ["Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

function dataHandling() {
    for (i = 0; i < friends.length; i++) {
        if (friends[i] == "Mari") {
            friends[i] = "Munnabai"
        }
        //friends[0] = "Munnabai"

    }
    console.log(friends)
}

dataHandling(friends);

//Loop and Print the names till you meet CaptianAmerica.

function dataHand() {
    for (i = 0; i < friends.length; i++) {
        if (friends[i] == "Mari") {
            friends[i] = "Munnabai"
        }
        //friends[0] = "Munnabai"

    }
    console.log(friends)
}

dataHand(friends);


// Find the person is ur friend or not.

function data(input, name) {

    for (i = 0; i < friends.length; i++) {
        if (friends[i] == "Jeff") {
            console.log("friend")
        } else { console.log("not a friend") }
        //friends[0] = "Munnabai"

    }
}
let found = data(friends, "jeff")
data()

//
var frnd = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];

function sort() {
    let sortedarray = [...frnd.sort(), ...friends2.sort()]
    console.log(sortedarray)
}
sort()

//Objects

//1

var myobject = { 1: "one", "11": 1, "name": "arun" }
myobject.ten = "ten"
    //console.log(myobject[1]);
    //console.log(myobject.name);

//2 Object literal

var data = {
    "company1": {
        "ins1": "Guvi",
        "slogan": "Geek",
        "Location": {
            "Address": "IIT-M RP",
            "city": "chennai"
        }
    },
    "company2": {
        "ins2": "Amazon",
        "slogan": "Inc",
        "Location": {
            "Address": "31,SP Infocity",
            "city": "chennai"
        }

    },
    "company3": {
        "ins3": "Google",
        "Parent": "Alphabet",
        "Location": {
            "Address": "34 Amphitheater Pathway",
            "city": "Mountain view"
        }
    },
    "company4": {
        "ins4": "Tesla",
        "slogan": "Inc",
        "Location": {
            "Address": "32,333 Santana Row",
            "city": "San Jose"
        }
    }
}

console.log(data.company1)