const weather = {
  // this property contains my apiKey with the weather 
    apiKey: `8854f12c8ed8e64ffd06b1b0e0c9f7be`,
    // this function fetches the weather data through my api key
      fetchWeather: function (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`) 
      // this attaches callback for the resolution and or rejection of my promise
         .then((response) => {
           if (!response.ok) {
             alert("No weather found.");
             throw new Error("No weather found.");
          }
           return response.json();
         })
         .then((data) => this.weather(data));
    },
// this is the displaying data for the weather information
    weather: function ( data ) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // her im console logging the weather data
        console.log( name, icon, description, temp, humidity, speed );
        // returns the first Element within the document that matches the specified selector, or group of selectors
        document.querySelector(".city").innerText =`weather in${name}`;
        document.querySelector(".icon").src =`https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `temp:°c`;
        document.querySelector(".humidity").innerText =`humidity:${humidity}°c`;
        document.querySelector(".wind").innerText =`windspeed:${speed}km/h`;
        document.querySelector(".weather").classLast.remove("loading");
    },
// this function returns a reference to the first object with the specified value of the ID
    search: function() {
       var w = this.fetchWeather(document.getElementById("search").value); 
       console.log(w);
       return w;
    },
};


  
  document
    .querySelector("#btn")
    .addEventListener("click", function () {
        weather.search();  
    });
    