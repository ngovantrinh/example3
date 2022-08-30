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
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
</style>
