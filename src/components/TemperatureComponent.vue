<template>
  <p :class="className">
    {{ convertedTemp }}°
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