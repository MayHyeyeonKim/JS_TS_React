window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  document
    .getElementById("compareBtn")
    .addEventListener("click", compareBtnClick);
  document.getElementById("city1").addEventListener("input", cityInput);
  document.getElementById("city2").addEventListener("input", cityInput);
}

function cityInput(e) {
  const cityId = e.target.id;
  const city = document.getElementById(cityId).value.trim();

  if (city.length === 0) {
    showElement("error-value-" + cityId);
  } else {
    hideElement("error-value-" + cityId);
  }
}

function compareBtnClick() {
  const city1 = document.getElementById("city1").value.trim();
  const city2 = document.getElementById("city2").value.trim();

  if (city1.length === 0) {
    showElement("error-value-city1");
  }
  if (city2.length === 0) {
    showElement("error-value-city2");
  }
  if (city1.length > 0 && city2.length > 0) {
    showElement("forecast");
    hideElement("error-loading-city1");
    hideElement("error-loading-city2");
    showElement("loading-city1");
    showText("loading-city1", `Loading ${city1}...`);
    showElement("loading-city2");
    showText("loading-city1", `Loading ${city2}...`);
    hideElement("results-city1");
    hideElement("results-city2");

    getWeatherForecast(city1, "city1");
    getWeatherForecast(city2, "city2");
  }
}

function getWeatherForecast(city, cityId) {
  const endpoint = "https://api.openweathermap.org/data/2.5/forecast";
  const apiKey = "YOURAPI";
  const queryString = `q=${encodeURI(city)}&units=imperial&appid=${apiKey}`;
  const url = `${endpoint}?&${queryString}`;

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    responseReceived(xhr, cityId, city);
  });

  xhr.responseType = "json";

  xhr.open("GET", url);
  xhr.send();
}

function responseReceived(xhr, cityId, city) {
  hideElement("loading-" + cityId);
  if (xhr.status === 200) {
    showElement("results-" + cityId);

    const cityName = xhr.response.city.name;
    showText(cityId + "-name", cityName);

    const forecast = getSummaryForecast(xhr.response.list);

    let day = 1;
    for (const date in forecast) {
      if (day <= 5) {
        showText(`${cityId}-day${day}-name`, getDayName(date));
        showText(
          `${cityId}-day${day}-high`,
          Math.round(forecast[date].high) + "&deg;"
        );
        showText(
          `${cityId}-day${day}-low`,
          Math.round(forecast[date].low) + "&deg;"
        );
        showImage(`${cityId}-day${day}-image`, forecast[date].weather);
      }
      day++;
    }
  } else {
    const errorId = "error-loading-" + cityId;
    showElement(errorId);
    showText(errorId, `Unable to load city "${city}."`);
  }
}

function getSummaryForecast(forecastList) {
  const forecast = [];

  forecastList.forEach(function (item) {
    const date = item.dt_txt.substr(0, 10);
    const temp = item.main.temp;

    if (date in forecast) {
      if (temp < forecast[date].low) {
        forecast[date].low = temp;
      }
      if (temp > forecast[date].high) {
        forecast[date].high = temp;
      }
    } else {
      const temps = {
        high: temp,
        low: temp,
        weather: item.weather[0].main,
      };
      forecast[date] = temps;
    }
  });
  return forecast;
}

function getDayName(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    timeZone: "UTC",
  });
}

function showElement(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

function hideElement(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

function showText(elementId, text) {
  document.getElementById(elementId).innerHTML = text;
}

function showImage(elementId, weatherType) {
  const weatherImages = {
    Clear: "clear.png",
    Clouds: "clouds.png",
    Drizzle: "drizzle.png",
    Mist: "mist.png",
    Rain: "rain.png",
    Snow: "snow.png",
  };
  const imgUrl = "https://static-resources.zybooks.com/";
  const img = document.getElementById(elementId);
  img.src = imgUrl + weatherImages[weatherType];
  img.alt = weatherType;
}
