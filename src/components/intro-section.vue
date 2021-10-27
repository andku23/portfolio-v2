<template>
  <div class = "intro-container">
    <background background-color="#686800"/>
    <Carousel/>
  </div>
</template>

<script>
import Carousel from "./Carousel";

export default {
  name: "intro-section",
  components: {
    Carousel
  }
}
</script>

<style scoped lang="scss">
@import "../scss/global";
  .intro-container{
    width: 100%;
    height: 500px;
    position: relative;
  }
</style>