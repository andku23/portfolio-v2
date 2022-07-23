 <template>
  <header class="header parallax">
    <div class="name">
      <div class="wrapper-name">
        <AnimateOnVisible name="fadeDown" ::duration="1">
          <h1>{{ user.name }}</h1>
        </AnimateOnVisible>
        <hr />
        <AnimateOnVisible name="fadeUp" ::duration="1">
          <p>{{ user.status }}</p>
        </AnimateOnVisible>
        <AnimateOnVisible name="fadeUp" ::duration="1">
            <p class = "under-construction">Site Under Construction...</p>
          <div class = "loader-flex">
            <HeartLoader class="loader" :color="'#7BD389'" size="40"/>

          </div>
        </AnimateOnVisible>

      </div>
    </div>
  </header>
</template>

<script>
import {HeartLoader} from 'vue-spinners-css';

export default {
  name: "LandingPage",
  props: ["user"],
  components: {
    HeartLoader
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

.header {
  padding: 20px;
  background-color: map-get($colors, dark);
}

.parallax {
  background-color: map-get($colors, dark);
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.name {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 400;

  .profile-image{
    width: auto;
    height: 100px;
    border-radius: 50%;
  }

  .wrapper-name {
    width: 300px;
    height: fit-content;
  }

  h1 {
    font-size: 2.3rem;
    padding: 2px 10px;
    text-align: center;
    text-transform: uppercase;
    color: whitesmoke;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin: 5px auto;
    color: whitesmoke;


  }

  .under-construction{
    color: grey;
    font-size: 1.5rem;
    margin: 0;
    height: auto;

  }

  .loader-flex{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader{
    position: relative;
  }

  hr {
    border: 1px solid map-get($colors, light);
    width: 60%;
  }
}

@media (min-width: #{map-get($breakpoints, small)}) {
  .name {
    .wrapper-name {
    }
    h1 {
      font-size: 2.8rem;
      padding: 4% 8%;
    }
    p {
      font-size: 2rem;
    }
  }
}
@media (min-width: #{map-get($breakpoints, medium)}) {
  .name {
    .wrapper-name {
    }
    h1 {
      font-size: 4rem;
      padding: 4% 10%;
    }
    p {
      font-size: 2.5rem;
    }
  }
}
@media only screen and (max-device-width: 1024px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>
