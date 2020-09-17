<template>
  <div class="container">
    <div class="grid-container">
      <div class="grid-item-1">
        <vue-fontawesome icon="exclamation-circle" size="3x" />
      </div>
      <div class="grid-item-2">
        <p>The city or zipcode could not be found, please try again.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorComponent",
};
</script>

<style scoped>
.container {
  margin: 0 20px;
}

.grid-container {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;
  align-items: center;
  height: 100px;
}

.grid-item-1 {
  grid-area: 1 / 1 / 2 / 2;
}

.grid-item-2 {
  grid-area: 1 / 2 / 2 / 4;
  text-align: left;
}

</style>