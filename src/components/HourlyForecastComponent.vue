<template>
  <div class="container" id="hourly-forecast-container">
    <div class="hourly-forecast" v-for="forecast in hourly.slice(0, 20)" :key="forecast.dt">
      <span>{{ getDate(forecast.dt) }}</span>
      <br />
      <span>{{ getTime(forecast.dt) }}</span>
      <br />
      <IconComponent :weatherType="forecast.weather[0].id" :size="'lg'" />
      <br />
      <span><TemperatureComponent :temp="forecast.temp" :unit="unit"/></span>
    </div>
  </div>
</template>

<script>
import IconComponent from "./IconComponent";
import TemperatureComponent from "./TemperatureComponent";

export default {
  name: "HourlyForecastComponent",
  components: {
    IconComponent,
    TemperatureComponent
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
  mounted() {
    // Enable horizontal smooth scrolling with mousewheel
    let container = document.getElementById("hourly-forecast-container");
    let scrollAmount = 0;
    let scrollMax = container.scrollWidth - container.clientWidth;

    // Recalculate max width on window resize
    window.addEventListener("resize", () => {
      scrollMax = container.scrollWidth - container.clientWidth;
    });

    container.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        // Ensures that we only scroll up to the  limit of the container, or else
        // scrollAmount would keep increasing every time the user scrolls down
        // and it would take an equal amount of scroll ups to "begin" going left
        scrollAmount = Math.min(scrollAmount + 100, scrollMax);
        // Use scrollTo instead of scrollLeft/scrollRight to enable smooth scroll
        container.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: "smooth",
        });
      } else {
        // Smallest possible scroll position is 0 so make sure it is the limit
        scrollAmount = Math.max(scrollAmount - 100, 0);
        container.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    });
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