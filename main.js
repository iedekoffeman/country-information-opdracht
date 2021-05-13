const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', async () => {

    const response = await axios.get ("https://restcountries.eu/rest/v2/name/afganistan");

    console.log(response.data);

    //Opdracht2 en 3
    const country = response.data[0].name;
    const capital = response.data[0].capital;
    const subRegion = response.data[0].subregion;
    const population = response.data[0].population;

    console.log(`${country} is situated in ${subRegion}. It has a population of ${population} people`);
    console.log(`The capital is ${capital}`);

    //opdracht 4
    function getCurrencyString (countryCurrency) {
        let currencyString = "";

        for (let i = 0; i < countryCurrency.length; i++) {

            if (i === 0) {
                currencyString += `and you can pay with ${countryCurrency[i].name}'s `;
            } else {
                currencyString += `and ${countryCurrency[i].name}'s`;
            }

        }

        return currencyString;
    }

    console.log(getCurrencyString(response.data[0].currencies));

    //Opdracht 6
    //Iets andere oplossing geprobeerd dan de vorige opdracht. Het werkt maar twijfel nog of dit de meest efficiënte manier is.
    function getCountryLanguages(countryLanguages) {

        const [first, second, ...rest] = countryLanguages;

        let languagesString = `They speak ${first.name} `;

        if(!rest) {
            languagesString += `and `;
        } else {
            languagesString += `,`;
        }

        languagesString += second.name;

            for(let i = 0; i < rest.length; i++) {

                languagesString += ` and ${rest[i].name}`;

            }

        return languagesString;
    }

    console.log(getCountryLanguages(response.data[0].languages));
});

