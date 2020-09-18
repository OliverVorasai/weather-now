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
        <TemperatureComponent :temp="temp" :unit="unit" :className="'temp-item-top'" />
        <p class="temp-item-bottom">{{ description }}</p>
        <UnitSwitchComponent @clicked="emitUnit" />
      </div>
    </div>
  </div>
</template>

<script>
import IconComponent from "./IconComponent";
import TemperatureComponent from "./TemperatureComponent";
import UnitSwitchComponent from "./UnitSwitchComponent";

export default {
  name: "PrimaryWeatherComponent",
  components: {
    IconComponent,
    TemperatureComponent,
    UnitSwitchComponent,
  },
  props: {
    city: String,
    country: String,
    weatherType: Number,
    temp: Number,
    description: String,
    unit: String,
  },
  methods: {
    emitUnit(e) {
      this.$emit("clicked", e);
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
}

.header-item {
  grid-area: 1 / 1 / 2 / 3;
}

.icon-item {
  grid-area: 2 / 1 / 3 / 2;
}

.temp-item {
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  p {
    line-height: 1em;
    &.temp-item-top {
      font-size: 3em;
      grid-area: 1 / 1 / 2 / 2;
    }
    &.temp-item-bottom {
      font-size: 2em;
      padding-top: 10px;
      grid-area: 2 / 1 / 3 / 2;
    }
  }
  div {
    grid-area: 1 / 2 / 3 / 3;
  }
}
</style>