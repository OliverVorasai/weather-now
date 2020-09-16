<template>
  <p :class="className">
    {{ convertedTemp }}
    <template v-if="unit === 'f'">°F</template>
    <template v-else-if="unit === 'c'">°C</template>
  </p>
</template>

<script>
export default {
  name: "TemperatureComponent",
  props: {
    temp: Number,
    unit: String,
    className: String,
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

<style scoped>
</style>