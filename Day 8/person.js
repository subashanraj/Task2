class person {
    constructor(name, fathername, mothername, aadhar_no, gender, address, mobile_No, Email) {
        this.name = name;
        this.fathername = fathername;
        this.mothername = mothername;
        this.aadhar_no = aadhar_no;
        this.gender = gender;;
        this.address = address;
        this.mobile_No = mobile_No;;
        this.Email = Email;
    }
    person_name() {
        return `my name is  ${this.name}`;
        // return `my father is ${this.fathername}`;
    }
    person_father_name() {
        return `my father is ${this.fathername}`;
    }
    person_mother_name() {
        return `my mother is ${this.mothername}`;
    }
    person_aadhar_no() {
        return `Aadhar_no  is ${this.aadhar_no}`;
    }
    person_gender() {
        return `I am ${this.gender}`;
    }
    person_address() {
        return `my addressis ${this.adress}`;
    }
    person_mobile_no() {
        return `my mobile_no is ${this.mobile_No}`;
    }
    person_Email() {
        //console.log("mail")
        return `my email is ${this.Email}`;
    }
}
//object
const obj = new person("Subash", "Suresh", "Renuka", "1234-6754-7890", "Male", "Theni", "12345-87696", "subash@gmail.com");

console.log(obj.person_name());
console.log(obj.person_father_name());
console.log(obj.person_mother_name());
console.log(obj.person_aadhar_no());
console.log(obj.person_gender());
console.log(obj.person_address());
console.log(obj.person_mobile_no());
console.log(obj.person_Email());

//output
// my name is  Subash
// my father is Suresh
// my mother is Renuka
// Aadhar_no  is 1234-6754-7890
// I am Male
// my addressis undefined
// my mobile_no is 12345-87696
// my email is subash@gmail.com