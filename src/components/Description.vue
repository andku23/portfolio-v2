<template>
  <section id="about">
    <AnimateOnVisible name="fadeDown" :duration="1">
      <Title :title="content.metadata.title"/>
    </AnimateOnVisible>

    <div class="section-content">

      <div class="container-fluid">
        <AnimateOnVisible name="fadeRight" :duration="1">
          <div class="row justify-content-center">
            <Photo :user="user"/>
          </div>
        </AnimateOnVisible>

        <AnimateOnVisible name="fadeRight" :duration="1.1">
          <div class="row">
            <div class="mr-auto card-mobile">
              <Presentation :content="content"/>
            </div>
          </div>
        </AnimateOnVisible>
      </div>
    </div>
  </section>
</template>

<script>
import Title from './Title.vue'
import Presentation from './Presentation.vue'
import Photo from './Photo.vue'

export default {
  name: 'AboutMe',
  props: ['user', 'content', 'links'],
  components: {
    Title,
    Presentation,
    Photo
  },
}
</script>

<style scoped lang="scss">
@import '@/styles/constants.scss';

#about {
  background-color: lighten(map-get($colors, dark), 100%);
}

@media(min-width: #{map-get($breakpoints, medium)}) {
  .section-content {
    width: 80%;
    margin: 0 auto;
  }
}

@media(max-width: #{map-get($breakpoints, medium)}) {
  .card-mobile {
    text-align: center !important;
    margin-top: 20px;
  }
}
</style>
