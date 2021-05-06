var button = document.querySelector(".submit")
var input = document.querySelector(".input_text")
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var pressure = document.querySelector(".pressure");
var lowTemp = document.querySelector(".lowTemp");
var humidity = document.querySelector(".humidity");
var desc = document.querySelector(".desc");

button.addEventListener("click", function(name){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=9118fa912d79b8a53520c7295f7b7c49")
        .then(response => response.json())
        .then(data => {
            var nameValue = data["name"];
            var tempValue = data["main"]["temp"];
            var descValue = data["weather"][0]["description"];
            var pressureValue = data["main"]["pressure"];
            var lowTempValue = data["main"]["low"];
            var humidityValue = data["main"]["humidity"];

            main.innerHTML = nameValue;
            desc.innerHTML = descValue + " in " + input.value + " today";
            temp.innerHTML = "Current temp right now is " + tempValue;
            pressure.innerHTML = pressureValue + " is the pressure in " + input.value;
            lowTemp.innerHTML = "Low temp today is " + lowTempValue;
            humidity.innerHTML = "Humidity today is " + humidityValue;    
            input.value = "";
        })

        .catch(err => alert("Try again"))
})



    
