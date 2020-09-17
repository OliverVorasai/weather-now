<template>
  <div id="app">
    <div class="container">
      <HeaderComponent :searchMade="searchMade" />
      <SearchFormComponent :callback="getWeather" v-model="location" />
      <transition name="fade" mode="out-in">
        <div v-if="show && !error" key="weather-info">
          <div class="app-grid-container" v-if="weatherObject">
            <PrimaryWeatherComponent
              :city="weatherObject.name"
              :country="weatherObject.sys.country"
              :weatherType="weatherObject.weather[0].id"
              :temp="weatherObject.main.temp"
              :description="weatherObject.weather[0].main"
              :unit="temperatureUnit"
            />
            <SecondaryWeatherComponent
              :feelsLike="weatherObject.main.feels_like"
              :wind="weatherObject.wind"
              :visibility="weatherObject.visibility"
              :pressure="weatherObject.main.pressure"
              :humidity="weatherObject.main.humidity"
              :timezone="weatherObject.timezone"
              :unit="temperatureUnit"
            />
          </div>
          <div v-if="forecast">
            <HourlyForecastComponent :hourly="forecast.hourly" :unit="temperatureUnit" />
            <DailyForecastComponent :daily="forecast.daily" :unit="temperatureUnit" />
          </div>
        </div>
        <div v-else-if="error" key="error-info">
          <ErrorComponent />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import SearchFormComponent from "./components/SearchFormComponent";
import PrimaryWeatherComponent from "./components/PrimaryWeatherComponent";
import SecondaryWeatherComponent from "./components/SecondaryWeatherComponent";
import HourlyForecastComponent from "./components/HourlyForecastComponent";
import DailyForecastComponent from "./components/DailyForecastComponent";
import ErrorComponent from "./components/ErrorComponent";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SearchFormComponent,
    PrimaryWeatherComponent,
    SecondaryWeatherComponent,
    HourlyForecastComponent,
    DailyForecastComponent,
    ErrorComponent,
  },
  data() {
    return {
      location: null,
      weatherObject: null,
      temperatureUnit: "f",
      error: false,
      forecast: null,
      searchMade: false,
      show: false,
    };
  },
  methods: {
    getWeather() {
      let apiKey = process.env.VUE_APP_API_KEY;
      let zipCodeRegex = /\d{5}/;
      let weather = "";
      this.location = this.location.trim().toLowerCase();

      if (zipCodeRegex.test(this.location)) {
        weather = `https://api.openweathermap.org/data/2.5/weather?zip=${this.location}&appid=${apiKey}`;
      } else {
        weather = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;
      }

      Promise.all([fetch(weather)])
        .then(([res1]) => {
          if (res1.ok) {
            return Promise.all([res1.json()]);
          } else {
            throw Error(res1.statusText);
          }
        })
        .then(([data1]) => {
          this.weatherObject = data1;
          this.searchMade = true;
          this.error = false;
          this.getForecast(
            this.weatherObject.coord.lat,
            this.weatherObject.coord.lon
          );
          this.sleep();
        })
        .catch((error) => {
          this.error = error;
        });
    },
    sleep() {
      // Wait arbitrary amount of time so animations can complete
      // TODO: Find a better method than this
      return new Promise(() => {
        setTimeout(() => {
          this.show = true;
        }, 1000);
      });
    },
    getForecast(lat, lon) {
      let apiKey = process.env.VUE_APP_API_KEY;
      let forecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&appid=${apiKey}`;

      Promise.all([fetch(forecast)])
        .then(([res1]) => {
          if (res1.ok) {
            return Promise.all([res1.json()]);
          } else {
            throw Error(res1.statusText);
          }
        })
        .then(([data1]) => {
          this.forecast = data1;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-family: "Dosis", sans-serif;
}

body {
  background-image: url("~@/assets/sunset.svg");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}

.app-grid-container {
  display: grid;
  margin-top: 40px;
  @media only screen and (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
  }
  @media only screen and (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  transition: 0.5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
