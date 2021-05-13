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

