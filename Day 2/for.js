var json = `[{
    "id": "raj",
    "msg": "Iterate for loops",
    "mail": "subash32926@gmail"
}]`
let user = JSON.parse(json);

console.log(Object.values(user))
    //for loop
for (var i = 0; i < user.length; i++) {
    console.log(user[i]);

}
//for Each
user.forEach(function(obj) { console.log(obj.id); });

//for In (Objects & Arrays)
for (var key in user) {
    //console.log(key);
    console.log(user[key].msg);
}

//for Of (Arrays)
for (var values of user) {
    console.log(values)
    console.log(values.mail);
}