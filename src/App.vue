<template>
  <v-app id="app">
    <notifications />
    <AppHeader />
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Tilt Neon', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ddd0c8;
  ::v-deep a {
    color: whitesmoke;
  }
  ::v-deep a.router-link-active.router-link-exact-active {
    color: rgb(26, 202, 70);
  }
}
</style>
