function getDogBreeds(callback){
    // doing network request from my or other web server when the webpage is loaded
    let xhr = new XMLHttpRequest();

    // If the xhr request works
    xhr.onload = function() {
        // when parsing JSON, it's a good practice to use a try catch since it can get tricky
        try {
            // take a string of text that is sent to me and change it to a JS object
            let data = JSON.parse(this.responseText); // this as in the response object
            // Get only the keys from data.message
            callback(Object.keys(data.message));  
        } catch(err){
            console.error('Unable to parse breed JSON', err);
        }
        
    };

    // If the xhr request fails
    xhr.onerror = function(){
        console.error('Unable to get dog breed JSON');
    };

    let url = 'https://dog.ceo/api/breeds/list/all';
    xhr.open('GET', url); // doing a GET request
    xhr.send(); 
}

function getBreedData(breed, callback){
// doing network request from my or other web server when the webpage is loaded
let xhr = new XMLHttpRequest();

// If the xhr request works
xhr.onload = function() {
    // when parsing JSON, it's a good practice to use a try catch since it can get tricky
    try {
        // take a string of text that is sent to me and change it to a JS object
        let data = JSON.parse(this.responseText); // this as in the response object
        // Get only the keys from data.message
        callback(data.message);  
    } catch(err){
        console.error('Unable to parse breed JSON', err);
    }
    
};

// If the xhr request fails
xhr.onerror = function(){
    console.error('Unable to get dog breed image JSON');
};

let url = `https://dog.ceo/api/breed/${breed}/images`;
xhr.open('GET', url); // doing a GET request
xhr.send();
}