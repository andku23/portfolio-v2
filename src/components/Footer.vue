<template>
  <footer class="footer" :class="{isHidden: !isVisible}">
    <div>
        <font-awesome-icon class="copyright-icon" icon="copyright"/>
        2022 {{user.name}}
    </div>
    <SocialBar :links="links"/>
  </footer>
</template>

<script>
import SocialBar from './SocialBar'
export default {
  name: 'Footer',
  props: ['user', 'links'],
  components: {
    SocialBar,
  },
  data: function(){
    return {
      isVisible: false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isVisible = true;
    }, 2000);
  }
}
</script>

<style scoped lang="scss">
  @import '@/styles/constants.scss';

  $bg-footer: map-get($colors, primary) !default;

  .footer {
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0;
    transition: all 0.5s;

    padding: 10px 20px 10px 20px;
    background-color: $bg-footer;
    color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .isHidden{
    bottom: -50px;
    opacity: 0;
  }

  .copyright-icon{
      font-size: 1.5rem;
      vertical-align: middle;
  }

  /deep/ .social-wrap {
    float: right;
    .icon {
      font-size: 2.8rem;
      &:hover {
        color: map-get($colors, light);
      }
    }
  }

  /deep/ li{
      margin-bottom: 0 !important;
  }

</style>
