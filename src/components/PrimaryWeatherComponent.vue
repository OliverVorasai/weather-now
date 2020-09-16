<template>
  <div class="container">
    <div class="grid-container">
      <div class="header-item">
        <h2>{{city}}, {{country}}</h2>
      </div>
      <div class="icon-item">
        <vue-fontawesome :icon="iconName" size="6x" />
      </div>
      <div class="temp-item">
        <p class="temp-item-top">
          {{ convertedTemp }}
          <template v-if="unit === 'f'">°F</template>
          <template v-else-if="unit === 'c'">°C</template>
        </p>
        <p class="temp-item-bottom">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrimaryWeatherComponent",
  props: {
    city: String,
    country: String,
    weatherType: Number,
    temp: Number,
    description: String,
    unit: String,
  },
  computed: {
    convertedTemp() {
      return this.unit === "f"
        ? Math.round((this.temp - 273.15) * (9 / 5) + 32)
        : Math.round(this.temp - 273.15);
    },
    iconName() {
      if (this.weatherType >= 200 && this.weatherType <= 232) {
        return "bolt";
      } else if (this.weatherType >= 300 && this.weatherType <= 531) {
        return "cloud-rain";
      } else if (this.weatherType >= 600 && this.weatherType <= 622) {
        return "snow-flake";
      } else if (this.weatherType >= 701 && this.weatherType <= 781) {
        return "smog";
      } else if (this.weatherType === 800) {
        return "sun";
      } else if (this.weatherType >= 801 && this.weatherType <= 804) {
        return "cloud";
      } else {
        return "sun";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  text-align: left;
  margin: 0 20px;
  transition: 1s;
}

h2 {
  font-size: 4em;
}

.grid-container {
  display: grid;
  grid-gap: 10px;
}

.header-item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.icon-item {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.temp-item {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  p {
    line-height: 1em;
    &.temp-item-top {
      font-size: 3em;
    }
    &.temp-item-bottom {
      font-size: 2em;
      padding-top: 10px;
    }
  }
}
</style>