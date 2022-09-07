<template>
  <Button
    :class="className"
    :type="typeButton"
    @click="handleFunction"
    :disabled="buttonStatus"
    >{{ nameButton }}
  </Button>
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
    buttonStatus: {
      type: Boolean,
    },
  },
  methods: {
    handleFunction(e) {
      // console.log(this.buttonStatus);
      this.$emit("onHandle", e);
    },
  },
};
</script>
<style scope>
</style>