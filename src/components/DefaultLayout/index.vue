<template>
  <div class="border-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style scoped>
.border-layout {
  padding: 20px 32px;
  border: 1px solid #dcdcdc;
  max-width: 926px;
}
</style>
