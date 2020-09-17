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
      return this.searchMade ? "padding-top: 0%" : "padding-top: 20%";
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  display: block;
  text-transform: uppercase;
  color: #ffffff;
  transition: 0.5s;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 769px) {
    font-size: 5rem;
  }
}
</style>