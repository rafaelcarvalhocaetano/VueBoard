<template>
  <div id="app">
    <router-link to="/form">Form</router-link>
    <router-link to="/board">Board</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

#app {
  padding: 0;
  margin: 0;
  width: 300px;
  height: 400px;
  background-color: tomato;
}
</style>

<script>
export default {
  name: 'App'
}
</script>