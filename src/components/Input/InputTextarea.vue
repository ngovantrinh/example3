<template>
  <label for="company">
    <div class="title">
      <span v-if="must" class="required">Must</span>
      <span>{{ title }}</span>
    </div>
    <textarea
      v-model="handleChange"
      class="input-line"
      id="company"
      type="text"
      cols="30"
      rows="5"
      maxlength="1000"
    />
    <p>{{ handleChange.length }}/1000</p>
  </label>
</template>

<script>
export default {
  name: "InputTextarea",
  props: {
    title: {
      type: String,
    },
    must: {
      type: Boolean,
    },
  },
  data() {
    return {
      handleChange: "",
    };
  },
  watch: {
    handleChange(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>