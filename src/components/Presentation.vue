<template>
  <div class="paragraph">
    <h2 class="begin">{{content.metadata.pres_first}}</h2>
    <h2>{{content.metadata.pres_second}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Description',
    props: ['content']
}
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .paragraph {
        color: map-get($colors, primary);
        margin: 5%;
        .begin {
            color: map-get($colors, secondary);
        }
    }
</style>