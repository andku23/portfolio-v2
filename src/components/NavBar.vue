<template>
    <div class = "nav-bar-container">
        <Background background-color="#000000" opacity="0.7"/>
        <ul class = "nav-bar-desktop">
            <li><a href="#"><h3>ABOUT</h3></a></li>
            <li><a href="#"><h3>PROJECTS</h3></a></li>
            <li><a href="#"><h3>CONTACT</h3></a></li>
            <li class = "home-logo"><a href="#"><h3>HOME</h3></a></li>
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
                padding: 0 30px 0 30px;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover{
                    transition: all 0.2s linear;
                    background-color: #888888;
                }
            }
            a{
                text-decoration: none;
                color: $nav-text;
            }
        }
    }
</style>