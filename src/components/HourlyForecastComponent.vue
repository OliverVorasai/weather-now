<template>
  <div class="container">
    <h2>Hourly</h2>
    <HorizontalScrollWrapper :containerName="'hourly-forecast-container'">
      <div class="hourly-forecast" v-for="forecast in hourly.slice(0, 20)" :key="forecast.dt">
        <span>{{ getDate(forecast.dt) }}</span>
        <br />
        <span>{{ getTime(forecast.dt) }}</span>
        <br />
        <IconComponent :weatherType="forecast.weather[0].id" :size="'lg'" />
        <br />
        <span>
          <TemperatureComponent :temp="forecast.temp" :unit="unit" />
        </span>
      </div>
    </HorizontalScrollWrapper>
  </div>
</template>

<script>
import IconComponent from "./IconComponent";
import TemperatureComponent from "./TemperatureComponent";
import HorizontalScrollWrapper from "./HorizontalScrollWrapper";

export default {
  name: "HourlyForecastComponent",
  components: {
    IconComponent,
    TemperatureComponent,
    HorizontalScrollWrapper
  },
  props: {
    hourly: Array,
    unit: String,
  },
  methods: {
    getDate(timestamp) {
      let d = new Date(timestamp * 1000); //Convert seconds to milliseconds
      return d.toLocaleDateString([], {
        month: "numeric",
        day: "numeric",
      });
    },
    getTime(timestamp) {
      let d = new Date(timestamp * 1000);
      return d.toLocaleTimeString([], {
        hour: "2-digit",
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 40px 20px 0px 20px;
}

h2 {
  text-align: left;
  font-size: 2em;
}

.hourly-forecast {
  flex: 0 0 auto;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1em;
  width: 75px;
  margin: 0 20px;
}
</style>