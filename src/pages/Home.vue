<template>
    <div class = 'home-container'>
      <IntroSection/>
    </div>
</template>

<script>
  import IntroSection from "../components/intro-section";
	export default {
		name: "Home.vue",
		data: function () {
			return {}
		},
		components: {
      IntroSection
		}
	}
</script>

<style scoped lang = "scss">
    @import "../scss/global";
    .home-container{
        position: relative;
        *{
            text-align: center;
        }
        width: 100%;
    }
</style>