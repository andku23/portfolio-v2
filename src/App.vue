<template>
  <div>
    <router-view />
    <NavBar/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style scoped lang="scss">
  @import './scss/global.scss';
</style>
