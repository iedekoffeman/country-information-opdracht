/**
 * Functions are defined in functions.js
 */

const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click',  () => {

    getCountryData();

});
//Opdracht 8
const userInput = document.getElementById("user-input");
userInput.addEventListener('keyup', event => {
    if(event.key === 'Enter') {
        //console.log("HAHAHAHA ENTER");
        getCountryData();
    }
})




