<template>
  <div class="carousel">
    <div class="inner" ref = "inner" :style = "innerStyles">
      <div class="card" v-for="card in cards" :key="card">
        {{ card }}
      </div>
    </div>
  </div>
  <button @click.prevent = "moveLeft" >prev</button>
  <button>next</button>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8],
      stepWidth: "",
      innerStyles: {}
    }
  },
  mounted () {
    this.setStep()
  },
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.stepWidth = `${innerWidth / totalCards}px`
    },
    next () {
      this.moveLeft()
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.stepWidth})`
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/global";

.carousel {
  width: 50%;
  height: 100%;
  overflow: hidden;

  .inner {
    white-space: nowrap;
    width: auto;
    height: 100%;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    margin-right: vh(10);
    display: inline-flex;
    /* optional */
    background-color: #39b1bd;
    align-items: center;
    justify-content: center;
  }
}





/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>