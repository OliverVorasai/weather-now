<template>
  <img :src="iconName" :style="iconSize" />
</template>

<script>
export default {
  name: "AnimatedIconComponent",
  props: {
    weatherType: Number,
    size: String,
    isDay: Boolean,
  },
  computed: {
    iconName() {
      // Based on definitions here: https://openweathermap.org/weather-conditions
      if (this.weatherType >= 200 && this.weatherType <= 232) {
        return require("@/assets/thunder.svg");
      } else if (this.weatherType >= 300 && this.weatherType <= 321) {
        return require("@/assets/rainy-5.svg");
      } else if (this.weatherType === 500) {
        return require("@/assets/rainy-2.svg");
      } else if (this.weatherType === 501) {
        return require("@/assets/rainy-1.svg");
      } else if ([502, 503, 504].indexOf(this.weatherType) >= 0) {
        return require("@/assets/rainy-3.svg");
      } else if (this.weatherType === 511) {
        return require("@/assets/rainy-7.svg");
      } else if (this.weatherType === 520) {
        return require("@/assets/rainy-4.svg");
      } else if (this.weatherType === 521) {
        return require("@/assets/rainy-5.svg");
      } else if ([522, 531].indexOf(this.weatherType) >= 0) {
        return require("@/assets/rainy-6.svg");
      } else if ([600, 611, 612, 620].indexOf(this.weatherType) >= 0) {
        return require("@/assets/snowy-4.svg");
      } else if ([601, 613, 615, 616, 621].indexOf(this.weatherType) >= 0) {
        return require("@/assets/snowy-5.svg");
      } else if ([602, 622].indexOf(this.weatherType) >= 0) {
        return require("@/assets/snowy-6.svg");
      } else if (this.weatherType >= 701 && this.weatherType <= 781) {
        return require("@/assets/cloudy.svg");
      } else if (this.weatherType === 800) {
        return require("@/assets/day.svg");
        // return require("@/assets/night.svg");
      } else if (this.weatherType === 801) {
        return require("@/assets/cloudy-day-3.svg");
        // return require("@/assets/cloudy-night-3.svg");
      } else if (this.weatherType >= 802 && this.weatherType <= 804) {
        return require("@/assets/cloudy.svg");
      } else {
        return "sun";
      }
    },
    iconSize() {
      if (this.size === "6x") {
        return "height: 6em;";
      } else {
        return "height: auto;";
      }
    },
  },
};
</script>

<style scoped>
</style>