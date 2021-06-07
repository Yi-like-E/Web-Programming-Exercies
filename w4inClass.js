// Empty Array Literal
let l = [];
let list = ['web222', 'ncc'];

//Empty Object Literal
let o = {};

//Object literal with a key/value pair
let o2 = {course: 'web222'};

//object literal with multiple key/value pairs
let o3 = {course: 'web222', section: 'ncc'}; 
let courseInfo = {
    course: 'web222',
    section: 'ncc',
    school:'Seneca'
}

//--------------------------------------------------//

let user = {
    firstName = 'First',
    lastName = 'Last',
    isLoggedIn: false,
    age: 19,
    list: [1,2,3,4],
    pref:{
        colour: 'red',
        width: 1024,
    },
    score: null,
    login: function(){
        this.isLoggedIn = true;
    },
};

user.score = 43; // assigning the score to the user
user.login(); // call the function inside the user object

// create a function that reaches into the object
user.logout = function(){
    this.isLoggedIn = false;
}

let user2;
user2.firstName = user.firstName; // setting the user2 first name as the first name in user object

user2.login = user.login;
user2.login(); // calling the function inside the user object

// constructor function  
function User(fname,lname, age){
    this.firstName = fname;
    this.lastName = lname;
    this.isLoggedIn = false;
    this.age = age;
    this.pref = {
        colour: 'red',
        width: 1024,
    },
    this.score = 0;

    // these two functions can be removed since we created prototypes
    // this.login = function(){
    //     this.isLoggedIn = true;
    // };

    // this.logout = function(){
    //     this.isLoggedIn = false;
    // };
}

let user = new User('Dave', 'Humphrey');
let user2 = new User('Frank', 'Lee');
let user3 = new User('Jen', 'Smith');

// prototype

User.prototype.login = function(){
    this.isLoggedIn = true;
};
User.prototype.logout = function() {
    this.isLoggedIn = false;
}

//--------------------------------------------------------------------//
// Multi-Line template literal to wrap the csv date
var csvData = `0134134,John Smith,555-567-2341,62 inches
0134135   ,    June    Lee    ,  5554126347 ,        149 cm
0134136,       Kim Thomas       , 5324126347, 138cm`;

function PhoneNumber(value){
    this.value = value;
}

PhoneNumber.prototype.getAreaCode = function(){
    let phoneNumber = this.value;
    let matches = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/);  // the () defines a capture group
    if(matches){
        // store the area code in place of the phone number
        return matches[1];
    }
    return phoneNumber;
};

function Height(inches){
    this.inches = inches;
}

Height.prototype.toString = function(){
    return `${this.inches.foFixed(2)} inches`   
};

Height.parse = function(value) {
    let inches;

    if(value.endsWith('inches')){
        inches = parseFloat(value);
    } else {
        inches = parseFloat(value) * 0.39;
    }
    return new Height(inches);
};

/**
 let height = new Height(54);
 let s = height.toString();
 let height2 = Height.parse('54 inches');
 let height3 = Height.parse('134 cm');
 console.log(height); // '54 inches'
 */

 /**
0134134,John Smith,555-567-2341,62 inches
0134135   ,    June    Lee    ,  5554126347 ,        149 cm
0134136,       Kim Thomas       , 5324126347, 138cm
  */

function customer(id, name, phoneNumber, height){
    this.id = id;
    this.name = removeExtraWhitespaces(name);
    this.phoneNumber = new PhoneNumber(removeExtraWhitespaces(phoneNumber));
    this.height = Height.parse(removeExtraWhitespaces(height));
}



function splitIntoRows(s){
    return s.split(/\r?\n/)
;}

function removeExtraWhitespaces(s){
    return s.replace(/\s+/, ' ');
}

function rowToCustomer(row){
    // split on , with or without whitespace on either side
    let fields = row.split(/\s*,\s*/);

    // ['id', 'name', 'phonenumber', 'height]
    return new Customer(fields[0], fields[1], fields[2], fields[3]);
}

function processCSV(csv) {
    // step 1 - break the csv into rows
    let rows = splitIntoRows(csv);

    // step 2 - split all rows into array of fields
    return row.map(rowToCustomer);

    
}

// Log output of processing
var customers = processedCSV(csvDate);
// console.log(csvData);
// console.log('---------------------');
// console.log(customers);
customers.forEach(function(customer){
    console.log(customer.name, customer.height, customer.getAreaCode());
});