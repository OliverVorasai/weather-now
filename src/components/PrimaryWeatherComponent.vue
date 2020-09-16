<template>
  <div class="container">
    <div class="grid-container">
      <div class="header-item">
        <h2>{{city}}, {{country}}</h2>
      </div>
      <div class="icon-item">
        <IconComponent :weatherType="weatherType" :size="'6x'" />
      </div>
      <div class="temp-item">
        <p class="temp-item-top">
          {{ convertedTemp }}
          <template v-if="unit === 'f'">°F</template>
          <template v-else-if="unit === 'c'">°C</template>
        </p>
        <p class="temp-item-bottom">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconComponent from "./IconComponent";
export default {
  name: "PrimaryWeatherComponent",
  components: {
    IconComponent,
  },
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