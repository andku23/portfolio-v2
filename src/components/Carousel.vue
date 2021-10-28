<template>
  <div class="carousel">
    <div class="inner" ref = "inner" :style = "innerStyles"
    @transitionend = "onTransitionEnd">
      <div class="card" v-for="card in cards" :key="card">
        <background :background-color="card.backgroundColor"></background>
        {{card.text}}
      </div>
    </div>
  </div>
  <button @click.prevent = "prev">prev</button>
  <button @click.prevent = "next">next</button>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      cards: [
        {
          text: "1",
          backgroundColor: "#550055"
        },
        {
          text: "2",
          backgroundColor: "#557722"
        },
        {
          text: "3",
          backgroundColor: "#999922"
        }
      ],
      shiftAmount: 0,
      shiftDefaultOffset: 0,
      stepWidth: 0,
      stepDefaultOffset: 0,
      innerStyles: {transform: '', transition: ''}
    }
  },
  mounted () {
    this.setStep();
    this.tripleCards();

  },
  methods: {
    tripleCards(){
      let originalLength = this.cards.length;
      this.shiftDefaultOffset = originalLength;
      this.stepDefaultOffset = this.stepWidth * originalLength;
      console.log(this.stepWidth);
      console.log(this.stepDefaultOffset);
      for(let i = 0; i < 2; i++){
        for(let j = 0; j < originalLength; j++){
          this.cards.push({...this.cards[j]});
        }
      }
      this.innerStyles = {
        transform: `translateX(${-this.stepDefaultOffset}px)`,
        transition: ``
      }
    },
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.stepWidth = innerWidth / totalCards;
    },
    shiftArray(shiftAmount){
      if(shiftAmount + this.shiftDefaultOffset < 0){
        shiftAmount = (this.cards.length - 1) + shiftAmount;
      }
      let newFirstElement = shiftAmount + this.shiftDefaultOffset;
      let newArray = [];
      for(let i = 0; i < this.cards.length; i++){
        if(newFirstElement >= this.cards.length){
          newFirstElement = 0;
        }
        newArray.push(this.cards[newFirstElement]);
        newFirstElement++;
      }
      this.cards = newArray;
    },
    onTransitionEnd (){
      this.shiftArray(this.shiftAmount);
      this.shiftAmount = 0;
      this.innerStyles.transform = `translateX(${-this.stepDefaultOffset}px)`;
      this.innerStyles.transition = ``;
    },
    next () {
      this.shiftAmount = 1;
      this.innerStyles = {
        transform: `translateX(${-this.stepWidth - this.stepDefaultOffset}px)`,
        transition: `all 0.5s linear`
      }
    },
    prev () {
      this.shiftAmount = -1;
      this.innerStyles = {
        transform: `translateX(${this.stepWidth - this.stepDefaultOffset}px)`,
        transition: `all 0.5s linear`
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