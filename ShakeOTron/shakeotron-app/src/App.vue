<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Navigation name = "navigation menu"/>
<h1>Hellooo</h1>

<DrinksApi></DrinksApi>
<SobrietyCheck>
</SobrietyCheck>

</template>



<script>
import DrinksApi from './components/DrinksApi.vue';
import Navigation from './components/Navigation.vue';
import SobrietyCheck from './components/SobrietyCheck.vue';



export default {
  name: 'App',
  components: {
    Navigation,
    DrinksApi,
    SobrietyCheck
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
