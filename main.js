/**
 * Functions are defined in functions.js
 */

const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', async () => {

    const {data: country} = await axios.get ("https://restcountries.eu/rest/v2/name/belgium");

    console.log(country);

    //Destructuring object
    const { name, capital, subregion, population, currencies, languages, flag } = country[0];

    //Opdracht2 en 3
    const countryGeographicInfo = `${name} is situated in ${subregion}. It has a population of ${population} people.`;
    const capitalInfo = `The capital is ${capital} `;
    //Log to console
    console.log(countryGeographicInfo);
    console.log(capitalInfo);

    //Opdracht 4
    //Call function getCurrenciesInString
    console.log(getCurrenciesInString(currencies));

    //Opdracht 5
    //Checked with aruba and germany, still works.

    //Opdracht 6
    //Call function getCountryLanguages and log to console
    console.log(getCountryLanguages(languages));

    //Opdracht 7
    //Add flag
    const urlFlag = flag;
    const divFlagElement = document.getElementById('flag');
    const imgFlagElement = document.createElement('img');
    imgFlagElement.setAttribute(`src`, urlFlag );
    divFlagElement.appendChild(imgFlagElement);

    //Call function addToPage for all other elements
    addToPage("country-name", name);
    addToPage("country-geographic", countryGeographicInfo );
    addToPage("capital-valuta", capitalInfo + getCurrenciesInString(currencies))
    addToPage("country-languages", getCountryLanguages(languages))
});




