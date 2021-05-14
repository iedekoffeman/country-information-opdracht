/**
 * Functions are defined in functions.js
 */
const inputField = document.getElementById("user-input");
const searchButton = document.getElementById('searchButton');
let query = ``;

searchButton.addEventListener('click',  () => {

    query = inputField.value;
    getCountryData(query);
    inputField.value = "";

});
//Opdracht 8
inputField.addEventListener('keyup', event => {
    if(event.key === 'Enter') {

        query = inputField.value;
        getCountryData(query);
        inputField.value = "";

    }
})




