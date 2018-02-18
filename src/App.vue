<template>
  <div id="app">
    <vue-header></vue-header>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/layouts/Header'

export default {
  name: 'App',
  components:{
    'vue-header' : Header,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
