<template>
  <div class="container">
    <button id="fahrenheit-button" class="button black-button" @click="fahrenheit">°F</button>
    <button id="celsius-button" class="button white-button" @click="celsius">°C</button>
  </div>
</template>

<script>
export default {
  name: "UnitSwitchComponent",
  methods: {
    fahrenheit() {
      this.fButton.classList.add("black-button");
      this.fButton.classList.remove("white-button");
      this.cButton.classList.add("white-button");
      this.cButton.classList.remove("black-button");
      this.$emit("clicked", "f");
    },
    celsius() {
      this.fButton.classList.add("white-button");
      this.fButton.classList.remove("black-button");
      this.cButton.classList.add("black-button");
      this.cButton.classList.remove("white-button");
      this.$emit("clicked", "c");
    },
  },
  computed: {
    fButton() {
      return document.getElementById("fahrenheit-button");
    },
    cButton() {
      return document.getElementById("celsius-button");
    },
  },
};
</script>

<style scoped lang="scss">
button {
  display: block;
  width: 55px;
  height: 55px;
  margin-bottom: 10px;
  &:active {
    top: 1px;
    left: 1px;
  }
  &:focus:not(:active) {
    box-shadow: none;
  }
}
.white-button {
  background-color: transparent;
  border-color: white;
  color: white;
  &:active,
  &:focus,
  &:hover {
    border-color: white;
    color: white;
  }
}
.black-button {
  background-color: white;
  border-color: black;
  border-width: 2px;
  color: black;
  &:active,
  &:focus,
  &:hover {
    border-color: black;
    color: black;
  }
}
</style>