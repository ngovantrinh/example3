<template>
  <div>
    <div class="form-information">
      <label for="company">
        <input id="company" type="text" />
      </label>
      <label for="position">
        <input type="text" id="position" />
      </label>
      <label for="time">
        <input type="text" id="time" placeholder="working time" />
      </label>
      <label for="description">
        <textarea id="description" cols="30" rows="10"></textarea>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepThree",
};
</script>

<style></style>
