 <template>
  <div class="social-wrap">
    <ul class = "social-flex">
      <li>
        <a href="/Resume_Andrew.pdf" target="_blank">
         <div class = "resume">
            RESUME
         </div>
        </a>
      </li>
      <li>
        <a :href="links.metadata.linkedin" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li>
        <a :href="links.metadata.github" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'github-square']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'SocialBar',
        props: ['links'],
        methods:{
          getImgUrl(img) {
            return './assets/img/logo/'+img;
          },
        }
    }
</script>

<style scoped lang="scss">
  @import '@/styles/constants.scss';
 .social-wrap {
   .social-flex{
     display: flex;
     justify-content: flex-end;
     align-items: center;
   }
    li {
      display: inline-block;
      margin-right: 10px;
    }
    .icon {
      font-size: 3rem;
    }
    .resume{
      height: 26px;
      width: fit-content;
      box-sizing: border-box;
      padding: 2px;
      background-color:#607466;
      color: map-get($colors, primary);
      font-weight: bold;
      border-radius: 2px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
