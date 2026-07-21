const cityinput = document.getElementById("city-input");
const cityname = document.getElementById("city-name");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const searchButton = document.getElementById("search-button");

const apikey="b0e788149d19b75299b444b0d9f36c14";

searchButton.addEventListener("click", () => {
    alert("you entered in: " + cityinput.value);
    // Add your weather 

const city=cityinput.value;
if (city===""){
    alert("please enter a city name");
    return;
}
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

fetch(url).then(response => response.json()).then(data => {
    console.log(data);
    document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind-speed").innerText = "Wind Speed: " + data.wind.speed + " km/s";
    document.getElementById("city-name").innerText = "City: " + data.name;
}).catch(error => {
    console.error("Error fetching weather data:", error);
});
});
