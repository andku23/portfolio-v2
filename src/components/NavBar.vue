<template>
    <div class = "nav-bar-container">
        <Background background-color="#000000" opacity="0.5"/>
        <ul class = "nav-bar-desktop">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li class = "home-logo"><a href="#">Home</a></li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "NavBar.vue",
		data: function () {
			return {}
		}
	}
</script>

<style scoped lang = "scss">
    @import "../scss/global";
    .nav-bar-container{
        position: fixed;
        width: 100%;
        height: 80px;

        .nav-bar-desktop{
            @extend %absolute-fill;
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(3, fit-content(50px)) 1fr fit-content(50px);
            grid-gap: 2px;
            justify-content: start;
            justify-items: center;
            .home-logo{
                grid-column: 5 / 6;
            }
            li {
                background-color:red;
                padding: 0 30px 0 30px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            a{
                text-decoration: none;
                color: $nav-text;
            }
        }
    }
</style>