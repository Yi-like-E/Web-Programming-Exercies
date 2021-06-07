// Multi-Line template literal to wrap the csv date
var csvData = `0134134,John Smith,555-567-2341,62 inches
0134135   ,    June    Lee    ,  5554126347 ,        149 cm
0134136,       Kim Thomas       , 5324126347, 138cm`;

function splitIntoRows(s){
    return s.split(/\r?\n/)
;}

function removeExtraWhitespaces(s){
    return s.replace(/\s+/, ' ');
}

function extractAreaCode(phoneNumber){
    let matches = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/)  // the () defines a capture group
    if(matches){
        // store the area code in place of the phone number
        return matches[1];
    }
    return phoneNumber;
}

function normalizeHeight(height){
    // height is already in inches, return it
    if(height.endsWith('inches')){  
        return height;
    }
    
    // get the height in cm as a number
    let cm = parseFloat(heigh);
    let inches = cm * 0.39;

    // `xx inches`
    return `${inches} inches`;  // if it wants decimal places, used toFixed() function
}

function rowToFields(row){
    // split on , with or without whitespace on either side
    let fields = row.split(/\s*,\s*/);

    // remove extra whitespace from name
    fields[1] = removeExtraWhitespaces(field[1]);

    // extract are code from 555-555-5555 or 5555555555
    fields[2] = extractAreaCode(fields[2]);

    // normalize height to inches and format as a string
    fields[3] = normalizeHeight(fields[3]);

    return fields.join(',');
}

function processCSV(csv) {
    // step 1 - break the csv into rows
    let rows = splitIntoRows(csv);

    // step 2 - split all rows into array of fields
    let data = row.map((row) => rowToFields(row));
    // same as below two
    //  let data = row.map(rowToFields);
    /*let data = [];

    for(let row of rows) {
        let fields = rowToFields(row);
        // Add the set of fields to the data
        data.push(fields);
    } */

    return data.join('\n');
    
}

// Log output of processing
var processed = processedCSV(csvDate);
console.log(processed);