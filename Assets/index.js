  const weather = {
    apiKey: "8854f12c8ed8e64ffd06b1b0e0c9f7be",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
         .then((response) => {
           if (!response.ok) {
             alert("No weather found.");
             throw new Error("No weather found.");
          }
           return response.json();
         })
         .then((data) => this.displayWeather(data));
    },

    displayWeather: function ( data ) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log( name, icon, description, temp, humidity, speed );
        document.querySelector(".city").innerText = " weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°c";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "°c";
        document.querySelector(".wind").innerText = "wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
        url("https://source.unsplash.com/user/erondu/1600x900/?landscape");
    },

    search: function() {
       this.fetchWeather(document.querySelector(".search-box").value); 
    },
};

document.querySelector(".search-box").addEventListener("click", function () {
  });
  
  document
    .querySelector(".search-box")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });

  weather.fetchWeather("Atlanta");