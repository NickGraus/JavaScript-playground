// let response = fetch(https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key})

// async function funcName(url){
//     const response = await fetch(url);
//     var data = await response.json();
// }

window.addEventListener("load", () => {
  let lon;
  let lat;

  let tempDegree = document.querySelector(".card-text");
  let location = document.querySelector(".card-title");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const key = "d77497ebe6cd5968a499ff7b6372dd3c";
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp, temp_min, temp_max } = data.main;
          const { name } = data;

          //Set DOM elements from the API
          tempDegree.textContent = Math.round((temp - 273.15) * 10) / 10;
          location.textContent = name;
        });
    });
  }
});
