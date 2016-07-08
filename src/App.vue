<template>
  <div id="app">

    <a v-link="{ path: '/' }">Home</a>
    <a v-link="{ path: '/user' }">User</a>
    <h1>{{ msg }}</h1>
    <p>This is an experiment to make html5 mode work on github pages without having a .htaccess configuration.</p>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'HTML5 mode test'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
