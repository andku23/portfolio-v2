<template>
    <div class="background" :style="backgroundStyle"></div>
</template>

<script>
	export default {
		name: "background",
		data: function () {
			return {}
		},
		props: {
			backgroundImage: {type: String, default: ""},
			backgroundColor: {type: String, default: "#000000"},
			opacity: {type: Number, default: 1.0}
		},
		computed: {
			backgroundStyle() {
				let style = {opacity: this.opacity, backgroundColor: this.backgroundColor};
				if (this.backgroundImage != "") {
					style.backgroundImage = `url('${this.backgroundImage}')`;
				}
				return style;
			}
		}
	}
</script>

<style scoped lang="scss">
    @import "../scss/global";

    .background {
        @extend %absolute-fill;
    }
</style>