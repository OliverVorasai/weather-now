<template>
  <div id="app">
    <WeatherPage />
  </div>
</template>

<script>
import WeatherPage from "./components/WeatherPage.vue";

export default {
  name: "App",
  components: {
    WeatherPage,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-family: 'Dosis', sans-serif;
}

body {
  background-image: url("~@/assets/sunset.svg");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
</style>
