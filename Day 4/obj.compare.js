var obj1 = { "name": "Sam", "age": "5", "class": "MCA" };
var obj2 = { "class": "MCA", "name": "Sam", "age": "5" };

var flag = true;
//console.log(Object.keys(obj1))
if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (key in obj1) {
        if (obj1[key] == obj2[key]) {
            continue;
        } else {
            flag = false;
        }
    }
} else {
    flag = false;
}
console.log("is object equal" + " " + flag);