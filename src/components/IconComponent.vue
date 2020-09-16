<template>
  <vue-fontawesome :icon="iconName" :size="size" />
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    weatherType: Number,
    size: String,
  },
  computed: {
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

<style scoped>
</style>