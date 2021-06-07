// Q1
function log (arrStr){
    arrStr.forEach(function (s){
        return console.log(s);
    })
}

// Q2
function addItemToHistory (item){
    let history = [];
    
    return history.push(item);
}

// Q3
function buildArray (num1, num2){
    let list = [], num;

    for(num = num1; num <= num2; num++){
        list.push(num);
    }
    return list;
}

// Q4
function addDollars (arrNum) {
    let list = [];
    list = arrNum.map(function(num){
        return `$${num}`;
    });
    return list;
}

// Q5
function tidy (arrStr) {
    return arrStr.map(function(str){
        return str.trim();
    });
}

// Q6
function measure (arrStr){
    let count = 0;
    arrStr.forEach(function(str){
        count += str.length;
        return count;
    });
    
    return count;
}

function measure (arrStr){
    reducer = (accumulator,currentValue) => accumulator.length + currentValue.length;
    return arrStr.reduce(reducer);
}

// Q7
function whereIsWaldo (arrStr) {
    let list = [];
    arrStr.forEach(function(str){
        if(str.match(/[Ww]aldo/)){
            return list.push(str);
        }
    });
    return list;
}

function whereIsWaldo (arrStr){
    let result;
    result = arrStr.filter(function(str){
        if(str.match(/[Ww]aldo/)){
            return str
        }
    });
    return result;
}

// Q8
function checkAges (arrNum, cutOffNum) {
    let flag = [];
    arrNum.forEach(function(num){
        if(num >= cutOffNum){
            return flag.push('true');
        }
        return flag.push('false');
    });

    if (flag.includes('false')){
        return false;
    }
    return true;
}

function checkAges (arrNum, cutoffNum){
    //let isAbove = (num) => num >= cutoffNum;
    //return arrNum.every(isAbove);
    return arrNum.every((num) => num >= cutoffNum);
}

// Q9
function containsBadWord (badWords, userName){
    let word, list = [];
    for (word of badWords){
        if (userName.match(word)){
            list.push(word)
        }
    }
    if(list.length != 0){
        return list;
    }
    return null;
}

// Q10
function ifSame (str1, str2){
    let arr1 = str1.split(':');
    let arr2 = str2.split(':');
    arr1 = cleanUp(arr1);
    arr2 = cleanUp(arr2);
    if(arr1[0] === arr2[0]){
        if(arr1[1] === arr2[1]){
            return true;
        }
    }
    return false
}

function cleanUp(arrStr){
    let arr = [];
    for (let word of arrStr){
        word = word.trim();
        arr.push(word);
    }
    return arr;
}

// Q11
let address = "28 Byng St., Toronto ON";
let address2 = "30 Finch Rd., Toronto ON";

address.replace(/St./, 'Street');
address2.replace('Rd.', 'Road');

// Q12
function validRoomNumber (str){
    if(str.match(/\d{1,}-(1[0-2]|[1-9])-(3[01]|[12][0-9]|[1-9])/)){
        return true;
    }
    return false;
}

// Q13
function beginWith (str){
    // if (str.startsWith("Mr.") || str.startsWith("Mrs.") || str.startsWith("Ms.")){
    //     return true;
    // }
    // return false;

    if(str.match(/Mr?s?\./)){
        return true;
    }
    return false;
}

// Q14
function validPassword (str){
    if(str.length >= 8 && str.length <= 32){
        if(str.match(/[A-Z]/) && str.match(/[a-z]/) && str.match(/[!@#$%^&*-+{}]/)){
            return true;
        }
        return false;
    }
    return false;
}

// Q15
function validPostalCode (str){
    if (str.match(/[A-z][0-9][A-z]\s?[0-9][A-z][0-9]/)){
        return true;
    }
    return false;
}
