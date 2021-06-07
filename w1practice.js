let label = "senecacollege";
let tld = "ca";
let domainName;

domainName = `${label}.${tld}`;

console.log("1.",domainName);

let isSeneca = domainName === "senecacollege.ca"
console.log("2. isSeneca is", isSeneca);

let isNotSeneca = !isSeneca;
console.log("3. isNotSeneca is", isNotSeneca);

let byte1 = 192;
let byte2 = 168;
let byte3 = 0;
let byte4 = 1;
console.log("4.", byte1, byte2, byte3, byte4);

console.log("5.", byte1.toString(), byte2.toString(2), byte3.toString(16));

let ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
console.log("6. ipAddress =", ipAddress);

let ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + byte4;
console.log("7. ipInt =", ipInt);

let ipBinary = ipInt.toString(2);
console.log("8. ipBinary =", ipBinary);

let statusCode = 418;
console.log("9. statusCode =", statusCode);

if(statusCode >= 400 && statusCode <= 499){
    console.log(`10. StatusCode ${statusCode} is a Client Error`);
}
else{
    console.log(`10. StatusCode ${statusCode} is not a Client Error`);
}

switch(statusCode)
{
    case '100':
        console.log("11. Continue");
        break;
    case '101':
        console.log("11. Switching Protocol");
        break;
    case '102':
        console.log("11. Processing");
        break;
    case '103':
        console.log("11. Early Hints");
        break;
    default:
        console.log(`11. StatusCode ${statusCode} is not an information response`);
        break;
}

function is2XX(code)
{
    if(code >= 200 && code <= 299)
    {
        console.log("12.", !!code);
    }
    else{
        console.log("12.", !code);
    }
    //return code >= 200 && code <= 299;
}

is2XX(200);
is2XX(384);
is2XX(230);
