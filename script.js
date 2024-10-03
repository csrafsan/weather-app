const button = document.getElementById("search-button");
const input = document.getElementById("city-input");


const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const cityCond = document.getElementById('city-cond');

async function getData(cityName) {
   const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=cbd5110ca80142a784435159240110&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener('click',async () => {

    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `Location: ${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = `Local time: ${result.location.localtime}`;
    cityTemp.innerText = `Local Temperature: ${result.current.temp_c} C`;
    cityCond.innerText = `Condition: ${result.current.condition.text}`;

})


// http://api.weatherapi.com/v1/current.json?key=cbd5110ca80142a784435159240110&q=London&aqi=yes