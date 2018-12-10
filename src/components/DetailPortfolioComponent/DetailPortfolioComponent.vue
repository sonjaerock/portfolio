<template>
  <div class="main">
    <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div class="my-auto">
        <h1 class="mb-5">
          Project Title :
          <span class="text-red">{{ specificPortfolio.title }}</span>
        </h1>

        <div class="projects mb-5 row">
          <carousel :per-page="1" :mous-click="false" :mouse-drag="false">
            <slide
              :key="index"
              v-for="(screenshot, index) in specificPortfolio.screenshots">
              <img :src="screenshot">
            </slide>
          </carousel>

          <div class="description">
            <h4>상세설명 </h4>
            {{ specificPortfolio.description }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
      Carousel,
      Slide
    },
    name: 'DetailPortfolio',
    computed: {
      ...mapGetters({
        specificPortfolio: "specificPortfolio"
      }),
    },
    data () {
      return {
        id: 0,
      }
    },
    created: function () {
      this.id = this.$router.history.current.path.split('/')[2];

      console.log(this.id);
      this.$store.dispatch("setSpecificPortfolio", {
        id: this.id
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    margin-left: 17rem;
    width: 100%;
    overflow: hidden;
  }

  .resume-section {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    min-height: 100vh;
    text-align: left;
    display: table-cell;
    vertical-align: middle;
  }

  .my-auto {
    width: 100%;
    padding-top: auto !important;
    padding-bottom: auto !important;
  }
  .text-red {
    color: #bf5d32;
  }

  .description {
    width: 70%;
  }
</style>
