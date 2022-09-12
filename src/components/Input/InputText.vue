<template>
  <label for="company">
    <div class="title">
      <span v-if="must" class="required">Must</span>
      <span>{{ title }}</span>
    </div>
    <input
      v-model="handleChange"
      class="input-line"
      :class="{ wage: wage }"
      id="company"
      type="text"
      maxlength="100"
      required
    />
    <span v-show="wage">VND</span>
  </label>
</template>

<script>
export default {
  name: "InputText",
  props: {
    title: {
      type: String,
    },
    must: {
      type: Boolean,
    },
    wage: {
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