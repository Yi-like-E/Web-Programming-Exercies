// 1
function circleArea (radius){
    return radius * radius * Math.PI;
}

console.log("1.", circleArea(2));

// 2
function roll (numSides){
    var defaultSides = 6;
    numSides = numSides || defaultSides;
    return Math.floor(Math.random() * (numSides - 1) + 1);
}

console.log("2.", roll());
console.log("2.2", roll(30));

// 3
let convert = function (celcius) {
    return celcius * 9/5 + 32;
};

console.log("3.", convert(0));

// 4
let convertCF = function (temp, type){
    if (type == "C"){
        return (temp * 9/5 + 32) + " F";
    }
    return ((temp - 32) * 5/9 )+ " C"; 
}

console.log("4.", convertCF(122, "F"));
console.log("4.2", convertCF(122, "C"));

// 5
let isUnder50 = function(...value){
    var i;
    for(i = 0; i < value.length; i++){
        let num = value[i];
        if(num > 50){
            return "False";
        }
    }
    return "True";
};

console.log("5.", isUnder50(1,2,3,5,4,65));
console.log("5.2", isUnder50(1,2,3,5,4,45));

// 6
let sum = function(...values) {
    var i, total = 0;
    for(i = 0; i < values.length; i++)
    {
        total += values[i];
    }
    return total;
}

console.log("6.", sum(1,2,3));

// 7
let allExist = function (){
    var i;
    for (i = 0; i < arguments.length; i++){
        var obj = arguments[i];
        if(!obj){
            return "False";
        }
    }
    return "True";
}

console.log("7.", allExist(1, "1", 0));
console.log("7.2", allExist(true, true, 1));

// 8
let generateName = function (name) {
    if(name[name.length -1] == "."){
        return name + "js";
    }
    return name + ".js";
}

console.log("8.", generateName("dog"));
console.log("8.2", generateName("cat."));

// 9
let multipleOf3 = function (num) {
    if (num % 3 == 0){
        return true;
    }
    return false;
}

console.log("9.", multipleOf3(9));
console.log("9.2", multipleOf3(10));

// 10
let checkBetween =  function(value, min, max, inclusive){
    if(inclusive){
        return value >= min && value <= max;
    }
    return value >= min && value <= max;
}

console.log("10.", checkBetween(50,1,50, false));

// 11
var tax = (amount) => amount * 0.13;

console.log("11.", tax(10));

// 12
let discount = function (price, sale){
    if(sale){
        return price * (100 - sale )/100;
    }
    return price;
}

console.log("12.", discount(100,20));
console.log("12.2", discount(1000));

// 13
let secToStr = function (second){
    var day = parseInt(second / 86400);
    var hour = parseInt((second % 86400)/3600);
    var min = parseInt(((second %86400)%3600)/60);
    return day + " Day, " + hour + " Hour, " + min + " Minutes"
}

console.log("13.", secToStr(1200));

// 14
let secToDay = function (second){
    var day = parseInt(second / 86400);
    var hour = parseInt((second % 86400)/3600);
    var min = parseInt(((second %86400)%3600)/60);
    if(day == 0 && hour == 0){
       return min + " Minutes"; 
    }
    else if(day == 0 && hour != 0){
        return hour + " Hour, " + min + " Minutes";
    }
    return day + " Day, " + hour + " Hour, " + min + " Minutes"
}

console.log("14.", secToStr(140000));

// 15
let flip = function (...value){
    var start = 0, end = value.length, temp, str = "";
    while(start < end){
        temp = value[start];
        value[start] = value[end -1];
        value[end-1] = temp;
        start++;
        end--;
    }
    //var str = value.join("");
    //var str = value.toString();
    //return str;
    for (var i = 0; i < value.length; i++){
        str += value[i];
    }    
    return str;
}

console.log("15.", flip(1,2,3));


// 16
let intSum = function (num1, num2){
    return parseInt(num1+num2);
}

console.log("16.", intSum(1.6,3.33333));

// 17
let findMatches = function (arg,...values){
    var i, count = 0;
    for(i = 0; i < values.length; i++){
        if(arg == values[i]){
            count++;
        }
    }
    return count;
}

console.log("17.", findMatches(66, 1, 345, 2334, 66, 67, 66));

// 18
let showOutsideByteRange = function (...values){
    var i;
    for(i = 0; i < values.length; i++){
        if (values[i]>255){
            console.log(values[i]);
        }
    }
}

console.log("18.");
showOutsideByteRange(1, 5, 233, 255, 256, 300);

// 19
let prepareString = function (str){
    return encodeURI(str);
}

console.log("19.", prepareString("hello world"));

// 20
let buildQueryString = function (...str){
    
    var i, completestr = '?';
    for(i = 0; i < str.length; i++){
        completestr += str[i] ;
        if(i != str.length - 1){
            completestr += '&';
        }
    }
    return encodeURI(completestr);
}

console.log("20.", buildQueryString("hello world", "goodnight moon"));

// 21
function applyFn (fn,...values ){
    var result = 0;
    function fn (x){
        return x*x
    }
    for(var i = 0; i < values.length; i++){
        result += fn(values[i]);
    }
    return console.log(result);
}

//console.log("21.", applyFn(function(x) { return x * x;}, 1, 2, 3));
applyFn(function(x) { return x *  x;}, 1, 2, 3);