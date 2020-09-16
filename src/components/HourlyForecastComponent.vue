<template>
  <div class="container">
    <div class="hourly-forecast" v-for="forecast in hourly.slice(0, 20)" :key="forecast.dt">
      <span>{{ getDate(forecast.dt) }}</span>
      <br />
      <span>{{ getTime(forecast.dt) }}</span>
      <br />
      <IconComponent :weatherType="forecast.weather[0].id" :size="'lg'" />
      <br />
      <span>{{ forecast.temp }}</span>
    </div>
  </div>
</template>

<script>
import IconComponent from "./IconComponent";

export default {
  name: "HourlyForecastComponent",
  components: {
    IconComponent,
  },
  props: {
    hourly: Array,
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
        hour: "2-digit"
      }) 
    }
  },
};
</script>

<style scoped>
.container {
  margin-top: 40px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
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