<template>
  <div id="app">
    <div class="nav">
      <navigation></navigation>
    </div>
    <div class="content">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import NavComponent from './components/NavComponent/NavComponent'

  export default {
    components: {
      navigation: NavComponent
    },
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .nav {
    width: 17rem;
    float: left;
    position: relative;
  }

  .content {
    width: calc(100% - 17rem);
    float: left;
    position: relative;
  }
</style>
