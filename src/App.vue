<template>
  <div id="app">
    <h1> Calculadora Vue.Js</h1>
    <calculadora/>
  </div>
</template>

<script>
import calculadora from './components/calculadora/index.vue'

export default {
  name: 'App',
  components: {
    calculadora
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
