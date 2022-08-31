<template>
  <Button :class="className" :type="typeButton" @click="handleFunction">{{
    nameButton
  }}</Button>
</template>
<script>
export default {
  name: "ButtonBase",
  props: {
    typeButton: {
      type: String,
    },
    nameButton: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  methods: {
    handleFunction(e) {
      this.$emit("onHandle", e);
    },
  },
};
</script>
<style scope>
</style>