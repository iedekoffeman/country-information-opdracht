
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', async () => {

    const response = await axios.get (

        "https://restcountries.eu/rest/v2/name/belgium"

    );
    console.log(response.data);
    //Opdracht2 en 3
    let country = response.data[0].name;
    let capital = response.data[0].capital;
    let subRegion = response.data[0].subregion;
    let population = response.data[0].population;
    console.log(`${country} is situated in ${subRegion}. It has a population of ${population} people`);
    console.log(`The capital is ${capital}`);
});

