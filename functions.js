async function getCountryData() {

    const response =  await axios.get ("https://restcountries.eu/rest/v2/name/belgium");
    console.log(response.data[0]);

    const{data: country} = response;

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


}

//opdracht 4
function getCurrenciesInString (countryCurrencies) {
    let currenciesString = "";

    for (let i = 0; i < countryCurrencies.length; i++) {

        if (i === 0) {
            currenciesString += `and you can pay with ${countryCurrencies[i].name}'s `;
        } else {
            currenciesString += `and ${countryCurrencies[i].name}'s`;
        }

    }

    return currenciesString;
}
//Opdrach 6
//Iets andere oplossing geprobeerd dan de vorige opdracht. Het werkt maar twijfel nog of dit de meest efficiënte manier is.
function getCountryLanguages(countryLanguages) {

    const [first, second, ...rest] = countryLanguages;

    let languagesString = `They speak ${first.name}`;

    if(!rest) {
        languagesString += `and `;
    } else {
        languagesString += `, `;
    }

    languagesString += second.name;

    for(let i = 0; i < rest.length; i++) {

        languagesString += ` and ${rest[i].name}`;

    }

    return languagesString;
}
//Opdracht 7
function addToPage(elementId, elementValue) {

    const element = document.getElementById(`${elementId}`);
    element.textContent = elementValue;
}

