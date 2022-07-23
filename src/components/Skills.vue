<template>
    <section id="skills">
        <AnimateOnVisible name="fadeDown" :duration="1">
            <h2 class = "title">SKILLS</h2>
        </AnimateOnVisible>

        <div class="section-content">
            <div class="container-fluid">
                <div class="row d-flex flex-wrap align-items-center">
                    <div class="col-md-2 m-auto pb-4" v-for="(post, index) in this.content.metadata.items" :key="index">
                        <AnimateOnVisible name="bounce">
                            <img id="imgLogo" class="img-responsive mx-auto d-block" :src="getImgUrl(post.img)" :alt="post.title"/>
                            <div id="divAlt" class="altCaption text-center">{{post.title}}</div>
                        </AnimateOnVisible>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'Skills',
        components: {
        },
        props: ['content'],
        methods: {
            getImgUrl(img) {
                return require('../assets/img/logo/'+img);
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    #skills {
        background-color: map-get($colors, dark);
    }

    .title{
      text-align: center;
      color: whitesmoke;
      font-size: 4rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    @media(min-width: #{map-get($breakpoints, medium)}) {
        .section-content {
            width: 80%;
            margin: 0 auto 50px auto;
        }
    }

    img{
        max-width: 120px;
    }

    .altCaption{
        color: whitesmoke;
        margin-top: 1rem;
    }
</style>
