console.log("cats!");
console.log("More cats!");

// window.onload=function(){
//     let img = document.getElementById('cat-picture');
//     //img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Six_weeks_old_cat_%28aka%29.jpg';
//     img.src="https://cataas.com/cat";
// }

// function loadCatPicture(){
//     let img = document.getElementById('cat-picture');
//     img.src="https://cataas.com/cat";
//     console.log("change");
// }
// window.onload = function (){
//     loadCatPicture();
//     setTimeout(loadCatPicture, 5*1000);
// };

// window.onload = function(){
//     loadCatPicture();
//     setInterval(loadCatPicture, 1*1000);
// };

// let poemText = document.querySelector('#poem-text');
// poemText.onclick = loadCatPicture;

// Pressing any key
// window.onkeypress = function(e){
//     let keyName = e.key;
//     console.log('Key Press event', keyName);
//     loadCatPicture();
// }

// Pressing specific key
// window.onkeypress = function(e){
//     let keyName = e.key;
//     console.log('Key Press event', keyName);

//     switch(keyName){
//         case 'b':
//         case 'm':
//         case 's':
//         case 'n':
//         case 'p':
//         case 'x':
//             loadCatPicture();
//             break;
//         default:
//             console.log('Ignoring key press event');
//     }
// };

// Pressing specific key and load picture with on of the supported cataas filters
function loadCatPictureFiltered(filter){
    let url = 'https://cataas.com/cat';
    let img = document.querySelector('#cat-picture');

    if(filter){
        console.log('Using cat picture filter', filter);
        url += '?filter=' + NodeFilter;
    }
    img.src = url;
}

// let poemText = document.querySelector('#poem-text');
// poemText.onclick = function(){
//     loadCatPictureFiltered();
// };

// window.onkeypress = function (e){
//     let keyName = e.key;
//     console.log('key press event', keyName);
//     switch(keyName) { 
//         case 'b':
//             return loadCatPictureFiltered('blur');
//         case 'm':
//             return loadCatPictureFiltered('mono');
//         case 's':
//             return loadCatPictureFiltered('sepia');
//         case 'n':
//             return loadCatPictureFiltered('negative');
//         case 'p':
//             return loadCatPictureFiltered('paint');
//         case 'x':
//             return loadCatPictureFiltered('pixel');
//         default:
//             console.log('Ignoring key press event');
//     }
// };

// load a new pic when the old pic is finished loading and do cache busting
let loadCatPicture = (function (){
    let isLoading = false;

    return function(filter){
        if(isLoading){
            console.log('skipping load, already in progress');
            return;
        }
        let img = document.querySelector('#cat-picture');

        function finishedLoading(){
            isLoading = false;

            img.onload = null;
            img.onerror = null;
            img = null;
        }
        img.onload = finishedLoading;
        img.onerror = finishedLoading;

        let url = 'https://cataas.com/cat';

        url+= '?nocache=' + Date.now();

        if(filter){
            console.log('Using cat picture filter', filter);
            url += '&filter=' + filter;
        }
        isLoading = true;
        img.src=url;
    };
})();

var poemText = document.getElementById('poem-text');
poemText.onclick = function() {
    loadCatPictureFiltered();
};

window.onkeypress = function(event) {
    switch(event.key) { 
        case 'b':
            return loadCatPictureFiltered('blur');
        case 'm':
            return loadCatPictureFiltered('mono');
        case 's':
            return loadCatPictureFiltered('sepia');
        case 'n':
            return loadCatPictureFiltered('negative');
        case 'p':
            return loadCatPictureFiltered('paint');
        case 'x':
            return loadCatPictureFiltered('pixel');
        default:
            console.log('Ignoring key press event');
            break;
    }
};