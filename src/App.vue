<template>
  <div id="app">
    <HomeView msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HomeView from "./components/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<style>
#app {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
