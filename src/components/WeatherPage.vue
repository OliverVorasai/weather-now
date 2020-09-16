<template>
  <div class="container">
    <HeaderComponent :searchMade="searchMade" />
    <SearchFormComponent :callback="getWeather" v-model="location" />
    <div class="fadeIn" :style="style">
      <div class="grid-container" v-if="weatherObject">
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
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent";
import SearchFormComponent from "./SearchFormComponent";
import PrimaryWeatherComponent from "./PrimaryWeatherComponent";
import SecondaryWeatherComponent from "./SecondaryWeatherComponent";

export default {
  name: "WeatherPage",
  components: {
    HeaderComponent,
    SearchFormComponent,
    PrimaryWeatherComponent,
    SecondaryWeatherComponent,
  },
  data() {
    return {
      location: null,
      weatherObject: null,
      temperatureUnit: "f",
      error: false,
      forecast: null,
      searchMade: false,
    };
  },
  computed: {
    style() {
      return this.searchMade ? "opacity: 1" : "opacity: 0";
    },
  },
  methods: {
    getWeather() {
      let apiKey = process.env.VUE_APP_API_KEY;
      let weather = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;
      let forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${this.location}&appid=${apiKey}`;
      Promise.all([fetch(weather), fetch(forecast)])
        .then(([res1, res2]) => {
          if (res1.ok && res2.ok) {
            return Promise.all([res1.json(), res2.json()]);
          } else {
            throw Error(res1.statusText, res2.statusText);
          }
        })
        .then(([data1, data2]) => {
          this.weatherObject = data1;
          this.forecast = data2;
          this.searchMade = true;
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.grid-container {
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

.fadeIn {
  transition: 0.5s 0.5s;
}
</style>