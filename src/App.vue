<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
  @import './scss/global.scss';
</style>
