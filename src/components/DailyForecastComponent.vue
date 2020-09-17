<template>
  <div class="container">
    <h2>Daily</h2>
    <HorizontalScrollWrapper :containerName="'daily-forecast-container'">
      <div class="daily-forecast" v-for="forecast in daily.slice(0, 20)" :key="forecast.dt">
        <span class="left-span">{{ getDate(forecast.dt) }}</span>
        <br />
        <IconComponent :weatherType="forecast.weather[0].id" :size="'lg'" />
        <br />
        <span class="inline-span">
          <TemperatureComponent :temp="forecast.temp.max" :unit="unit" />
          <TemperatureComponent :temp="forecast.temp.min" :unit="unit" />
        </span>
        <span
          class="block-span"
        >{{ forecast.weather[0].description.charAt(0).toUpperCase() + forecast.weather[0].description.slice(1) }}</span>
      </div>
    </HorizontalScrollWrapper>
  </div>
</template>

<script>
import IconComponent from "./IconComponent";
import TemperatureComponent from "./TemperatureComponent";
import HorizontalScrollWrapper from "./HorizontalScrollWrapper";

export default {
  name: "DailyForecastComponent",
  components: {
    IconComponent,
    TemperatureComponent,
    HorizontalScrollWrapper
  },
  props: {
    daily: Array,
    unit: String,
  },
  methods: {
    getDate(timestamp) {
      let d = new Date(timestamp * 1000); //Convert seconds to milliseconds
      return d.toLocaleDateString([], {
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 40px 20px 0px 20px;
}

h2 {
  text-align: left;
  font-size: 2em;
}

.daily-forecast {
  flex: 0 0 auto;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1em;
  width: 150px;
  margin: 0 20px;
  text-align: left;
}

.inline-span {
  p {
    display: inline-block;
    font-size: 1.25em;
  }
  p:nth-child(2) {
    margin-left: 10px;
    font-size: 1em;
  }
}

.block-span {
  display: block;
}
</style>