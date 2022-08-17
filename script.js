var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');
var weather = {
    "apiKey": "91490289d3ed1657769e6fb58b8a3895"
}
//let city = 'Saint Paul'
function getAPI() {
    let city = document.querySelector("#inputBar")
   fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city.value + "&appid=91490289d3ed1657769e6fb58b8a3895")
   console.log(city)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (response) {
        console.log(response);
        var temp = 1.8*(response.main.temp - 273) + 32;
        var renderTemp = document.querySelector("#temp");
        renderTemp.textContent = temp + "F";
        console.log(temp)
    })
}

fetchBtn.on("click", getAPI);