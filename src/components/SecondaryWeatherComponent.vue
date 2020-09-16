<template>
  <div class="container">
    <div class="grid-container">
      <div>
        <TemperatureComponent :temp="feelsLike" :unit="unit" :className="'top'" />
        <p class="bottom">Feels Like</p>
      </div>
      <div>
        <p class="top">
          {{ convertedWind }}
          <template v-if="unit === 'f'">mph</template>
          <template v-else-if="unit === 'c'">m/s</template>
        </p>
        <p class="bottom">Wind</p>
      </div>
      <div>
        <p class="top">
          {{ convertedVisibility }}
          <template v-if="unit === 'f'">mi</template>
          <template v-else-if="unit === 'c'">km</template>
        </p>
        <p class="bottom">Visibility</p>
      </div>
      <div>
        <p class="top">
          {{ convertedPressure }}
          <template v-if="unit === 'f'">inHg</template>
          <template v-else-if="unit === 'c'">hpa</template>
        </p>
        <p class="bottom">Barometer</p>
      </div>
      <div>
        <p class="top">{{ humidity }}%</p>
        <p class="bottom">Humidity</p>
      </div>
      <div>
        <p class="top">{{ convertedTime }}</p>
        <p class="bottom">Time</p>
      </div>
    </div>
  </div>
</template>

<script>
import TemperatureComponent from "./TemperatureComponent";

export default {
  name: "SecondaryWeatherComponent",
  components: {
    TemperatureComponent,
  },
  props: {
    feelsLike: Number,
    wind: Object,
    visibility: Number,
    pressure: Number,
    humidity: Number,
    timezone: Number,
    unit: String,
  },
  computed: {
    convertedVisibility() {
      return this.unit === "f"
        ? Math.round((this.visibility / 1609.344) * 100) / 100
        : Math.round((this.visibility / 1000) * 100) / 100;
    },
    convertedPressure() {
      return this.unit === "f"
        ? Math.round((this.pressure / 3386) * 10000) / 100
        : this.pressure;
    },
    convertedWind() {
      return this.unit === "f"
        ? Math.round(this.wind.speed * 2.237 * 100) / 100
        : Math.round(this.wind.speed);
    },
    convertedTime() {
      //This function returns the current time for a given timezone
      //Get a Date object for the local machine
      let d = new Date();

      //Get the number of milliseconds since UNIX epoch
      let local_time = d.getTime();

      //Get the local timezone offset, convert to milliseconds
      let local_offset = d.getTimezoneOffset() * 60000;

      //Get the number of milliseconds since UNIX epoch in relation to UTC+0
      let utc = local_time + local_offset;

      //Get the offset of the target city, convert to milliseconds
      let offset = this.timezone * 1000;

      //Get the number of milliseconds since UNIX epoch in relation to the target city
      let city_time = utc + offset;

      //Make a new Date object with the new city's time
      let nd = new Date(city_time);

      return nd.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 20px;
}

.grid-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1em;
}

p {
  &.top {
    font-size: 1.75em;
  }
  &.bottom {
    font-size: 1em;
  }
}
</style>