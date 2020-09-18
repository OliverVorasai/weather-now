<template>
  <div :id="containerName" class="forecast-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HorizontalScrollWrapper",
  props: {
    containerName: String,
  },
  mounted() {
    // Enable horizontal smooth scrolling with mousewheel
    let container = document.getElementById(this.containerName);
    let scrollAmount = 0;
    let scrollMax = container.scrollWidth - container.clientWidth;

    // Recalculate max width on window resize
    window.addEventListener("resize", () => {
      scrollMax = container.scrollWidth - container.clientWidth;
    });

    container.addEventListener("wheel", (e) => {
      // Prevent default window scroll
      e.preventDefault();
      if (e.deltaY > 0) {
        // Ensures that we only scroll up to the  limit of the container, or else
        // scrollAmount would keep increasing every time the user scrolls down
        // and it would take an equal amount of scroll ups to "begin" going left
        scrollAmount = Math.min(scrollAmount + 100, scrollMax);
        // Use scrollTo instead of scrollLeft/scrollRight to enable smooth scroll
        container.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: "smooth",
        });
      } else {
        // Smallest possible scroll position is 0 so make sure it is the limit
        scrollAmount = Math.max(scrollAmount - 100, 0);
        container.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    });
  },
};
</script>

<style scoped>
.forecast-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 10px;
}
</style>