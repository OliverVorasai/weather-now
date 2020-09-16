<template>
  <h1 :style="style">Weather Now</h1>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    searchMade: Boolean,
  },
  computed: {
    style() {
      return this.searchMade ? "padding-top: 5%" : "padding-top: 20%";
    },
  },
};
</script>

<style scoped>
h1 {
  display: block;
  text-transform: uppercase;
  color: #ffffff;
  transition: 0.5s;
  font-size: 5rem;
}
</style>