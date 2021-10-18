<template>
    <div class="nav-bar-container">
        <Background background-color="#000000" opacity="0.7"/>
        <ul class="nav-bar-desktop">
            <li class = "router-link"><RouterLink to="/"><h3>ABOUT</h3></RouterLink></li>
            <li class = "router-link"><RouterLink to="/"><h3>PROJECTS</h3></RouterLink></li>
            <li class = "router-link"><RouterLink to="/"><h3>CONTACT</h3></RouterLink></li>
            <li class="gem-counter"><h3>x{{gems}}</h3></li>
            <li class="home-logo router-link">
                <RouterLink to="/"><h3>HOME</h3></RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		name: "NavBar.vue",
		data: function () {
			return {}
		},
		computed: {
			...mapState({
				gems: state => state.app.gems,
			})
		}
	}
</script>

<style scoped lang="scss">
    @import "../scss/global";

    .nav-bar-container {
        position: fixed;
        width: 100%;
        height: 80px;

        .nav-bar-desktop {
            @extend %absolute-fill;
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(3, fit-content(50px)) 1fr fit-content(50px) fit-content(50px);
            grid-gap: 2px;
            justify-content: start;
            justify-items: center;

            .gem-counter {
                grid-column: 5 / 6;
            }

            .home-logo {
                grid-column: 6 / 7;
            }

            .router-link {

                &:hover {
                    transition: all 0.2s linear;
                    background-color: #888888;
                }
            }

            li{
                padding: 0 30px 0 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                h3{
                    text-decoration: none;
                    color: $nav-text;
                }
            }
        }
    }
</style>