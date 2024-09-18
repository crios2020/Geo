const api = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: `https://api.openweathermap.org/data/2.5/weather`
}


const city = document.getElementById('ciudad');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');

function updateImages(data) {
    const temp = toCelsius(data.main.temp);
    let src = 'images/temp-mid.png';
    if (temp > 26) {
        src = 'images/temp-high.png';
    } else if (temp < 20) {
        src = 'images/temp-low.png';
    }
    tempImg.src = src;
}

async function search() {
    query = "Buenos Aires"
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const data = await response.json();
        temp.value = `${toCelsius(data.main.temp)}c`;
        weather.value = data.weather[0].description;
        updateImages(data);
    } catch (err) {
        console.log(err);
        alert('Hubo un error');
    }
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}



