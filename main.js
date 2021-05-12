
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', async () => {

    const response = await axios.get (

        "https://restcountries.eu/rest/v2/name/belgium"

    );
    let country = response.data[0].name;
    let subRegion = response.data[0].subregion;
    let population = response.data[0].population;
    console.log(`${country} is situated in ${subRegion}. It has a population of ${population} people`);

});

