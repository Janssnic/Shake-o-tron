<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Navigation name = "navigation menu"/>
<h1>Hellooo</h1>

<DrinksApi></DrinksApi>

</template>



<script>
import DrinksApi from './components/DrinksApi.vue';
import Navigation from './components/Navigation.vue';


export default {
  name: 'App',
  components: {
    Navigation,
    DrinksApi
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
