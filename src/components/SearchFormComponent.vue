<template>
  <div class="container">
    <form id="submitForm" @submit="callback" onsubmit="return false">
      <div class="field">
        <div class="control has-icons-left">
          <input
            class="input"
            type="text"
            :value="location"
            @input="$emit('input', $event.target.value)"
            placeholder="Enter City or Zipcode"
          />
          <span class="icon is-small is-left">
            <vue-fontawesome icon="search" />
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchFormComponent",
  props: {
    callback: Function,
    location: String,
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 20px;
}

form {
  max-width: 500px;
  margin: 0px auto;
  transition: all 0.8s ease 0.5s;

  input {
    border-radius: 30px;
    font-family: "Dosis", sans-serif;
    border-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 3px;
    &:hover {
      border-color: white;
    }
    &:active,
    &:focus {
      border-color: white;
      box-shadow: rgba(0, 0, 0, 0.1) 5px 5px 5px,
        rgba(0, 0, 0, 0.05) 10px 10px 10px;
    }
  }
  .icon {
    transition: 0.3s;
  }
}
</style>